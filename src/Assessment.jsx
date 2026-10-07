import { useState } from "react";
import "./App.css";
import LearningRoadmap from "./LearningRoadmap";

/* =========================================================
   QUESTION BANK
   ========================================================= */

const questionBank = {
  "Data Analyst": [
    {
      question: "Which Python data structure stores key-value pairs?",
      options: ["List", "Tuple", "Dictionary", "Set"],
      answer: "Dictionary",
      skill: "Python",
    },
    {
      question: "Which Python library is mainly used for data manipulation?",
      options: ["Pandas", "Flask", "Requests", "Tkinter"],
      answer: "Pandas",
      skill: "Python",
    },
    {
      question: "Which keyword is used to define a function in Python?",
      options: ["function", "def", "func", "define"],
      answer: "def",
      skill: "Python",
    },
    {
      question: "Which Python library is commonly used for numerical computing?",
      options: ["NumPy", "Flask", "Django", "BeautifulSoup"],
      answer: "NumPy",
      skill: "Python",
    },
    {
      question: "What is the median of 2, 4, 6, 8, 10?",
      options: ["4", "5", "6", "8"],
      answer: "6",
      skill: "Statistics",
    },
    {
      question: "Which measure represents the average of a dataset?",
      options: ["Mean", "Mode", "Range", "Variance"],
      answer: "Mean",
      skill: "Statistics",
    },
    {
      question: "Which measure shows the most frequently occurring value?",
      options: ["Mean", "Median", "Mode", "Range"],
      answer: "Mode",
      skill: "Statistics",
    },
    {
      question: "What does standard deviation measure?",
      options: [
        "Central tendency",
        "Data spread",
        "Number of values",
        "Data type",
      ],
      answer: "Data spread",
      skill: "Statistics",
    },
    {
      question: "Which SQL command retrieves data from a database?",
      options: ["INSERT", "SELECT", "UPDATE", "DELETE"],
      answer: "SELECT",
      skill: "SQL",
    },
    {
      question: "Which SQL clause is used to filter rows?",
      options: ["ORDER BY", "GROUP BY", "WHERE", "JOIN"],
      answer: "WHERE",
      skill: "SQL",
    },
    {
      question: "Which SQL function counts the number of rows?",
      options: ["SUM()", "COUNT()", "TOTAL()", "NUMBER()"],
      answer: "COUNT()",
      skill: "SQL",
    },
    {
      question: "Which SQL clause is used to group rows?",
      options: ["GROUP BY", "ORDER BY", "WHERE", "HAVING"],
      answer: "GROUP BY",
      skill: "SQL",
    },
    {
      question: "Which chart is best for showing trends over time?",
      options: [
        "Pie Chart",
        "Line Chart",
        "Histogram",
        "Box Plot",
      ],
      answer: "Line Chart",
      skill: "Data Visualization",
    },
    {
      question: "Which chart is commonly used to show proportions?",
      options: [
        "Line Chart",
        "Pie Chart",
        "Scatter Plot",
        "Histogram",
      ],
      answer: "Pie Chart",
      skill: "Data Visualization",
    },
    {
      question: "Which Python library is commonly used for data visualization?",
      options: [
        "Matplotlib",
        "Requests",
        "Flask",
        "BeautifulSoup",
      ],
      answer: "Matplotlib",
      skill: "Data Visualization",
    },
    {
      question: "Which visualization is useful for showing the relationship between two numerical variables?",
      options: [
        "Pie Chart",
        "Scatter Plot",
        "Bar Chart",
        "Area Chart",
      ],
      answer: "Scatter Plot",
      skill: "Data Visualization",
    },
    {
      question: "What does CSV stand for?",
      options: [
        "Common Separated Value",
        "Comma Separated Values",
        "Column Standard Values",
        "Computer Stored Values",
      ],
      answer: "Comma Separated Values",
      skill: "Data Visualization",
    },
    {
      question: "Which SQL command sorts query results?",
      options: ["SORT BY", "ORDER BY", "GROUP BY", "ARRANGE BY"],
      answer: "ORDER BY",
      skill: "SQL",
    },
    {
      question: "Which Pandas function is commonly used to read a CSV file?",
      options: [
        "pd.open_csv()",
        "pd.read_csv()",
        "pd.load_csv()",
        "pd.csv()",
      ],
      answer: "pd.read_csv()",
      skill: "Python",
    },
    {
      question: "What is the range of a dataset?",
      options: [
        "Mean - Median",
        "Maximum - Minimum",
        "Maximum + Minimum",
        "Median - Mode",
      ],
      answer: "Maximum - Minimum",
      skill: "Statistics",
    },
  ],

  "Software Developer": [
    {
      question: "Which data structure follows LIFO?",
      options: ["Queue", "Stack", "Array", "Linked List"],
      answer: "Stack",
      skill: "DSA",
    },
    {
      question: "Which data structure follows FIFO?",
      options: ["Stack", "Queue", "Tree", "Graph"],
      answer: "Queue",
      skill: "DSA",
    },
    {
      question: "What is the average time complexity of binary search?",
      options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
      answer: "O(log n)",
      skill: "DSA",
    },
    {
      question: "Which sorting algorithm repeatedly swaps adjacent elements?",
      options: [
        "Selection Sort",
        "Bubble Sort",
        "Merge Sort",
        "Quick Sort",
      ],
      answer: "Bubble Sort",
      skill: "DSA",
    },
    {
      question: "Which keyword is used to define a class in Java?",
      options: ["object", "class", "struct", "define"],
      answer: "class",
      skill: "Programming",
    },
    {
      question: "Which concept allows a class to have multiple forms?",
      options: [
        "Inheritance",
        "Polymorphism",
        "Encapsulation",
        "Abstraction",
      ],
      answer: "Polymorphism",
      skill: "Programming",
    },
    {
      question: "Which HTML tag creates a hyperlink?",
      options: ["<p>", "<a>", "<link>", "<href>"],
      answer: "<a>",
      skill: "Development",
    },
    {
      question: "Which language is primarily used to style web pages?",
      options: ["HTML", "CSS", "SQL", "Python"],
      answer: "CSS",
      skill: "Development",
    },
    {
      question: "Which Git command downloads a repository?",
      options: ["git clone", "git push", "git pull", "git init"],
      answer: "git clone",
      skill: "Development",
    },
    {
      question: "Which data structure is best suited for hierarchical data?",
      options: ["Stack", "Queue", "Tree", "Array"],
      answer: "Tree",
      skill: "DSA",
    },
    {
      question: "What does API stand for?",
      options: [
        "Application Programming Interface",
        "Advanced Programming Internet",
        "Application Process Integration",
        "Automated Program Interface",
      ],
      answer: "Application Programming Interface",
      skill: "Development",
    },
    {
      question: "Which OOP concept hides internal implementation details?",
      options: [
        "Inheritance",
        "Abstraction",
        "Polymorphism",
        "Overloading",
      ],
      answer: "Abstraction",
      skill: "Programming",
    },
    {
      question: "Which search algorithm works efficiently on sorted data?",
      options: [
        "Linear Search",
        "Binary Search",
        "Random Search",
        "Depth Search",
      ],
      answer: "Binary Search",
      skill: "DSA",
    },
    {
      question: "Which keyword creates an object in Java?",
      options: ["create", "new", "object", "make"],
      answer: "new",
      skill: "Programming",
    },
    {
      question: "Which technology is used to structure web pages?",
      options: ["CSS", "HTML", "JavaScript", "SQL"],
      answer: "HTML",
      skill: "Development",
    },
  ],

  "AI / ML Engineer": [
    {
      question: "Which Python library is widely used for machine learning?",
      options: ["Scikit-learn", "Flask", "Requests", "Tkinter"],
      answer: "Scikit-learn",
      skill: "Machine Learning",
    },
    {
      question: "Which library is mainly used for numerical arrays?",
      options: ["NumPy", "Flask", "Django", "BeautifulSoup"],
      answer: "NumPy",
      skill: "Python",
    },
    {
      question: "Which library is commonly used for data manipulation?",
      options: ["Pandas", "TensorFlow", "Flask", "OpenCV"],
      answer: "Pandas",
      skill: "Python",
    },
    {
      question: "What is supervised learning?",
      options: [
        "Learning without data",
        "Learning from labeled data",
        "Learning without a model",
        "Learning only from images",
      ],
      answer: "Learning from labeled data",
      skill: "Machine Learning",
    },
    {
      question: "Which algorithm is commonly used for classification?",
      options: [
        "Linear Regression",
        "Logistic Regression",
        "K-Means",
        "PCA",
      ],
      answer: "Logistic Regression",
      skill: "Machine Learning",
    },
    {
      question: "Which algorithm is used for clustering?",
      options: [
        "Linear Regression",
        "K-Means",
        "Logistic Regression",
        "Decision Tree",
      ],
      answer: "K-Means",
      skill: "Machine Learning",
    },
    {
      question: "What does CNN stand for?",
      options: [
        "Convolutional Neural Network",
        "Computer Neural Node",
        "Central Network Node",
        "Connected Neural Network",
      ],
      answer: "Convolutional Neural Network",
      skill: "Deep Learning",
    },
    {
      question: "Which activation function is commonly used in hidden layers?",
      options: ["ReLU", "CSV", "SQL", "HTML"],
      answer: "ReLU",
      skill: "Deep Learning",
    },
    {
      question: "What is overfitting?",
      options: [
        "Model performs well on training data but poorly on unseen data",
        "Model has no training data",
        "Model is always accurate",
        "Model has no features",
      ],
      answer:
        "Model performs well on training data but poorly on unseen data",
      skill: "Machine Learning",
    },
    {
      question: "What is the purpose of a loss function?",
      options: [
        "Measure model error",
        "Store data",
        "Create a database",
        "Visualize images",
      ],
      answer: "Measure model error",
      skill: "Machine Learning",
    },
    {
      question: "Which library is commonly used for deep learning?",
      options: [
        "TensorFlow",
        "Pandas",
        "Matplotlib",
        "BeautifulSoup",
      ],
      answer: "TensorFlow",
      skill: "Deep Learning",
    },
    {
      question: "Which metric is commonly used for classification accuracy?",
      options: ["Accuracy", "MSE", "MAE", "RMSE"],
      answer: "Accuracy",
      skill: "Machine Learning",
    },
    {
      question: "What is a feature in machine learning?",
      options: [
        "An input variable",
        "The final prediction",
        "The model itself",
        "A database",
      ],
      answer: "An input variable",
      skill: "Machine Learning",
    },
    {
      question: "Which technique helps reduce overfitting?",
      options: [
        "Regularization",
        "Removing all data",
        "Increasing errors",
        "Deleting features randomly",
      ],
      answer: "Regularization",
      skill: "Machine Learning",
    },
    {
      question: "Which Python library is commonly used for plotting graphs?",
      options: [
        "Matplotlib",
        "Flask",
        "Requests",
        "Scikit-learn",
      ],
      answer: "Matplotlib",
      skill: "Data Visualization",
    },
  ],

  "Cybersecurity Analyst": [
    {
      question: "What does CIA in cybersecurity stand for?",
      options: [
        "Confidentiality, Integrity, Availability",
        "Computer, Internet, Access",
        "Control, Information, Authentication",
        "Cyber, Internet, Authorization",
      ],
      answer: "Confidentiality, Integrity, Availability",
      skill: "Security",
    },
    {
      question: "Which protocol is used for secure web communication?",
      options: ["HTTP", "HTTPS", "FTP", "SMTP"],
      answer: "HTTPS",
      skill: "Networking",
    },
    {
      question: "Which command checks network connectivity?",
      options: ["ping", "mkdir", "touch", "cd"],
      answer: "ping",
      skill: "Networking",
    },
    {
      question: "What does IP stand for?",
      options: [
        "Internet Protocol",
        "Internal Process",
        "Internet Port",
        "Information Protocol",
      ],
      answer: "Internet Protocol",
      skill: "Networking",
    },
    {
      question: "Which Linux command lists files?",
      options: ["ls", "cd", "pwd", "rm"],
      answer: "ls",
      skill: "Linux",
    },
    {
      question: "Which Linux command displays the current directory?",
      options: ["pwd", "ls", "cd", "mkdir"],
      answer: "pwd",
      skill: "Linux",
    },
    {
      question: "What is phishing?",
      options: [
        "A social engineering attack",
        "A backup technique",
        "A programming language",
        "A network protocol",
      ],
      answer: "A social engineering attack",
      skill: "Security",
    },
    {
      question: "What is a firewall used for?",
      options: [
        "Filtering network traffic",
        "Writing code",
        "Compressing files",
        "Creating databases",
      ],
      answer: "Filtering network traffic",
      skill: "Security",
    },
    {
      question: "Which port is commonly associated with HTTPS?",
      options: ["21", "22", "80", "443"],
      answer: "443",
      skill: "Networking",
    },
    {
      question: "Which Linux command changes directories?",
      options: ["cd", "ls", "pwd", "cat"],
      answer: "cd",
      skill: "Linux",
    },
    {
      question: "What is malware?",
      options: [
        "Malicious software",
        "Network hardware",
        "A security policy",
        "A database",
      ],
      answer: "Malicious software",
      skill: "Security",
    },
    {
      question: "Which protocol is commonly used for email sending?",
      options: ["SMTP", "HTTP", "SSH", "DNS"],
      answer: "SMTP",
      skill: "Networking",
    },
  ],

  "Cloud Engineer": [
    {
      question: "What does IaaS stand for?",
      options: [
        "Infrastructure as a Service",
        "Internet as a Service",
        "Information as a System",
        "Infrastructure and Application Service",
      ],
      answer: "Infrastructure as a Service",
      skill: "Cloud",
    },
    {
      question: "What does PaaS stand for?",
      options: [
        "Platform as a Service",
        "Program as a System",
        "Platform and Storage",
        "Processing as a Service",
      ],
      answer: "Platform as a Service",
      skill: "Cloud",
    },
    {
      question: "What does SaaS stand for?",
      options: [
        "Software as a Service",
        "System as a Service",
        "Storage as a System",
        "Software and Security",
      ],
      answer: "Software as a Service",
      skill: "Cloud",
    },
    {
      question: "Which technology packages applications with their dependencies?",
      options: ["Docker", "HTML", "SQL", "CSS"],
      answer: "Docker",
      skill: "DevOps",
    },
    {
      question: "Which tool is commonly used for container orchestration?",
      options: ["Kubernetes", "Git", "VS Code", "NumPy"],
      answer: "Kubernetes",
      skill: "DevOps",
    },
    {
      question: "What does DNS translate?",
      options: [
        "Domain names to IP addresses",
        "Files to folders",
        "Code to HTML",
        "Passwords to usernames",
      ],
      answer: "Domain names to IP addresses",
      skill: "Networking",
    },
    {
      question: "Which protocol is used for secure remote login?",
      options: ["SSH", "HTTP", "FTP", "SMTP"],
      answer: "SSH",
      skill: "Networking",
    },
    {
      question: "What is cloud computing?",
      options: [
        "On-demand computing resources over a network",
        "Only local computing",
        "A programming language",
        "A database system",
      ],
      answer: "On-demand computing resources over a network",
      skill: "Cloud",
    },
    {
      question: "Which practice automatically builds and tests code?",
      options: [
        "Continuous Integration",
        "Manual Testing",
        "Data Mining",
        "Web Scraping",
      ],
      answer: "Continuous Integration",
      skill: "DevOps",
    },
    {
      question: "What is scalability?",
      options: [
        "Ability to handle increased workload",
        "Deleting resources",
        "Encrypting passwords",
        "Writing documentation",
      ],
      answer: "Ability to handle increased workload",
      skill: "Cloud",
    },
    {
      question: "Which command initializes a Git repository?",
      options: ["git init", "git start", "git create", "git repo"],
      answer: "git init",
      skill: "DevOps",
    },
    {
      question: "Which component connects different networks?",
      options: ["Router", "Monitor", "Keyboard", "Compiler"],
      answer: "Router",
      skill: "Networking",
    },
  ],
};


/* =========================================================
   SHUFFLE FUNCTION
   ========================================================= */

function shuffleArray(array) {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] = [
      shuffled[j],
      shuffled[i],
    ];
  }

  return shuffled;
}


/* =========================================================
   CREATE RANDOM QUESTIONS
   ========================================================= */

function createAssessmentQuestions(role) {

  const bank =
    questionBank[role] ||
    questionBank["Data Analyst"];

  // Shuffle entire question bank
  const shuffledQuestions = shuffleArray(bank);

  // Take maximum 10 questions
  const selectedQuestions =
    shuffledQuestions.slice(
      0,
      Math.min(10, shuffledQuestions.length)
    );

  // Shuffle options of every question
  return selectedQuestions.map((question) => ({
    ...question,
    options: shuffleArray(question.options),
  }));
}


/* =========================================================
   ASSESSMENT COMPONENT
   ========================================================= */

function Assessment({ role, onBack }) {

  // Generate random questions ONLY when assessment starts
  const [assessmentQuestions] = useState(() =>
    createAssessmentQuestions(role)
  );

  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const [selectedAnswer, setSelectedAnswer] =
    useState("");

  const [answers, setAnswers] =
    useState([]);

  const [finished, setFinished] =
    useState(false);

  const [showRoadmap, setShowRoadmap] =
    useState(false);


  const question =
    assessmentQuestions[currentQuestion];


  /* =====================================================
     HANDLE NEXT
     ===================================================== */

  const handleNext = () => {

    if (!selectedAnswer) {
      alert("Please select an answer first.");
      return;
    }

    const isCorrect =
      selectedAnswer === question.answer;

    const currentAnswer = {
      skill: question.skill,
      correct: isCorrect,
    };

    const updatedAnswers = [
      ...answers,
      currentAnswer,
    ];

    setAnswers(updatedAnswers);


    if (
      currentQuestion ===
      assessmentQuestions.length - 1
    ) {
      setFinished(true);
    } else {

      setCurrentQuestion(
        currentQuestion + 1
      );

      setSelectedAnswer("");
    }
  };


  /* =====================================================
     ROADMAP PAGE
     ===================================================== */

  if (showRoadmap) {

    return (
      <LearningRoadmap
        role={role}
        onBack={() =>
          setShowRoadmap(false)
        }
      />
    );

  }


  /* =====================================================
     RESULT PAGE
     ===================================================== */

  if (finished) {

    const correctAnswers =
      answers.filter(
        (answer) => answer.correct
      ).length;

    const percentage =
      Math.round(
        (correctAnswers /
          assessmentQuestions.length) *
          100
      );


    /* ================================================
       SKILL DATA
       ================================================ */

    const skillData = {};

    answers.forEach((answer) => {

      if (!skillData[answer.skill]) {

        skillData[answer.skill] = {
          correct: 0,
          total: 0,
        };

      }

      skillData[answer.skill].total++;

      if (answer.correct) {
        skillData[answer.skill].correct++;
      }

    });


    /* ================================================
       SKILL SCORES
       ================================================ */

    const skillScores = {};

    Object.entries(skillData).forEach(
      ([skill, data]) => {

        skillScores[skill] =
          Math.round(
            (data.correct /
              data.total) *
              100
          );

      }
    );


    /* ================================================
       REQUIRED LEVELS
       ================================================ */

    const requiredLevels = {

      Python: 80,

      SQL: 80,

      Statistics: 75,

      "Data Visualization": 70,

      DSA: 80,

      Programming: 80,

      Development: 75,

      "Machine Learning": 80,

      "Deep Learning": 75,

      Security: 80,

      Networking: 75,

      Linux: 70,

      Cloud: 80,

      DevOps: 75,
    };


    /* ================================================
       SKILL GAPS
       ================================================ */

    const skillGaps = Object.entries(
      skillScores
    )
      .map(([skill, score]) => {

        const required =
          requiredLevels[skill] || 80;

        return {
          skill,
          score,
          required,
          gap: required - score,
        };

      })
      .filter(
        (item) => item.gap > 0
      )
      .sort(
        (a, b) => b.gap - a.gap
      )
      .slice(0, 3);


    return (

      <div className="dashboard-page">

        {/* HEADER */}

        <div className="dashboard-header">

          <div>

            <div className="badge">
              🎯 {role} Skill Analysis
            </div>

            <h1>
              Your <span>Skill Profile</span>
            </h1>

            <p>
              We've analyzed your assessment
              and identified the skills you
              should focus on next.
            </p>

          </div>


          <div className="overall-score">

            <small>
              Overall Score
            </small>

            <strong>
              {percentage}%
            </strong>

          </div>

        </div>


        {/* DASHBOARD GRID */}

        <div className="dashboard-grid">


          {/* CURRENT SKILLS */}

          <div className="dashboard-section">

            <h2>
              📊 Current Skill Levels
            </h2>

            <div className="skill-list">

              {Object.entries(
                skillScores
              ).map(
                ([skill, score]) => (

                  <div
                    className="dashboard-skill"
                    key={skill}
                  >

                    <div className="skill-info">

                      <span>
                        {skill}
                      </span>

                      <strong>
                        {score}%
                      </strong>

                    </div>

                    <div className="dashboard-bar">

                      <div
                        style={{
                          width:
                            `${score}%`,
                        }}
                      ></div>

                    </div>

                  </div>

                )
              )}

            </div>

          </div>


          {/* SKILL GAPS */}

          <div
            className="dashboard-section critical-section"
          >

            <h2>
              ⚠ Critical Skill Gaps
            </h2>

            <p className="section-description">
              These skills need the most
              improvement.
            </p>


            {skillGaps.length > 0 ? (

              skillGaps.map(
                (gap, index) => (

                  <div
                    className="gap-item"
                    key={gap.skill}
                  >

                    <div className="gap-number">
                      {index + 1}
                    </div>

                    <div className="gap-content">

                      <strong>
                        {gap.skill}
                      </strong>

                      <span>
                        Current: {gap.score}%
                        {" • "}
                        Target: {gap.required}%
                      </span>

                    </div>

                    <div className="gap-value">
                      -{gap.gap}%
                    </div>

                  </div>

                )
              )

            ) : (

              <p>
                🎉 Great job! You have
                no critical skill gaps.
              </p>

            )}

          </div>

        </div>


        {/* RECOMMENDATION */}

        <div className="recommendation-section">

          <div className="recommendation-header">

            <div>

              <div className="badge">
                🤖 AI Recommendations
              </div>

              <h2>
                Your Personalized
                Learning Path
              </h2>

              <p>
                Focus on these topics to
                close your skill gaps.
              </p>

            </div>

          </div>


          <div className="learning-grid">


            {/* CARD 1 */}

            <div className="learning-card">

              <span className="learning-number">
                01
              </span>

              <div className="learning-icon">
                📈
              </div>

              <h3>
                Statistics Fundamentals
              </h3>

              <p>
                Strengthen your understanding
                of mean, median, probability
                and statistical analysis.
              </p>

              <button
                onClick={() =>
                  setShowRoadmap(true)
                }
              >
                Start Learning →
              </button>

            </div>


            {/* CARD 2 */}

            <div className="learning-card">

              <span className="learning-number">
                02
              </span>

              <div className="learning-icon">
                📊
              </div>

              <h3>
                Data Visualization
              </h3>

              <p>
                Learn how to communicate
                insights using charts,
                graphs and visualization
                techniques.
              </p>

              <button
                onClick={() =>
                  setShowRoadmap(true)
                }
              >
                Start Learning →
              </button>

            </div>


            {/* CARD 3 */}

            <div className="learning-card">

              <span className="learning-number">
                03
              </span>

              <div className="learning-icon">
                🗄️
              </div>

              <h3>
                Advanced SQL
              </h3>

              <p>
                Improve your SQL skills
                with joins, grouping,
                subqueries and advanced
                queries.
              </p>

              <button
                onClick={() =>
                  setShowRoadmap(true)
                }
              >
                Start Learning →
              </button>

            </div>

          </div>

        </div>


        {/* BACK BUTTON */}

        <button
          className="back-btn dashboard-back"
          onClick={onBack}
        >
          ← Back to Roles
        </button>

      </div>

    );

  }


  /* =====================================================
     ASSESSMENT PAGE
     ===================================================== */

  const progress =
    ((currentQuestion + 1) /
      assessmentQuestions.length) *
    100;


  return (

    <div className="assessment-page">

      {/* BACK */}

      <button
        className="back-btn"
        onClick={onBack}
      >
        ← Back
      </button>


      {/* HEADER */}

      <div className="assessment-header">

        <div className="badge">
          🎯 {role} Assessment
        </div>

        <h1>
          Let's Measure Your
          <span> Skills</span>
        </h1>

        <p>
          Answer these questions to help
          us understand your current skill
          level and identify your skill gaps.
        </p>

      </div>


      {/* QUESTION CARD */}

      <div className="assessment-card">


        {/* QUESTION TOP */}

        <div className="question-top">

          <span>
            Question{" "}
            {currentQuestion + 1}
            {" "}of{" "}
            {assessmentQuestions.length}
          </span>

          <span>
            {Math.round(progress)}%
          </span>

        </div>


        {/* PROGRESS */}

        <div className="question-progress">

          <div
            style={{
              width:
                `${progress}%`,
            }}
          ></div>

        </div>


        {/* SKILL */}

        <div className="question-skill">

          Skill:{" "}

          <strong>
            {question.skill}
          </strong>

        </div>


        {/* QUESTION */}

        <h2>
          {question.question}
        </h2>


        {/* OPTIONS */}

        <div className="options">

          {question.options.map(
            (option, index) => (

              <button
                key={option}
                className={
                  selectedAnswer === option
                    ? "option-selected"
                    : ""
                }
                onClick={() =>
                  setSelectedAnswer(
                    option
                  )
                }
              >

                <span className="option-number">
                  {String.fromCharCode(
                    65 + index
                  )}
                </span>

                {option}

              </button>

            )
          )}

        </div>


        {/* FOOTER */}

        <div className="assessment-footer">

          <span>

            {selectedAnswer
              ? "Answer selected ✓"
              : "Choose the best answer"}

          </span>


          <button
            className="primary-btn"
            onClick={handleNext}
          >

            {currentQuestion ===
            assessmentQuestions.length - 1
              ? "Finish Assessment"
              : "Next →"}

          </button>

        </div>

      </div>

    </div>

  );
}

export default Assessment;