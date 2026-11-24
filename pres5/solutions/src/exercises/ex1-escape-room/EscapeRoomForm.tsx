// src/exercises/ex1-escape-room/EscapeRoomForm.tsx
// Exercise 1 - Escape Room Booking (SOLUTION)
import React, { useState } from 'react';
import './EscapeRoom.css';

type Difficulty = 'Easy' | 'Medium' | 'Extreme';

interface Booking {
    teamName: string;
    difficulty: Difficulty;
    participants: number;
    acceptTerms: boolean;
}

const EscapeRoomForm = () => {
    const [booking, setBooking] = useState<Booking>({
        teamName: '',
        difficulty: 'Easy',
        participants: 2,
        acceptTerms: false,
    });

    // 1. One generic handler for every field type
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, type, value } = e.target;
        const newValue =
            type === 'checkbox'
                ? (e.target as HTMLInputElement).checked // only <input> has "checked"
                : type === 'number'
                  ? Number(value) // input values are ALWAYS strings
                  : value;

        setBooking((prev) => ({ ...prev, [name]: newValue }));
    };

    // 2. Derived validation - recalculated on every render, no extra State
    const isTeamNameValid = booking.teamName.trim().length >= 3;
    const isParticipantsValid = booking.participants >= 2 && booking.participants <= 6;

    // 3. Challenge: a rule that crosses two fields
    const isExtremeValid = booking.difficulty !== 'Extreme' || booking.participants >= 4;

    // 4. The form is valid only if ALL the rules pass
    const isFormValid =
        isTeamNameValid && isParticipantsValid && isExtremeValid && booking.acceptTerms;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(`Booking confirmed for team ${booking.teamName}!`);
    };

    const showTeamNameError = booking.teamName.length > 0 && !isTeamNameValid;

    return (
        <article className="booking-card">
            <h2>Escape Room Booking</h2>

            <form onSubmit={handleSubmit} className="booking-form">
                <div className="field-group">
                    <label htmlFor="teamName">Team Name:</label>
                    <input
                        id="teamName"
                        type="text"
                        name="teamName"
                        value={booking.teamName}
                        onChange={handleChange}
                        className={showTeamNameError ? 'invalid' : ''}
                    />
                    {showTeamNameError && (
                        <span className="error">Team name must be at least 3 characters</span>
                    )}
                </div>

                <div className="field-group">
                    <label htmlFor="difficulty">Difficulty:</label>
                    <select
                        id="difficulty"
                        name="difficulty"
                        value={booking.difficulty}
                        onChange={handleChange}
                    >
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Extreme">Extreme</option>
                    </select>
                </div>

                <div className="field-group">
                    <label htmlFor="participants">Participants (2-6):</label>
                    <input
                        id="participants"
                        type="number"
                        name="participants"
                        value={booking.participants}
                        onChange={handleChange}
                        className={!isParticipantsValid || !isExtremeValid ? 'invalid' : ''}
                    />
                    {!isParticipantsValid && (
                        <span className="error">Participants must be between 2 and 6</span>
                    )}
                    {isParticipantsValid && !isExtremeValid && (
                        <span className="error">Extreme level requires at least 4 participants</span>
                    )}
                </div>

                <div className="field-group">
                    <label className="checkbox-label">
                        <input
                            type="checkbox"
                            name="acceptTerms"
                            checked={booking.acceptTerms}
                            onChange={handleChange}
                        />
                        I accept the terms and conditions
                    </label>
                </div>

                <button type="submit" className="btn-book" disabled={!isFormValid}>
                    Book Now
                </button>
            </form>
        </article>
    );
};

export default EscapeRoomForm;
