// src/exercises/ex2-squad-builder/heroes.ts
export interface Hero {
    id: number;
    name: string;
    superpower: string;
    power: number; // 1-100
}

export const INITIAL_HEROES: Hero[] = [
    { id: 1, name: 'Tiger', superpower: 'Super speed', power: 50 },
    { id: 2, name: 'Spider-Man', superpower: 'Web slinging', power: 85 },
    { id: 3, name: 'Iron Man', superpower: 'Powered armor', power: 90 },
    { id: 4, name: 'Batman', superpower: 'Detective skills', power: 80 },
];
