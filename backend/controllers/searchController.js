import { sampleFlights, sampleHotels } from '../config/sampleData.js';

export const searchFlights = async (req, res) => {
  const { from, to, class: cabinClass } = req.query;

  const results = sampleFlights.filter((flight) => {
    const fromMatch = from ? flight.from.toLowerCase().includes(from.toLowerCase()) : true;
    const toMatch = to ? flight.to.toLowerCase().includes(to.toLowerCase()) : true;
    const classMatch = cabinClass ? flight.class.toLowerCase() === cabinClass.toLowerCase() : true;
    return fromMatch && toMatch && classMatch;
  });

  res.json(results);
};

export const searchHotels = async (req, res) => {
  const { destination } = req.query;

  const results = sampleHotels.filter((hotel) =>
    destination ? hotel.destination.toLowerCase().includes(destination.toLowerCase()) : true
  );

  res.json(results);
};
