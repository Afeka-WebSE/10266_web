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

    // TODO 12: Derived State - filter by name (case-insensitive) AND by department
    //          ("All" means: do not filter by department)
    const filteredEmployees = employees;

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
                {/* TODO 13: A <Link> to "/add" with the text "+ New Employee" (className="btn btn-primary") */}
            </div>

            {/* TODO 14: Two empty states - no employees at all / no search results */}
            <div className="employee-grid">
                {filteredEmployees.map((emp) => (
                    <article key={emp.id} className="employee-card">
                        <h3>{emp.name}</h3>
                        <p>{emp.role} | {emp.department}</p>
                        <div className="card-actions">
                            {/* Example - a dynamic URL with a template literal */}
                            <Link to={`/employee/${emp.id}`} className="btn btn-view">View</Link>

                            {/* TODO 15: Edit - a <Link> to `/edit/${emp.id}` (className="btn btn-edit") */}

                            {/* TODO 16: Delete - call onDelete(emp.id) from the parent.
                                Home challenge 2: ask window.confirm(...) first */}
                            <button type="button" className="btn btn-delete"
                                    onClick={() => console.log('TODO: delete', emp.id)}>
                                Delete
                            </button>
                        </div>
                    </article>
                ))}
            </div>
        </>
    );
};

export default Directory;
