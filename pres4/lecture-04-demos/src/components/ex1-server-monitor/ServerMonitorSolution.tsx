// src/components/ex1-server-monitor/ServerMonitor.tsx
import { useState } from 'react';
import './ServerMonitor.css';

const ServerMonitorSolution = () => {
    // 1. State definitions with explicit TypeScript generics
    const [isOnline, setIsOnline] = useState<boolean>(true);
    const [cpuLoad, setCpuLoad] = useState<number>(20);

    // 2. Power toggle handler
    const handleTogglePower = () => {
        if (isOnline) {
            // Server is currently ON and being turned OFF -> Reset CPU to 0%
            setIsOnline(false);
            setCpuLoad(0);
        } else {
            // Server is currently OFF and booting UP -> Set baseline CPU to 20%
            setIsOnline(true);
            setCpuLoad(20);
        }
    };

    // 3. Traffic simulation handler (Functional Update + Math.min cap)
    const handleAddTraffic = () => {
        setCpuLoad((prevLoad) => Math.min(100, prevLoad + 15));
    };

    // Helper boolean for readability
    const isOverloaded: boolean = isOnline && cpuLoad > 80;

    return (
        <article className={`server-card ${isOverloaded ? 'card-danger-border' : ''}`}>

            {/* Top Visual Box: Server Rack Header & Dynamic CPU Bar */}
            <div className="server-visual-box">
                <span className="server-id">NODE: AWS-EU-CENTRAL-1</span>
                <div className="cpu-bar-track">
                    <div
                        className={`cpu-bar-fill ${isOverloaded ? 'fill-danger' : ''}`}
                        style={{ width: `${cpuLoad}%` }}
                    />
                </div>
            </div>

            {/* Status Indicator (Ternary Operator) */}
            <div className={`status-indicator ${isOnline ? 'online' : 'offline'}`}>
                {isOnline ? '🟢 ONLINE' : '🔴 OFFLINE'}
            </div>

            {/* CPU Load Readout */}
            <p className="cpu-text">
                CPU Load: <strong>{cpuLoad}%</strong>
            </p>

            {/* Action Buttons Row */}
            <div className="button-group">
                <button className="btn btn-power" onClick={handleTogglePower}>
                    Toggle Power
                </button>

                {/* Displayed and active ONLY when server is Online (Requirement 5) */}
                {isOnline && (
                    <button
                        className="btn btn-traffic"
                        onClick={handleAddTraffic}
                        disabled={cpuLoad === 100}
                    >
                        Simulate Traffic (+15% CPU)
                    </button>
                )}
            </div>

            {/* Conditional Rendering (&&): Overload Alert at the bottom (Requirement 6) */}
            {isOverloaded && (
                <div className="overload-alert">
                    ⚠️ CRITICAL CPU OVERLOAD!
                </div>
            )}

        </article>
    );
};

export default ServerMonitorSolution;