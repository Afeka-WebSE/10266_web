// src/exercises/ex3-hr-portal/EmployeePortal.tsx
// Final Exercise - HR Portal (SOLUTION): the root component (State + Router)
import { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import type { Employee, EmployeeFormData } from './types.ts';
import { INITIAL_EMPLOYEES } from './employees.ts';
import Navbar from './components/Navbar.tsx';
import EmployeeForm from './components/EmployeeForm.tsx';
import Directory from './pages/Directory.tsx';
import EmployeeProfile from './pages/EmployeeProfile.tsx';
import EditEmployee from './pages/EditEmployee.tsx';
import NotFound from './pages/NotFound.tsx';
import './portal.css';

const STORAGE_KEY = 'hr-portal-employees';

const EmployeePortal = () => {
    // Challenge 3: lazy initializer - reads localStorage only on the first render
    const [employees, setEmployees] = useState<Employee[]>(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? (JSON.parse(saved) as Employee[]) : INITIAL_EMPLOYEES;
    });

    // Challenge 3: save on every change of the array
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(employees));
    }, [employees]);

    // The three Callback functions - the State lives here, above the Routes
    const handleAdd = (data: EmployeeFormData) => {
        // The id is created here, in an event handler - never during render
        setEmployees((prev) => [{ ...data, id: Date.now() }, ...prev]);
    };

    const handleDelete = (id: number) => {
        setEmployees((prev) =>
            prev.filter((emp) => emp.id !== id));
    };

    const handleUpdate = (updated: Employee) =>
    {
        setEmployees((prev) =>
            prev.map((emp) =>
                (emp.id === updated.id ? updated : emp)));
    };

    return (
        <BrowserRouter>
            <div className="portal">
                {/* Outside <Routes> - visible on every page */}
                <Navbar count={employees.length} />

                <main className="portal-content">
                    <Routes>
                        <Route path="/" element={<Navigate to="/directory" replace />} />
                        <Route
                            path="/directory"
                            element={<Directory employees={employees} onDelete={handleDelete} />}
                        />
                        <Route
                            path="/employee/:id"
                            element={<EmployeeProfile employees={employees} />}
                        />
                        <Route
                            path="/add"
                            element={
                                <EmployeeForm
                                    title="Add New Employee"
                                    submitLabel="Create Employee"
                                    onSave={handleAdd}
                                />
                            }
                        />
                        {/* Challenge 1: the same form, wrapped by an Edit page */}
                        <Route
                            path="/edit/:id"
                            element={<EditEmployee employees={employees} onUpdate={handleUpdate} />}
                        />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
};

export default EmployeePortal;
