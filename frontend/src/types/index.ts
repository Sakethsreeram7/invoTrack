export interface Department {
  id: string;
  name: string;
}

export interface City {
  id: string;
  name: string;
  departmentId: string;
}

export interface Vendor {
  id: string;
  name: string;
  cityId: string;
}

export interface Invoice {
  id: string;
  vendorId: string;
  fileName: string;
  uploadDate: string;
  url: string;
}