// src/components/TaskManager.tsx
import { useState } from 'react';
import TaskItem, { type Task } from './TaskItem';

const INITIAL_TASKS: Task[] = [
    { id: 101, title: "Configure Vite with TypeScript", assignee: "Sarah Connor", isCompleted: true },
    { id: 102, title: "Implement REST API Authentication", assignee: "Alex Murphy", isCompleted: false },
    { id: 103, title: "Fix Virtual DOM Key Warnings", assignee: "Ellen Ripley", isCompleted: false },
    { id: 104, title: "Write Unit Tests for State Hooks", assignee: "Neo Anderson", isCompleted: false }
];

const TaskManager = () => {
    // 1. Holding the tasks array in React State
    const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);

    // TODO 5: Implement immutable deletion using .filter()
    const handleRemoveTask = (idToDelete: number) => {
        console.log("Delete task:", idToDelete);
    };

    // TODO 6: Implement immutable object update inside the array using .map() and Spread (...)
    const handleToggleTask = (idToToggle: number) => {
        console.log("Toggle task:", idToToggle);
    };

    return (
        <section className="task-manager-card">
            <header className="tm-header">
                <h2>R&D Team Task Manager</h2>
                <p>Active Tasks: <strong>{tasks.length}</strong></p>
            </header>

            <ul className="task-list">
                {tasks.map((task) => (
                    // TODO 7: Pass 'onRemove' and 'onToggle' handlers down to TaskItem
                    <TaskItem
                        key={task.id}
                        task={task}
                    />
                ))}
            </ul>

            {/* Conditional rendering when all tasks are deleted */}
            {tasks.length === 0 && (
                <p className="empty-msg">🎉 All tasks cleared! Great job team!</p>
            )}
        </section>
    );
};

export default TaskManager;