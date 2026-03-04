import React from 'react';
import { Department, departmentColors } from '../utils/departmentColors';
interface DepartmentFilterProps {
  activeFilter: Department | 'all';
  onFilterChange: (filter: Department | 'all') => void;
}
export function DepartmentFilter({
  activeFilter,
  onFilterChange
}: DepartmentFilterProps) {
  const filters: {
    id: Department | 'all';
    label: string;
  }[] = [
  {
    id: 'all',
    label: 'الكل'
  },
  {
    id: 'executive',
    label: 'الإدارة التنفيذية'
  },
  {
    id: 'analysis',
    label: 'التحليل'
  },
  {
    id: 'risk',
    label: 'المخاطر'
  },
  {
    id: 'relations',
    label: 'العلاقات'
  },
  {
    id: 'fileManagement',
    label: 'إدارة الملفات'
  },
  {
    id: 'operations',
    label: 'العمليات'
  },
  {
    id: 'compliance',
    label: 'الامتثال'
  },
  {
    id: 'clientServices',
    label: 'خدمات العملاء'
  }];

  return (
    <div
      className="flex flex-wrap justify-center gap-3 mb-12"
      role="group"
      aria-label="تصفية حسب القسم">

      {filters.map((filter) => {
        const isActive = activeFilter === filter.id;
        const color =
        filter.id === 'all' ?
        '#C5A028' :
        departmentColors[filter.id as Department].primary;
        return (
          <button
            key={filter.id}
            onClick={() => onFilterChange(filter.id)}
            className={`px-5 py-2.5 rounded-full text-sm font-bold font-heading transition-all duration-300 border ${isActive ? 'text-white shadow-md' : 'bg-white text-kep-muted border-gray-200 hover:border-gray-300 hover:bg-gray-50'}`}
            style={
            isActive ?
            {
              backgroundColor: color,
              borderColor: color
            } :
            {}
            }
            aria-pressed={isActive}>

            {filter.label}
          </button>);

      })}
    </div>);

}