import "./App.css";

function RoleSelection({ onBack, onSelectRole }) {
  const roles = [
    {
      icon: "📊",
      title: "Data Analyst",
      skills: "Python • SQL • Statistics",
    },
    {
      icon: "💻",
      title: "Software Developer",
      skills: "Programming • DSA • Development",
    },
    {
      icon: "🤖",
      title: "AI / ML Engineer",
      skills: "Python • ML • Deep Learning",
    },
    {
      icon: "🔐",
      title: "Cybersecurity Analyst",
      skills: "Networking • Security • Linux",
    },
    {
      icon: "☁️",
      title: "Cloud Engineer",
      skills: "Cloud • DevOps • Networking",
    },
    {
      icon: "⚙️",
      title: "Custom Role",
      skills: "Build your own skill profile",
    },
  ];

  return (
    <div className="role-page">
      <button className="back-btn" onClick={onBack}>
        ← Back
      </button>

      <div className="role-header">
        <div className="badge">🎯 Personalized Learning</div>

        <h1>
          Choose Your <span>Target Role</span>
        </h1>

        <p>
          Tell us where you want to go. We'll identify the skills
          you need and create a personalized learning path for you.
        </p>
      </div>

      <div className="role-grid">
        {roles.map((role, index) => (
          <div className="role-card" key={index}>
            <div className="role-icon">{role.icon}</div>

            <h3>{role.title}</h3>

            <p>{role.skills}</p>

           <button
  className="role-select-btn"
  onClick={() => onSelectRole(role.title)}
>
  Select Role →
</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RoleSelection;