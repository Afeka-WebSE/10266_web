// src/exercises/ex3-hr-portal/pages/EmployeeProfile.tsx
import { Link, useNavigate, useParams } from 'react-router-dom';
import type { Employee } from '../types.ts';

interface EmployeeProfileProps {
    employees: Employee[];
}

const EmployeeProfile = ({ employees }: EmployeeProfileProps) => {
    const navigate = useNavigate();

    // 1. URL parameters are ALWAYS strings
    const { id } = useParams<{ id: string }>();

    // 2. Convert to number before comparing with the data
    const employee = employees.find((emp) => emp.id === Number(id));

    if (!employee) {
        return (
            <div className="profile">
                <h2>Employee #{id} not found</h2>
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
