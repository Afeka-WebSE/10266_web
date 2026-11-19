// src/components/TaskManagerSolution.tsx
import { useState } from 'react';
import TaskItem, { type Task } from './TaskItemSolution';
import './Tasks.css';

const INITIAL_TASKS: Task[] = [
    { id: 101, title: "Configure Vite with TypeScript", assignee: "Sarah Connor", isCompleted: true },
    { id: 102, title: "Implement REST API Authentication", assignee: "Alex Murphy", isCompleted: false },
    { id: 103, title: "Fix Virtual DOM Key Warnings", assignee: "Ellen Ripley", isCompleted: false },
    { id: 104, title: "Write Unit Tests for State Hooks", assignee: "Neo Anderson", isCompleted: false }
];

const TaskManagerSolution = () => {
    const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);

    // 1. Immutable Deletion: .filter() creates a brand new array reference without the target ID
    const handleRemoveTask = (idToDelete: number) => {
        setTasks((prevTasks) =>
            prevTasks.filter((task) => task.id !== idToDelete)
        );
    };

    // 2. Immutable Object Update inside an Array: .map() + Spread Operator (...)
    const handleToggleTask = (idToToggle: number) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === idToToggle
                    ? { ...task, isCompleted: !task.isCompleted } // New object reference for the updated item
                    : task // Keep existing reference for untouched items
            )
        );
    };

    // Derived statistics calculated on every render
    const completedCount = tasks.filter((t) => t.isCompleted).length;

    return (
        <section className="task-manager-card">
            <header className="tm-header">
                <h2>R&D Team Task Manager</h2>
                <p>
                    Total: <strong>{tasks.length}</strong> |
                    Completed: <strong>{completedCount}</strong>
                </p>
            </header>

            <ul className="task-list">
                {tasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        onRemove={handleRemoveTask}
                        onToggle={handleToggleTask}
                    />
                ))}
            </ul>

            {tasks.length === 0 && (
                <div className="empty-state">
                    <p className="empty-msg">🎉 All tasks cleared! Great job team!</p>
                    <button
                        className="btn-reset"
                        onClick={() => setTasks(INITIAL_TASKS)}
                    >
                        🔄 Restore Default Tasks
                    </button>
                </div>
            )}
        </section>
    );
};

export default TaskManagerSolution;