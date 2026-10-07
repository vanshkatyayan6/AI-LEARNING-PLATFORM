import { useState } from "react";
import "./App.css";

function MaterialUpload({ role, onBack }) {
  const [file, setFile] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [quizReady, setQuizReady] = useState(false);

  const handleFile = (selectedFile) => {
    if (!selectedFile) return;

    if (selectedFile.type !== "application/pdf") {
      alert("Please upload a PDF file only.");
      return;
    }

    setFile(selectedFile);
    setQuizReady(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);

    const droppedFile = e.dataTransfer.files[0];
    handleFile(droppedFile);
  };

  const generateQuiz = () => {
    if (!file) {
      alert("Please upload a PDF first.");
      return;
    }

    setGenerating(true);

    // Temporary demo generation
    // Real AI backend will be connected next.
    setTimeout(() => {
      setGenerating(false);
      setQuizReady(true);
    }, 2000);
  };

  return (
    <div className="material-page">

      {/* Back */}
      <button className="back-btn" onClick={onBack}>
        ← Back
      </button>

      {/* Header */}
      <div className="material-header">

        <div className="badge">
          🤖 AI Quiz Generator
        </div>

        <h1>
          Turn Your <span>Study Material</span> Into a Quiz
        </h1>

        <p>
          Upload your learning material and our AI will
          generate personalized MCQs to test your understanding.
        </p>

      </div>

      {/* Upload Card */}
      <div className="upload-card">

        <div className="upload-icon">
          📄
        </div>

        <h2>
          Upload Study Material
        </h2>

        <p>
          Upload a PDF containing your notes, textbook,
          lecture material or study content.
        </p>

        <div
          className={`upload-area ${
            dragging ? "upload-dragging" : ""
          }`}
          onDragOver={(e) => {
            e.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
        >

          <div className="upload-cloud">
            ☁️
          </div>

          <h3>
            Drag & Drop your PDF here
          </h3>

          <span>
            or
          </span>

          <label className="choose-file-btn">

            Choose PDF

            <input
              type="file"
              accept=".pdf,application/pdf"
              hidden
              onChange={(e) =>
                handleFile(e.target.files[0])
              }
            />

          </label>

          <small>
            Maximum file size: 10 MB
          </small>

        </div>

        {/* Selected File */}
        {file && (

          <div className="selected-file">

            <div className="file-icon">
              📕
            </div>

            <div className="file-info">

              <strong>
                {file.name}
              </strong>

              <span>
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </span>

            </div>

            <button
              className="remove-file"
              onClick={() => {
                setFile(null);
                setQuizReady(false);
              }}
            >
              ✕
            </button>

          </div>

        )}

        {/* Generate Button */}
        <button
          className="generate-quiz-btn"
          onClick={generateQuiz}
          disabled={!file || generating}
        >

          {generating
            ? "🤖 Generating Quiz..."
            : "✨ Generate AI Quiz"}

        </button>

        {/* Demo Result */}
        {quizReady && (

          <div className="quiz-ready">

            <div className="quiz-ready-icon">
              ✅
            </div>

            <div>
              <h3>
                Quiz Generated Successfully!
              </h3>

              <p>
                Your study material has been converted
                into an AI-powered assessment.
              </p>
            </div>

            <button
              className="take-quiz-btn"
              onClick={() =>
                alert(
                  "AI Quiz page will open here."
                )
              }
            >
              Take Quiz →
            </button>

          </div>

        )}

      </div>

      {/* Features */}
      <div className="material-features">

        <div className="material-feature">

          <span>📄</span>

          <div>
            <h3>
              PDF Analysis
            </h3>

            <p>
              AI understands the content of your
              uploaded study material.
            </p>
          </div>

        </div>

        <div className="material-feature">

          <span>🧠</span>

          <div>
            <h3>
              Smart Questions
            </h3>

            <p>
              Generate questions based directly
              on your learning material.
            </p>
          </div>

        </div>

        <div className="material-feature">

          <span>🎯</span>

          <div>
            <h3>
              Skill Analysis
            </h3>

            <p>
              Your answers help identify weak
              concepts and skill gaps.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default MaterialUpload;