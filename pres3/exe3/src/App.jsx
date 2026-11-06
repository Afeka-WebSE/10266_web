// src/App.jsx
import { developersData } from './data/developers';
import Header from './components/Header';
import DeveloperCard from './components/DeveloperCard';

const App = () => {
  // Calculating available developers in the logic layer
  const availableDevsCount = developersData.filter(dev => dev.isAvailable).length;

  return (
      <div className="app-layout">
        {/* Passing summary statistics down to the Header via Props */}
        <Header
            totalCount={developersData.length}
            availableCount={availableDevsCount}
        />

        <main className="directory-main">
          <section className="cards-grid">
            {/* Mapping over the data array and passing props to each Child Component */}
            {developersData.map((dev) => (
                <DeveloperCard
                    key={dev.id}                 /* React internal Virtual DOM key */
                    id={dev.id}                  /* Passed as a regular prop for the image URL */
                    name={dev.name}
                    role={dev.role}
                    experience={dev.experience}
                    isAvailable={dev.isAvailable}
                    skills={dev.skills}
                />
            ))}
          </section>
        </main>
      </div>
  );
};

export default App;