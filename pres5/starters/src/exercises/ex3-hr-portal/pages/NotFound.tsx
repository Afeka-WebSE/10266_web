// src/exercises/ex3-hr-portal/pages/NotFound.tsx
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div className="profile">
        <h2>404 - Page Not Found</h2>
        <p>The page you are looking for does not exist.</p>
        <div className="card-actions">
            <Link to="/directory" className="btn btn-primary">Back to Directory</Link>
        </div>
    </div>
);

export default NotFound;
