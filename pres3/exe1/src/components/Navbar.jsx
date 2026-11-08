// src/components/Navbar.jsx

const Navbar = () => {
    return (
        <header className="navbar">
            <h2>My React Application</h2>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;