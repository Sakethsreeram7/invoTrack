import { create } from 'zustand'

interface Department {
  id: string;
  name: string;
  invoiceCount: number;
  budget: number;
}

interface DataState {
  departments: Department[];
  fetchDepartments: () => Promise<void>;
}

export const useDataStore = create<DataState>((set) => ({
  departments: [],
  fetchDepartments: async () => {
    // Replace with your API call
    const response = await fetch('/api/departments');
    const departments = await response.json();
    set({ departments });
  },
}));