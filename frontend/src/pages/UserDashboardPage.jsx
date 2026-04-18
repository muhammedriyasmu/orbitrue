import useAsync from '../hooks/useAsync';
import { bookingService } from '../services/bookingService';
import StatsCard from '../components/dashboard/StatsCard';
import TableCard from '../components/dashboard/TableCard';

function UserDashboardPage() {
  const { data, loading } = useAsync(
    async () => {
      const [bookings, payments, visas] = await Promise.all([
        bookingService.getMyBookings(),
        bookingService.getPaymentHistory(),
        bookingService.getMyVisaRequests()
      ]);

      return { bookings, payments, visas };
    },
    []
  );

  if (loading) {
    return (
      <section className="container-width section-spacing">
        <div className="glass-card p-6 text-slate-600">Loading dashboard...</div>
      </section>
    );
  }

  const bookings = data?.bookings || [];
  const payments = data?.payments || [];
  const visas = data?.visas || [];

  return (
    <section className="container-width section-spacing space-y-8">
      <div>
        <p className="pill">Dashboard</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900">Track your bookings, payments, and visa requests</h1>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <StatsCard label="Bookings" value={bookings.length} helper="Saved travel requests" />
        <StatsCard label="Payments" value={payments.length} helper="Completed payment records" />
        <StatsCard label="Visa requests" value={visas.length} helper="Submitted documents and requests" />
      </div>

      <TableCard
        title="Recent bookings"
        columns={['Type', 'Selection', 'Amount', 'Status']}
        rows={bookings}
        renderRow={(row) => [row.itemType, row.item?.title || row.item?.name || row.item?.airline || '-', `$${row.amount || 0}`, row.status]}
      />

      <TableCard
        title="Visa requests"
        columns={['Destination', 'Travel date', 'Status', 'Created']}
        rows={visas}
        renderRow={(row) => [row.destinationCountry || '-', row.travelDate || '-', row.status || '-', new Date(row.createdAt).toLocaleDateString()]}
      />
    </section>
  );
}

export default UserDashboardPage;

