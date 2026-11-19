// src/exercises/ex3-hr-portal/components/EmployeeForm.tsx
// One reusable form - used by /add now, and by /edit/:id in Home challenge 1
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DEPARTMENTS, type EmployeeFormData } from '../types.ts';

interface EmployeeFormProps {
    title: string;
    submitLabel: string;
    initialData?: EmployeeFormData; // Edit mode: existing data. Add mode: undefined
    onSave: (data: EmployeeFormData) => void;
}

const EMPTY_EMPLOYEE: EmployeeFormData = {
    name: '',
    role: '',
    department: 'R&D',
    email: '',
};

const EmployeeForm = ({ title, submitLabel, initialData, onSave }: EmployeeFormProps) => {
    const navigate = useNavigate();

    // Start from the existing data (edit) or from an empty form (add)
    const [formData, setFormData] = useState<EmployeeFormData>(initialData ?? EMPTY_EMPLOYEE);

    // TODO 9: One generic handleChange - update only the field that changed ([name]: value)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        console.log('TODO: update', e.target.name);
    };

    // TODO 10: Derived validation - name has 2+ characters, role is not empty,
    //          email contains "@". Then use it to disable the submit button.
    const isFormValid = true;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // TODO 11: 1. Save in the parent with onSave(formData)
        //          2. Redirect to "/directory" with navigate(...)
    };

    return (
        <>
            <h2>{title}</h2>
            <form onSubmit={handleSubmit} className="employee-form">
                <input name="name" placeholder="Full name"
                       value={formData.name} onChange={handleChange} />
                <input name="email" type="email" placeholder="Email address"
                       value={formData.email} onChange={handleChange} />
                <input name="role" placeholder="Job title"
                       value={formData.role} onChange={handleChange} />
                <select name="department" value={formData.department} onChange={handleChange}>
                    {DEPARTMENTS.map((dep) => (
                        <option key={dep} value={dep}>{dep}</option>
                    ))}
                </select>

                <div className="card-actions">
                    <button type="submit" className="btn btn-primary" disabled={!isFormValid}>
                        {submitLabel}
                    </button>
                    {/* type="button" - otherwise it would submit the form */}
                    <button type="button" className="btn btn-secondary" onClick={() => navigate(-1)}>
                        Cancel
                    </button>
                </div>
            </form>
        </>
    );
};

export default EmployeeForm;
