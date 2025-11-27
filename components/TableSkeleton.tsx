import { FC } from 'react';

const TableSkeleton: FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-x-auto w-full">
      <table className="w-full text-left">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            <th className="p-4 font-semibold text-gray-600">Short Link</th>
            <th className="p-4 font-semibold text-gray-600">Original URL</th>
            <th className="p-4 font-semibold text-gray-600">Clicks</th>
            <th className="p-4 font-semibold text-gray-600">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {[...Array(5)].map((_, index) => (
            <tr key={index} className="animate-pulse">
              <td className="p-4">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </td>
              <td className="p-4">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
              </td>
              <td className="p-4">
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              </td>
              <td className="p-4">
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableSkeleton;