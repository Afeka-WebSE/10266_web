// src/components/DeveloperCard.jsx

// TODO 1: Destructure the props inside the function parameters
const DeveloperCardStarter = () => {

    // External URL that generates a unique avatar image based on the developer's ID
    const avatarUrl = `https://robohash.org/${/* TODO: insert id here */}?set=set3&size=150x150`;

    return (
        <article className="dev-card">
            {/* TODO 2: Render Senior badge using && ONLY if experience > 5 */}

            <img src={avatarUrl} alt="Developer Avatar" className="avatar" />

            {/* TODO 3: Display developer name, role, and years of experience */}

            {/* TODO 4: Use Ternary Operator (? :) to show availability status */}

            <div className="skills-container">
                {/* TODO 5: Use .map() to render a <span className="skill-tag"> for each skill */}
            </div>
        </article>
    );
};

export default DeveloperCard;