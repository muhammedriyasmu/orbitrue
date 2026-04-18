function TableCard({ title, columns, rows, renderRow }) {
  return (
    <div className="glass-card overflow-hidden">
      <div className="border-b border-slate-200 px-5 py-4">
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-sky-50 text-left text-xs uppercase tracking-[0.2em] text-slate-500">
            <tr>
              {columns.map((column) => (
                <th key={column} className="px-5 py-4 font-medium">{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={row._id || row.id || index} className="border-t border-slate-100">
                {renderRow(row).map((cell, cellIndex) => (
                  <td key={cellIndex} className="px-5 py-4 text-sm text-slate-700">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableCard;
