// src/components/Header.jsx

// Receiving totalCount and availableCount as Props from App.jsx
const Header = ({ totalCount, availableCount }) => {
    return (
        <header className="site-header">
            <h1>Afeka Tech - R&D Directory</h1>
            <p>
                Total Engineers: <strong>{totalCount}</strong> |
                Available Now: <strong>{availableCount}</strong>
            </p>
        </header>
    );
};

export default Header;