export interface TableRow {
  criteria: string;
  offline: string;
  online: string;
}

export interface ComparisonTableProps {
  rows: TableRow[];
}

export function ComparisonTable({ rows }: Readonly<ComparisonTableProps>) {
  return (
    <div className="w-full overflow-hidden rounded-lg border border-gray-200 shadow-sm">
      {/* Header */}
      <div className="grid grid-cols-3 divide-x divide-gray-700 bg-gray-900 text-white">
        <div className="p-4 text-lg font-medium">Criteria</div>
        <div className="p-4 text-lg font-medium">Offline Course</div>
        <div className="p-4 text-lg font-medium">Online Courses</div>
      </div>

      {/* Table Body */}
      <div className="divide-y divide-gray-200">
        {rows.map((row, index) => (
          <div key={index} className="grid grid-cols-3 divide-x divide-gray-200 transition-colors hover:bg-gray-50">
            <div className="p-4 font-medium">{row.criteria}</div>
            <div className="p-4">{row.offline}</div>
            <div className="p-4">{row.online}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
