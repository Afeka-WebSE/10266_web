// src/exercises/ex3-hr-portal/EmployeePortal.tsx
// Final Exercise - HR Portal (STARTER): the root component (State + Router)
//
// react-router-dom is already listed in package.json (npm install brings it).
// In a new project of your own, install it inside the project folder with:
//     npm install react-router-dom
import { useState } from 'react';
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

const EmployeePortal = () => {
    // The State lives HERE, above the Routes - every page works on the same array
    const [employees, setEmployees] = useState<Employee[]>(INITIAL_EMPLOYEES);

    // TODO 1: Add a new employee to the START of the array (immutably).
    //         The form sends the data WITHOUT an id - create it here with Date.now().
    const handleAdd = (data: EmployeeFormData) => {
        console.log('TODO: add', data);
    };

    // TODO 2: Remove the employee with this id (filter)
    const handleDelete = (id: number) => {
        console.log('TODO: delete', id);
    };

    // TODO 3: Replace the employee that has the same id (map)
    const handleUpdate = (updated: Employee) => {
        console.log('TODO: update', updated);
    };

    // Home challenge 3: save the array in localStorage (hint: useEffect)

    return (
        <BrowserRouter>
            <div className="portal">
                {/* Outside <Routes> - visible on every page */}
                <Navbar count={employees.length} />

                <main className="portal-content">
                    <Routes>
                        {/* Example: redirect the root to the directory */}
                        <Route path="/" element={<Navigate to="/directory" replace />} />

                        {/* TODO 4: /directory -> <Directory employees={...} onDelete={...} /> */}

                        {/* TODO 5: /employee/:id -> <EmployeeProfile employees={...} /> */}

                        {/* TODO 6: /add -> <EmployeeForm title="Add New Employee"
                                                       submitLabel="Create Employee"
                                                       onSave={...} /> */}

                        {/* Home challenge 1: /edit/:id -> <EditEmployee employees={...} onUpdate={...} /> */}

                        {/* Example: the 404 route - keep it last */}
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
};

export default EmployeePortal;

