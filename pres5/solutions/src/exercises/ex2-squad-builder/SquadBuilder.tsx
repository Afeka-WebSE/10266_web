// src/exercises/ex2-squad-builder/SquadBuilder.tsx
// Exercise 2 - Squad Builder (SOLUTION)
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
    const [heroes, setHeroes] = useState<Hero[]>(INITIAL_HEROES);
    const [form, setForm] = useState<HeroForm>(EMPTY_FORM);
    const [searchQuery, setSearchQuery] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, type, value } = e.target;
        setForm((prev) =>
            ({ ...prev, [name]: type === 'number' ? Number(value) : value }));
    };

    const handleAddHero = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!form.name.trim()) return;

        // 1. A new object with a unique id
        const newHero: Hero = { id: Date.now(), ...form };

        // 2. Prepend immutably - a NEW array, never push
        setHeroes((prev) => [newHero, ...prev]);

        setForm(EMPTY_FORM);
    };

    // 3. Derived State - the original array is never overwritten
    const filteredHeroes = heroes.filter((hero) =>
        hero.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // 4. Cascading Derived State - computed from the FILTERED list
    const visiblePower = filteredHeroes
        .reduce((sum, hero) =>
            sum + hero.power, 0);

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

            {/* 5. Empty states: the source first, then the derived list */}
            {heroes.length === 0 ? (
                <p className="empty-state">No heroes in the squad yet.</p>
            ) : filteredHeroes.length === 0 ? (
                <p className="empty-state">No heroes match your search.</p>
            ) : (
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
            )}
        </article>
    );
};

export default SquadBuilder;
