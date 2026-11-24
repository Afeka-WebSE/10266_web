// src/exercises/ex3-hr-portal/components/EmployeeForm.tsx
// Challenge 1: ONE reusable form for both Add and Edit
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

    // ?? (nullish coalescing): use the existing data, or an empty form
    const [formData, setFormData] = useState<EmployeeFormData>(initialData ?? EMPTY_EMPLOYEE);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) =>
            ({ ...prev, [name]: value }));
    };

    // Derived validation
    const isFormValid =
        formData.name.trim().length >= 2 &&
        formData.role.trim().length > 0 &&
        formData.email.includes('@');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSave(formData);        // 1. save in the parent (App)
        navigate('/directory');  // 2. redirect from code
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
