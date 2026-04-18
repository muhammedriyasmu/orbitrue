function ContactPage() {
  return (
    <section className="container-width section-spacing">
      <div className="mx-auto max-w-4xl glass-card p-8">
        <p className="pill">Contact</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900">Start your next trip with a clear plan</h1>
        <p className="mt-4 max-w-2xl text-slate-600">
          Reach ORBITRUE for visa guidance, ticketing, hotel coordination, or itinerary planning. We reply fastest on WhatsApp and email.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-sky-50 p-5">
            <p className="text-sm uppercase tracking-[0.2em] text-sky-700">Email</p>
            <p className="mt-3 text-lg text-slate-900">support@orbitrue.com</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-sky-50 p-5">
            <p className="text-sm uppercase tracking-[0.2em] text-sky-700">Phone</p>
            <p className="mt-3 text-lg text-slate-900">+91 99999 99999</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-sky-50 p-5">
            <p className="text-sm uppercase tracking-[0.2em] text-sky-700">Office Hours</p>
            <p className="mt-3 text-lg text-slate-900">Mon-Sat, 9:30 AM to 7:00 PM</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-sky-50 p-5">
            <p className="text-sm uppercase tracking-[0.2em] text-sky-700">WhatsApp</p>
            <p className="mt-3 text-lg text-slate-900">Fastest response for travel support</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;


