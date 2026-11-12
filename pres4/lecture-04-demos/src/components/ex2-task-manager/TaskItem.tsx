// src/components/TaskItem.tsx

// Defining the Data Model Contract for a single task
export interface Task {
    id: number;
    title: string;
    assignee: string;
    isCompleted: boolean;
}

// TODO 1: Complete the Props Interface
interface TaskItemProps {
    task: Task;
    // Define 'onRemove' callback prop: a function taking (id: number) and returning void
    // Define 'onToggle' callback prop: a function taking (id: number) and returning void
}

// TODO 2: Destructure task, onRemove, and onToggle from props
const TaskItem = ({ task }: TaskItemProps) => {
    return (
        <li className={`task-item ${task.isCompleted ? 'completed' : ''}`}>
            <div className="task-info">
                <span className="task-title">{task.title}</span>
                <span className="task-assignee">👤 {task.assignee}</span>
            </div>

            <div className="task-actions">
                {/* TODO 3: Trigger onToggle with task.id when clicked */}
                <button className="btn-toggle">
                    {task.isCompleted ? '↩️ Undo' : '✅ Complete'}
                </button>

                {/* TODO 4: Trigger onRemove with task.id when clicked */}
                <button className="btn-delete">
                    🗑️ Delete
                </button>
            </div>
        </li>
    );
};

export default TaskItem;