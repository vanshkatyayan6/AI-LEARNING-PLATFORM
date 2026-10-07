import "./App.css";

function LearningRoadmap({ role, skillGaps, onBack }) {

  // Learning websites
  const openLearningWebsite = (title) => {
    const websites = {
      "Statistics Fundamentals":
        "https://www.geeksforgeeks.org/statistics/",

      "Data Visualization":
        "https://www.geeksforgeeks.org/data-visualization/data-visualisation-in-python-using-matplotlib-and-seaborn/",

      "Advanced SQL":
        "https://www.postgresql.org/docs/current/tutorial-window.html",
    };

    const url = websites[title];

    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const roadmap = [
    {
      number: "01",
      icon: "📈",
      title: "Statistics Fundamentals",
      duration: "2 Weeks",
      level: "Beginner",
      topics: [
        "Mean, Median & Mode",
        "Probability Basics",
        "Variance & Standard Deviation",
        "Data Distributions",
      ],
    },

    {
      number: "02",
      icon: "📊",
      title: "Data Visualization",
      duration: "2 Weeks",
      level: "Intermediate",
      topics: [
        "Charts & Graphs",
        "Matplotlib",
        "Seaborn",
        "Dashboard Design",
      ],
    },

    {
      number: "03",
      icon: "🗄️",
      title: "Advanced SQL",
      duration: "3 Weeks",
      level: "Intermediate",
      topics: [
        "JOINs",
        "GROUP BY",
        "Subqueries",
        "Window Functions",
      ],
    },
  ];

  return (
    <div className="roadmap-page">

      {/* Back Button */}
      <button className="back-btn" onClick={onBack}>
        ← Back to Dashboard
      </button>

      {/* Header */}
      <div className="roadmap-header">

        <div className="badge">
          🤖 AI Personalized Roadmap
        </div>

        <h1>
          Your <span>Learning Path</span>
        </h1>

        <p>
          Based on your {role} assessment, we've created
          a personalized roadmap to help you close your
          skill gaps.
        </p>

      </div>

      {/* Summary */}
      <div className="roadmap-summary">

        <div>
          <small>Target Role</small>
          <strong>{role}</strong>
        </div>

        <div>
          <small>Skills to Improve</small>
          <strong>{skillGaps?.length || 3}</strong>
        </div>

        <div>
          <small>Estimated Duration</small>
          <strong>7 Weeks</strong>
        </div>

      </div>

      {/* Roadmap */}
      <div className="roadmap-container">

        <div className="roadmap-line"></div>

        {roadmap.map((item) => (

          <div className="roadmap-item" key={item.number}>

            {/* Number */}
            <div className="roadmap-number">
              {item.number}
            </div>

            {/* Card */}
            <div className="roadmap-card">

              <div className="roadmap-card-top">

                <div className="roadmap-icon">
                  {item.icon}
                </div>

                <div>
                  <span className="roadmap-level">
                    {item.level}
                  </span>

                  <h2>
                    {item.title}
                  </h2>
                </div>

                <span className="roadmap-duration">
                  ⏱ {item.duration}
                </span>

              </div>

              {/* Description */}
              <p>
                Build a strong foundation in{" "}
                {item.title.toLowerCase()} and improve
                your performance in this skill.
              </p>

              {/* Topics */}
              <div className="topic-list">

                {item.topics.map((topic) => (

                  <span key={topic}>
                    ✓ {topic}
                  </span>

                ))}

              </div>

              {/* Start Learning */}
              <button
                className="roadmap-start-btn"
                onClick={() =>
                  openLearningWebsite(item.title)
                }
              >
                Start Learning →
              </button>

            </div>

          </div>

        ))}

      </div>

      {/* AI Message */}
      <div className="ai-roadmap-message">

        <div className="ai-message-icon">
          🤖
        </div>

        <div>

          <h3>
            Why this roadmap?
          </h3>

          <p>
            Your learning path is based on the areas where
            your assessment performance is below the target
            competency level. Complete each stage and take
            another assessment to track your improvement.
          </p>

        </div>

      </div>

    </div>
  );
}

export default LearningRoadmap;