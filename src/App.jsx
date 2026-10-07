import { useState } from "react";
import "./App.css";
import RoleSelection from "./RoleSelection";
import Assessment from "./Assessment";
import LearningRoadmap from "./LearningRoadmap";

function App() {
  const [showRoles, setShowRoles] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");
  const [showAssessment, setShowAssessment] = useState(false);

  if (showAssessment) {
  return (
    <Assessment
      role={selectedRole}
      onBack={() => {
        setShowAssessment(false);
        setShowRoles(true);
      }}
    />
  );
}

  if (showRoles) {
    return (
      <RoleSelection
  onBack={() => setShowRoles(false)}
  onSelectRole={(role) => {
    setSelectedRole(role);
    setShowAssessment(true);
  }}
/>
    );
  }
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">
          <span className="logo-icon">✦</span>
          SkillPath<span>AI</span>
        </div>

        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#how-it-works">How it Works</a>
          <button className="login-btn">Login</button>
        </div>
      </nav>

      <main className="hero">
        <div className="hero-content">
          <div className="badge">
            ✨ AI-Powered Learning Platform
          </div>

          <h1>
            Discover Your
            <br />
            <span>Skill Gaps.</span>
            <br />
            Build Your Future.
          </h1>

          <p>
            Identify what you know, discover what you're missing,
            and get a personalized learning path powered by AI.
          </p>

          <div className="hero-buttons">
          <button
  className="primary-btn"
  onClick={() => setShowRoles(true)}
>
  Get Started →
</button>


            <button className="secondary-btn">
              Explore Platform
            </button>
          </div>

          <div className="stats">
            <div>
              <strong>AI</strong>
              <span>Powered Analysis</span>
            </div>

            <div>
              <strong>∞</strong>
              <span>Personalized Paths</span>
            </div>

            <div>
              <strong>24/7</strong>
              <span>Learn Anytime</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="glow"></div>

          <div className="dashboard-card">
            <div className="card-header">
              <div>
                <small>Your Skill Profile</small>
                <h3>Learning Progress</h3>
              </div>

              <div className="profile-icon">👤</div>
            </div>

            <div className="progress-section">
              <div className="progress-title">
                <span>Overall Competency</span>
                <strong>68%</strong>
              </div>

              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>
            </div>

            <div className="skills">
              <div className="skill">
                <span>Python</span>
                <div className="mini-bar">
                  <div className="python"></div>
                </div>
                <b>82%</b>
              </div>

              <div className="skill">
                <span>SQL</span>
                <div className="mini-bar">
                  <div className="sql"></div>
                </div>
                <b>55%</b>
              </div>

              <div className="skill">
                <span>Statistics</span>
                <div className="mini-bar">
                  <div className="statistics"></div>
                </div>
                <b>38%</b>
              </div>

              <div className="skill">
                <span>Data Viz</span>
                <div className="mini-bar">
                  <div className="dataviz"></div>
                </div>
                <b>25%</b>
              </div>
            </div>

            <div className="gap-alert">
              <span>⚡</span>
              <div>
                <strong>Critical Skill Gap Detected</strong>
                <small>Data Visualization needs attention</small>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="features" id="features">
        <h2>Everything you need to grow</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Skill Gap Analysis</h3>
            <p>
              Understand your current skills and identify exactly
              where you need improvement.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🤖</div>
            <h3>AI Recommendations</h3>
            <p>
              Get personalized learning recommendations based on
              your strengths and weaknesses.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3>AI Quiz Generator</h3>
            <p>
              Upload learning material and automatically generate
              quizzes to test your knowledge.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;