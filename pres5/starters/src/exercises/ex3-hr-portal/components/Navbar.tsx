// src/exercises/ex3-hr-portal/components/Navbar.tsx
import { NavLink } from 'react-router-dom';

interface NavbarProps {
    count: number;
}

const Navbar = ({ count }: NavbarProps) => (
    <nav className="portal-navbar">
        <h2>Afeka HR Portal</h2>
        <div className="portal-links">
            {/* Example - NavLink adds class="active" when the URL matches (see portal.css) */}
            <NavLink to="/directory" className="nav-link">
                Directory
            </NavLink>

            {/* TODO 7: Show the live number of employees next to "Directory": Directory ({count}) */}
            {/* TODO 8: Add a NavLink to "/add" with the text "+ Add Employee" */}
        </div>
    </nav>
);

export default Navbar;
