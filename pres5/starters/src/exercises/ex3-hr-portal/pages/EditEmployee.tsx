// src/exercises/ex3-hr-portal/pages/EditEmployee.tsx
// Home challenge 1: an Edit page that REUSES <EmployeeForm>
import type { Employee } from '../types.ts';

interface EditEmployeeProps {
    employees: Employee[];
    onUpdate: (employee: Employee) => void;
}

// TODO (Home challenge 1):
//   1. Read the id from the URL and find the employee (like EmployeeProfile)
//   2. If not found - return <NotFound />
//   3. Otherwise return <EmployeeForm> with:
//        title="Edit Employee", submitLabel="Save Changes",
//        initialData={employee},
//        onSave={(data) => onUpdate({ ...data, id: employee.id })}
//        key={employee.id}   <- important! Without a key, moving from /edit/101
//                               to /edit/102 keeps the OLD form State.
const EditEmployee = ({ employees, onUpdate }: EditEmployeeProps) => {
    return <p className="empty-state">Edit page - Home challenge 1</p>;
};

export default EditEmployee;
