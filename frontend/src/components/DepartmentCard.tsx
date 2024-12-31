import React from 'react';
import { FolderTree } from 'lucide-react';

interface DepartmentCardProps {
  name: string;
  itemCount: number;
}

const DepartmentCard = ({ name, itemCount }: DepartmentCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow cursor-pointer">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
            <FolderTree className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">{name}</h3>
            <p className="text-sm text-gray-500">{itemCount} items</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentCard;