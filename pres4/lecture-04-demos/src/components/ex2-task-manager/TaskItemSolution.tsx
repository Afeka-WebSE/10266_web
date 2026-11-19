// src/components/TaskItemSolution.tsx

export interface Task {
    id: number;
    title: string;
    assignee: string;
    isCompleted: boolean;
}

// Strict contract including Callback Props for child-to-parent communication
interface TaskItemSolutionProps {
    task: Task;
    onRemove: (id: number) => void;
    onToggle: (id: number) => void;
}

const TaskItemSolution = ({ task, onRemove, onToggle }: TaskItemSolutionProps) => {
    const { id, title, assignee, isCompleted } = task;

    return (
        <li className={`task-item ${isCompleted ? 'completed' : ''}`}>
            <div className="task-info">
                <span className="task-title">{title}</span>
                <span className="task-assignee">👤 {assignee}</span>
            </div>

            <div className="task-actions">
                {/* Invoking parent callback with the specific task ID */}
                <button
                    className="btn-toggle"
                    onClick={() => onToggle(id)}
                >
                    {isCompleted ? '↩️ Undo' : '✅ Complete'}
                </button>

                <button
                    className="btn-delete"
                    onClick={() => onRemove(id)}
                >
                    🗑️ Delete
                </button>
            </div>
        </li>
    );
};

export default TaskItemSolution;