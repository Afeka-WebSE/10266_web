// src/exercises/ex3-hr-portal/pages/Directory.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DEPARTMENTS, type Employee } from '../types.ts';

interface DirectoryProps {
    employees: Employee[];
    onDelete: (id: number) => void;
}

const Directory = ({ employees, onDelete }: DirectoryProps) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [departmentFilter, setDepartmentFilter] = useState('All');

    // Derived State - two filters together
    const filteredEmployees = employees.filter((emp) => {
        const matchesName = emp.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesDepartment = departmentFilter === 'All' || emp.department === departmentFilter;
        return matchesName && matchesDepartment;
    });

    // Challenge 2: safe deletion
    const handleDeleteClick = (emp: Employee) => {
        if (window.confirm(`Are you sure you want to delete ${emp.name}?`)) {
            onDelete(emp.id);
        }
    };

    return (
        <>
            <div className="toolbar">
                <input
                    type="text"
                    placeholder="Search by name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <select value={departmentFilter} onChange={(e) => setDepartmentFilter(e.target.value)}>
                    <option value="All">All departments</option>
                    {DEPARTMENTS.map((dep) => (
                        <option key={dep} value={dep}>{dep}</option>
                    ))}
                </select>
                <Link to="/add" className="btn btn-primary">+ New Employee</Link>
            </div>

            {employees.length === 0 ? (
                <p className="empty-state">No employees in the system yet.</p>
            ) : filteredEmployees.length === 0 ? (
                <p className="empty-state">No employees match your search.</p>
            ) : (
                <div className="employee-grid">
                    {filteredEmployees.map((emp) => (
                        <article key={emp.id} className="employee-card">
                            <h3>{emp.name}</h3>
                            <p>{emp.role} | {emp.department}</p>
                            <div className="card-actions">
                                {/* Template literals build a dynamic URL per employee */}
                                <Link to={`/employee/${emp.id}`} className="btn btn-view">View</Link>
                                <Link to={`/edit/${emp.id}`} className="btn btn-edit">Edit</Link>
                                <button type="button" className="btn btn-delete" onClick={() => handleDeleteClick(emp)}>
                                    Delete
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            )}
        </>
    );
};

export default Directory;
