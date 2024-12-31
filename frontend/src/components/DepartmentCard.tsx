import React from 'react';

interface DepartmentCardProps {
  name: string;
  invoiceCount: number;
  budget: number;
}

const DepartmentCard: React.FC<DepartmentCardProps> = ({ name, invoiceCount, budget }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
    <h3 className="font-semibold text-lg mb-2">{name}</h3>
    <div className="space-y-1 text-sm text-gray-600">
      <p>Invoices: {invoiceCount}</p>
      <p>Budget: ${budget.toLocaleString()}</p>
    </div>
  </div>
);

export default DepartmentCard;