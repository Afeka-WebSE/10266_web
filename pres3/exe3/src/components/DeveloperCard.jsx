// src/components/DeveloperCard.jsx

// Destructuring all expected props directly in the function signature
const DeveloperCard = ({ id, name, role, experience, isAvailable, skills }) => {

    // Dynamic external API URL for generating unique robot avatars
    const avatarUrl = `https://robohash.org/${id}?set=set3&size=150x150`;

    return (
        <article className="dev-card">

            {/* Short-circuit (&&) conditional rendering for Senior badge */}
            {experience > 5 && (
                <span className="senior-badge">⭐ Senior ({experience} yrs)</span>
            )}

            <figure className="avatar-wrapper">
                <img src={avatarUrl} alt={`${name} avatar`} className="avatar" />
            </figure>

            <h2>{name}</h2>
            <p className="role">{role}</p>

            {/* Ternary operator (? :) for mutually exclusive availability state */}
            <div className={isAvailable ? "status available" : "status busy"}>
                {isAvailable ? "🟢 Available for Project" : "🔴 Currently Busy"}
            </div>

            {/* Nested list rendering: Mapping over the skills array */}
            <footer className="skills-container">
                {skills.map((skill) => (
                    // Skill name is unique per developer, so it serves as a valid key
                    <span key={skill} classNa me="skill-tag">
            {skill}
          </span>
                ))}
            </footer>

        </article>
    );
};

export default DeveloperCard;