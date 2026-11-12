// src/components/ex1-server-monitor/ServerMonitorStarter.tsx
// TODO 1: Import useState from 'react'

const ServerMonitorStarter = () => {
    // TODO 2: Define 'isOnline' boolean state (initial value: true)
    // TODO 3: Define 'cpuLoad' number state (initial value: 20)

    const handleTogglePower = () => {
        // TODO 4: Toggle the server status.
        // If turning OFF -> reset cpuLoad to 0!
        // If turning ON  -> set cpuLoad back to baseline (20)
    };

    const handleAddTraffic = () => {
        // TODO 5: Increase cpuLoad by 15% using functional update (prev => ...).
        // Use Math.min(100, ...) so it never exceeds 100%.
    };

    return (
        <article className="server-card">
            {/* Visual Server Header & Progress Bar */}
            <div className="server-visual-box">
                <span className="server-id">NODE: AWS-EU-CENTRAL-1</span>
                <div className="cpu-bar-track">
                    <div
                        className="cpu-bar-fill"
                        style={{ width: '20%' /* TODO: bind dynamically to cpuLoad */ }}
                    />
                </div>
            </div>

            {/* TODO 6: Display dynamic status ("🟢 ONLINE" or "🔴 OFFLINE") and CSS class */}
            <div className="status-indicator online">
                🟢 ONLINE
            </div>

            {/* TODO 7: Display dynamic CPU Load percentage */}
            <p className="cpu-text">
                CPU Load: <strong>20%</strong>
            </p>

            {/* Control Buttons */}
            <div className="button-group">
                <button className="btn btn-power" onClick={handleTogglePower}>
                    Toggle Power
                </button>

                {/* TODO 8: Render or enable 'Simulate Traffic' ONLY when the server is Online */}
                <button className="btn btn-traffic" onClick={handleAddTraffic}>
                    Simulate Traffic (+15% CPU)
                </button>
            </div>

            {/* TODO 9: Pre-condition (&&) - Render alert ONLY if cpuLoad > 80 */}
            {/* <div className="overload-alert">CRITICAL CPU OVERLOAD!</div> */}
        </article>
    );
};

export default ServerMonitorStarter;
// Child Interface declaring Callback Prop
interface TaskItemProps {
    id: number;
    title: string;
    onRemove: (taskId: number) => void; // Function prop signature
}

const TaskItem = ({ id, title, onRemove }: TaskItemProps) => (
    <li>
        {title} <button onClick={() => onRemove(id)}>Delete</button>
    </li>
);
