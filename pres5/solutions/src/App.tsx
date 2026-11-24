// src/App.tsx - Session 5 demos and exercise solutions (instructor version)
import { useState, type ReactNode } from 'react';
import SimpleInputDemo from './demos/demo1-controlled-input/SimpleInputDemo.tsx';
import PreventDefaultDemo from './demos/demo2-form-submit/PreventDefaultDemo.tsx';
import MultiFieldFormDemo from './demos/demo3-unified-state/MultiFieldFormDemo.tsx';
import LiveValidationDemo from './demos/demo4-validation/LiveValidationDemo.tsx';
import AddToListDemo from './demos/demo5-add-to-list/AddToListDemo.tsx';
import FilterListDemo from './demos/demo6-list-filtering/FilterListDemo.tsx';
import MultiFilterDemo from './demos/demo7-multi-filter/MultiFilterDemo.tsx';
import EscapeRoomForm from './exercises/ex1-escape-room/EscapeRoomForm.tsx';
import SquadBuilder from './exercises/ex2-squad-builder/SquadBuilder.tsx';
import EmployeePortal from './exercises/ex3-hr-portal/EmployeePortal.tsx';

interface Tab {
    id: string;
    label: string;
    isExercise: boolean;
    render: () => ReactNode;
}

// Tabs follow the order of the slides
const TABS: Tab[] = [
    { id: 'demo1', label: 'Controlled Input', isExercise: false, render: () => <SimpleInputDemo /> },
    { id: 'demo2', label: 'Prevent Default', isExercise: false, render: () => <PreventDefaultDemo /> },
    { id: 'demo3', label: 'Multi-Field Form', isExercise: false, render: () => <MultiFieldFormDemo /> },
    { id: 'demo4', label: 'Live Validation', isExercise: false, render: () => <LiveValidationDemo /> },
    { id: 'ex1', label: 'Ex 1: Escape Room', isExercise: true, render: () => <EscapeRoomForm /> },
    { id: 'demo5', label: 'Add To List', isExercise: false, render: () => <AddToListDemo /> },
    { id: 'demo6', label: 'Filter List', isExercise: false, render: () => <FilterListDemo /> },
    { id: 'demo7', label: 'Multi Filter', isExercise: false, render: () => <MultiFilterDemo /> },
    { id: 'ex2', label: 'Ex 2: Squad Builder', isExercise: true, render: () => <SquadBuilder /> },
    { id: 'ex3', label: 'Final: HR Portal', isExercise: true, render: () => <EmployeePortal /> },
];

const App = () => {
    const [activeId, setActiveId] = useState<string>('demo1');
    const activeTab = TABS.find((tab) => tab.id === activeId) ?? TABS[0];

    return (
        <div className="lecture-shell">
            <header className="lecture-navbar">
                <div className="lecture-title">
                    <strong>Course 10266</strong> | Session 5: React Forms and Client-Side Routing
                </div>
                <nav className="lecture-tabs">
                    {TABS.map((tab) => {
                        const base = tab.isExercise ? 'tab ex-tab' : 'tab';
                        return (
                            <button
                                key={tab.id}
                                type="button"
                                className={tab.id === activeId ? `${base} active` : base}
                                onClick={() => setActiveId(tab.id)}
                            >
                                {tab.label}
                            </button>
                        );
                    })}
                </nav>
            </header>

            <main className="lecture-stage">{activeTab.render()}</main>
        </div>
    );
};

export default App;
