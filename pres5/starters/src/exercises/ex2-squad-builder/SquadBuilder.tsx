// src/exercises/ex2-squad-builder/SquadBuilder.tsx
// Exercise 2 - Squad Builder (STARTER)
import React, { useState } from 'react';
import { INITIAL_HEROES, type Hero } from './heroes.ts';
import './SquadBuilder.css';

interface HeroForm {
    name: string;
    superpower: string;
    power: number;
}

const EMPTY_FORM: HeroForm = { name: '', superpower: '', power: 50 };

const SquadBuilder = () => {
    // 1. The original data - the "safe vault"
    const [heroes, setHeroes] = useState<Hero[]>(INITIAL_HEROES);

    // The add-hero form (a controlled multi-field form - ready for you)
    const [form, setForm] = useState<HeroForm>(EMPTY_FORM);

    // The search box
    const [searchQuery, setSearchQuery] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, type, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: type === 'number' ? Number(value) : value }));
    };

    const handleAddHero = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!form.name.trim()) return;

        // TODO 1: Create a new Hero object with a unique id (Date.now())
        // TODO 2: Prepend it to the heroes array - immutably (no push!)

        setForm(EMPTY_FORM);
    };

    // TODO 3: Derived State - filter the heroes by name (case-insensitive).
    //         Do NOT call setHeroes here - the original array must stay complete.
    const filteredHeroes: Hero[] = heroes;

    // TODO 4 (challenge): Cascading Derived State -
    //         sum the power of the heroes that are CURRENTLY VISIBLE (filteredHeroes)
    const visiblePower = 0;

    return (
        <article className="squad-card">
            <h2>Squad Builder</h2>

            <div className="power-counter">
                Visible Squad Power: <strong>{visiblePower}</strong>
            </div>

            <form onSubmit={handleAddHero} className="hero-form">
                <input type="text" name="name" placeholder="Hero name"
                       value={form.name} onChange={handleChange} />
                <input type="text" name="superpower" placeholder="Superpower"
                       value={form.superpower} onChange={handleChange} />
                <input type="number" name="power" min={1} max={100}
                       value={form.power} onChange={handleChange} />
                <button type="submit" className="btn-add">Add Hero</button>
            </form>

            <input
                type="text"
                className="search-input"
                placeholder="Search heroes by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />

            {/* TODO 5: Two empty states (check the source first, then the derived list):
                  heroes.length === 0         -> "No heroes in the squad yet."
                  filteredHeroes.length === 0 -> "No heroes match your search." */}
            <ul className="hero-list">
                {filteredHeroes.map((hero) => (
                    <li key={hero.id} className="hero-item">
                        <div>
                            <strong>{hero.name}</strong>
                            <small>{hero.superpower}</small>
                        </div>
                        <span className="power-badge">Power: {hero.power}</span>
                    </li>
                ))}
            </ul>
        </article>
    );
};

export default SquadBuilder;
