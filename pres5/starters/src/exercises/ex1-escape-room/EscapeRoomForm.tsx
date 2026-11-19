// src/exercises/ex1-escape-room/EscapeRoomForm.tsx
// Exercise 1 - Escape Room Booking (STARTER)
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
    // A unified State object for the whole form (ready for you)
    const [booking, setBooking] = useState<Booking>({
        teamName: '',
        difficulty: 'Easy',
        participants: 2,
        acceptTerms: false,
    });

    // TODO 1: Implement ONE generic handleChange for all the fields.
    //   - Read name, type and value from e.target
    //   - checkbox -> use (e.target as HTMLInputElement).checked
    //   - number   -> convert with Number(value)
    //   - otherwise -> value
    //   - Update ONLY the changed field: setBooking(prev => ({ ...prev, [name]: newValue }))
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        console.log('TODO: update the state for', e.target.name);
    };

    // TODO 2: Derived validation - calculate on every render (no extra useState!)
    const isTeamNameValid = false;   // at least 3 characters (use trim)
    const isParticipantsValid = false; // between 2 and 6

    // TODO 3 (challenge): "Extreme" requires at least 4 participants
    const isExtremeValid = false;

    // TODO 4: The form is valid only if ALL the rules pass (including acceptTerms)
    const isFormValid = false;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert(`Booking confirmed for team ${booking.teamName}!`);
    };

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
                    />
                    {/* TODO 5: Show "Team name must be at least 3 characters"
                        only after the user started typing and the name is still invalid */}
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
                    />
                    {/* TODO 6: Show "Participants must be between 2 and 6" when needed */}
                    {/* TODO 7 (challenge): Show "Extreme level requires at least 4 participants" */}
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

                {/* The button is disabled until the whole form is valid */}
                <button type="submit" className="btn-book" disabled={!isFormValid}>
                    Book Now
                </button>
            </form>

        </article>
    );
};

export default EscapeRoomForm;
