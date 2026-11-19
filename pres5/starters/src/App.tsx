// src/App.tsx - Session 5 exercises (student version)
import { useState } from 'react';
import EscapeRoomForm from './exercises/ex1-escape-room/EscapeRoomForm.tsx';
import SquadBuilder from './exercises/ex2-squad-builder/SquadBuilder.tsx';
import EmployeePortal from './exercises/ex3-hr-portal/EmployeePortal.tsx';

type ExerciseView = 'ex1' | 'ex2' | 'ex3';

const TABS: { id: ExerciseView; label: string }[] = [
    { id: 'ex1', label: 'Ex 1: Escape Room' },
    { id: 'ex2', label: 'Ex 2: Squad Builder' },
    { id: 'ex3', label: 'Final: HR Portal' },
];

const App = () => {
    const [activeView, setActiveView] = useState<ExerciseView>('ex1');

    return (
        <div className="lecture-shell">
            <header className="lecture-navbar">
                <div className="lecture-title">
                    <strong>Course 10266</strong> | Session 5: React Forms and Client-Side Routing
                </div>
                <nav className="lecture-tabs">
                    {TABS.map((tab) => (
                        <button
                            key={tab.id}
                            type="button"
                            className={activeView === tab.id ? 'tab ex-tab active' : 'tab ex-tab'}
                            onClick={() => setActiveView(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </nav>
            </header>

            <main className="lecture-stage">
                {activeView === 'ex1' && <EscapeRoomForm />}
                {activeView === 'ex2' && <SquadBuilder />}
                {activeView === 'ex3' && <EmployeePortal />}
            </main>
        </div>
    );
};

export default App;
