// src/exercises/ex3-hr-portal/pages/EditEmployee.tsx
// Challenge 1: an Edit page that reuses <EmployeeForm>
import { useParams } from 'react-router-dom';
import type { Employee } from '../types.ts';
import EmployeeForm from '../components/EmployeeForm.tsx';
import NotFound from './NotFound.tsx';

interface EditEmployeeProps {
    employees: Employee[];
    onUpdate: (employee: Employee) => void;
}

const EditEmployee = ({ employees, onUpdate }: EditEmployeeProps) => {
    const { id } = useParams<{ id: string }>();
    const employee = employees.find((emp) => emp.id === Number(id));

    if (!employee) return <NotFound />;

    return (
        <EmployeeForm
            // key = the employee id: moving from /edit/101 to /edit/102 creates a
            // NEW form instance, so the form State never keeps the previous employee
            key={employee.id}
            title="Edit Employee"
            submitLabel="Save Changes"
            initialData={employee}
            onSave={(data) => onUpdate({ ...data, id: employee.id })}
        />
    );
};

export default EditEmployee;
