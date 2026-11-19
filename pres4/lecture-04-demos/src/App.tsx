// src/App.tsx
import { useState } from 'react';
// import BrokenCounter from './components/demo1-broken-counter/BrokenCounter';
// import WorkingCounter from './components/demo1-broken-counter/WorkingCounter';
// import BatchingDemo from './components/demo2-batching/BatchingDemo';
// import ObjectUpdateDemo from './components/demo2-batching/ObjectUpdateDemo';
// import ServerMonitorSolution from './components/ex1-server-monitor/ServerMonitorSolution';
import TaskManagerSolution from './components/ex2-task-manager/TaskManagerSolution';
import ServerMonitorSolution from "./components/ex1-server-monitor/ServerMonitorSolution.tsx";
// import WorkingCounterFixed from "./components/demo1-broken-counter/WorkingCounterFixed.tsx";
// import ServerPingTracker from "./components/demo3-lifecycle/ServerPingTracker.tsx";
// import FetchPatternDemo from "./components/demo4-fetch/FetchPatternDemo.tsx";
// import StorefrontSolution from "./components/ex3-storefront/StorefrontSolution.tsx";

// Defining valid tab keys for strict TypeScript safety
type LessonView =
    // | 'broken'
    // | 'working'
    // | 'working_fixed'
    // | 'batching'
    // | 'object'
    // | 'ServerPingTracker'
    // | 'FetchPatternDemo'
    | 'ex1'
    | 'ex2';
    // | 'ex3';

const App = () => {
  // State controlling which component is currently rendered on screen
  const [activeView, setActiveView] = useState<LessonView>('ex1');

  return (
      <div className="lecture-shell">

        {/* Top Instructor Navigation Bar */}
        <header className="lecture-navbar">
          <div className="lecture-title">
            <strong>Course 10266</strong> | Lecture 4: State & Lifecycle
          </div>

          <nav className="lecture-tabs">
            {/*<button*/}
            {/*    className={activeView === 'broken' ? 'tab active' : 'tab'}*/}
            {/*    onClick={() => setActiveView('broken')}*/}
            {/*>*/}
            {/*  Broken Counter*/}
            {/*</button>*/}

            {/*<button*/}
            {/*    className={activeView === 'working' ? 'tab active' : 'tab'}*/}
            {/*    onClick={() => setActiveView('working')}*/}
            {/*>*/}
            {/*  Working State*/}
            {/*</button>*/}

            {/*<button*/}
            {/*    className={activeView === 'working_fixed' ? 'tab active' : 'tab'}*/}
            {/*    onClick={() => setActiveView('working_fixed')}*/}
            {/*>*/}
            {/*  Working Fixed*/}
            {/*</button>*/}

            {/*<button*/}
            {/*    className={activeView === 'batching' ? 'tab active' : 'tab'}*/}
            {/*    onClick={() => setActiveView('batching')}*/}
            {/*>*/}
            {/*  Batching & Closures*/}
            {/*</button>*/}

            {/*<button*/}
            {/*    className={activeView === 'object' ? 'tab active' : 'tab'}*/}
            {/*    onClick={() => setActiveView('object')}*/}
            {/*>*/}
            {/*  Object Immutability*/}
            {/*</button>*/}

            {/*<button*/}
            {/*    className={activeView === 'ServerPingTracker' ? 'tab active' : 'tab'}*/}
            {/*    onClick={() => setActiveView('ServerPingTracker')}*/}
            {/*>*/}
            {/*  Server Ping Tracker*/}
            {/*</button>*/}

            {/*<button*/}
            {/*    className={activeView === 'FetchPatternDemo' ? 'tab active' : 'tab'}*/}
            {/*    onClick={() => setActiveView('FetchPatternDemo')}*/}
            {/*>*/}
            {/*  Server Ping Tracker*/}
            {/*</button>*/}

            <button
                className={activeView === 'ex1' ? 'tab ex-tab active' : 'tab ex-tab'}
                onClick={() => setActiveView('ex1')}
            >
              🛠️ Ex 1: Server Monitor
            </button>

            <button
                className={activeView === 'ex2' ? 'tab ex-tab active' : 'tab ex-tab'}
                onClick={() => setActiveView('ex2')}
            >
              🛠️ Ex 2: Task Manager
            </button>

            {/*<button*/}
            {/*    className={activeView === 'ex3' ? 'tab ex-tab active' : 'tab ex-tab'}*/}
            {/*    onClick={() => setActiveView('ex3')}*/}
            {/*>*/}
            {/*  🛠️ Ex 3: Live Storefront*/}
            {/*</button>*/}
          </nav>
        </header>

        {/* Main Stage: Renders ONLY the selected exercise/demo */}
        <main className="lecture-stage">
          {/*{activeView === 'broken' && <BrokenCounter />}*/}
          {/*{activeView === 'working' && <WorkingCounter />}*/}
          {/*{activeView === 'working_fixed' && <WorkingCounterFixed />}*/}
          {/*{activeView === 'batching' && <BatchingDemo />}*/}
          {/*{activeView === 'object' && <ObjectUpdateDemo />}*/}
          {/*{activeView === 'ServerPingTracker' && <ServerPingTracker />}*/}
          {/*{activeView === 'FetchPatternDemo' && <FetchPatternDemo />}*/}
          {activeView === 'ex1' && <ServerMonitorSolution />}
          {activeView === 'ex2' && <TaskManagerSolution />}
          {/*{activeView === 'ex3' && <StorefrontSolution />}*/}
        </main>

      </div>
  );
};

export default App;