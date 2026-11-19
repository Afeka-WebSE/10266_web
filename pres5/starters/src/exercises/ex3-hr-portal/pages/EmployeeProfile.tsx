// src/exercises/ex3-hr-portal/pages/EmployeeProfile.tsx
import { Link, useNavigate } from 'react-router-dom';
import type { Employee } from '../types.ts';

interface EmployeeProfileProps {
    employees: Employee[];
}

const EmployeeProfile = ({ employees }: EmployeeProfileProps) => {
    const navigate = useNavigate();

    // TODO 17: Read the id from the URL with useParams<{ id: string }>()
    // TODO 18: Find the employee - remember: URL parameters are ALWAYS strings,
    //          so convert with Number(id) before comparing
    const employee = undefined as Employee | undefined;

    if (!employee) {
        return (
            <div className="profile">
                <h2>Employee not found</h2>
                <div className="card-actions">
                    <Link to="/directory" className="btn btn-primary">Back to Directory</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="profile">
            <div className="avatar">{employee.name.charAt(0)}</div>
            <h2>{employee.name}</h2>
            <p><strong>Role:</strong> {employee.role}</p>
            <p><strong>Department:</strong> {employee.department}</p>
            <p><strong>Email:</strong> {employee.email}</p>
            <div className="card-actions">
                <button type="button" className="btn btn-secondary" onClick={() => navigate(-1)}>
                    Back
                </button>
                <Link to={`/edit/${employee.id}`} className="btn btn-edit">Edit</Link>
            </div>
        </div>
    );
};

export default EmployeeProfile;
