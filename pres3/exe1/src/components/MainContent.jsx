// src/components/MainContent.jsx

// Functional component representing the main body of the page
const MainContent = () => {
    return (
        <main className="main-content">
            <h1>Welcome to React Components</h1>
            <p>
                This is the main content area. In a Single Page Application (SPA),
                we break down our user interface into small, reusable, and independent building blocks.
            </p>
            <section>
                <h3>Why Component-Driven Architecture?</h3>
                <ul>
                    <li>Better code organization and maintainability</li>
                    <li>High reusability across the project</li>
                    <li>Separation of concerns (Single Responsibility Principle)</li>
                </ul>
            </section>
        </main>
    );
};

export default MainContent;