// src/exercises/ex3-hr-portal/components/Navbar.tsx
import { NavLink } from 'react-router-dom';

interface NavbarProps {
    count: number;
}

const Navbar = ({ count }: NavbarProps) => (
    <nav className="portal-navbar">
        <h2>Afeka HR Portal</h2>
        <div className="portal-links">
            {/* NavLink adds class="active" when the URL matches - see portal.css */}
            <NavLink to="/directory" className="nav-link">
                Directory ({count})
            </NavLink>
            <NavLink to="/add" className="nav-link">
                + Add Employee
            </NavLink>
        </div>
    </nav>
);

export default Navbar;
