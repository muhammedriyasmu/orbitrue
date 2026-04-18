import useAsync from '../hooks/useAsync';
import { bookingService } from '../services/bookingService';
import StatsCard from '../components/dashboard/StatsCard';
import TableCard from '../components/dashboard/TableCard';

function AdminDashboardPage() {
  const { data, loading } = useAsync(() => bookingService.getAdminOverview(), []);

  if (loading) {
    return (
      <section className="container-width section-spacing">
        <div className="glass-card p-6 text-slate-600">Loading admin overview...</div>
      </section>
    );
  }

  const analytics = data?.analytics || {};
  const users = data?.users || [];
  const bookings = data?.bookings || [];
  const visas = data?.visas || [];

  return (
    <section className="container-width section-spacing space-y-8">
      <div>
        <p className="pill">Admin</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900">Operational overview for ORBITRUE</h1>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <StatsCard label="Total bookings" value={analytics.totalBookings || 0} helper="All stored bookings" />
        <StatsCard label="Revenue" value={`$${analytics.totalRevenue || 0}`} helper="Recorded payments" />
        <StatsCard label="Active users" value={analytics.activeUsers || 0} helper="Registered user profiles" />
        <StatsCard label="Visa applications" value={analytics.visaApplications || 0} helper="Tracked visa submissions" />
      </div>

      <TableCard
        title="Users"
        columns={['Name', 'Email', 'Phone']}
        rows={users}
        renderRow={(row) => [row.name || '-', row.email || '-', row.phone || '-']}
      />

      <TableCard
        title="Bookings"
        columns={['Type', 'Amount', 'Status', 'Created']}
        rows={bookings}
        renderRow={(row) => [row.itemType || '-', `$${row.amount || 0}`, row.status || '-', new Date(row.createdAt).toLocaleDateString()]}
      />

      <TableCard
        title="Visa requests"
        columns={['Name', 'Destination', 'Status', 'Created']}
        rows={visas}
        renderRow={(row) => [row.name || '-', row.destinationCountry || '-', row.status || '-', new Date(row.createdAt).toLocaleDateString()]}
      />
    </section>
  );
}

export default AdminDashboardPage;

