// src/exercises/ex3-hr-portal/types.ts
export type Department = 'R&D' | 'Cyber' | 'Product';

export const DEPARTMENTS: Department[] = ['R&D', 'Cyber', 'Product'];

export interface Employee {
    id: number;
    name: string;
    role: string;
    department: Department;
    email: string;
}

// The form edits everything except the id (the id is created by the parent)
export type EmployeeFormData = Omit<Employee, 'id'>;
