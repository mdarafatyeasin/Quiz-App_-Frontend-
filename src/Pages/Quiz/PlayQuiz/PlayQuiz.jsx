import { Link, useNavigate, useParams } from "react-router-dom";
import "./PlayQuiz.css";
import { useEffect, useState } from "react";
import WinCup from "./WinCup";
import useUser from "../../../Hooks/useUser";
import Loader from "../../../Shared/Loader/Loader";

const PlayQuiz = () => {
  const { user, loading } = useUser();
  const { id } = useParams();
  const [questions, setQuestions] = useState([]);
  const [questionCount, setQuestionCount] = useState(0);
  const [point, setPoint] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null); // State to hold the selected option

  const navigate = useNavigate();

  useEffect(() => {
    const url = `http://127.0.0.1:8000/quiz/card_question/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
      });
  }, [id]);

  const currentQuestion = questions[questionCount];

  const handleOption = (e) => {
    const selectedOption = e.target.value;
    setSelectedOption(selectedOption);
  };

  const handleNextQuestion = () => {
    // Move to the next question
    if (selectedOption === currentQuestion.answer) {
      // Increment point if the selected option is correct
      setPoint((prevPoint) => prevPoint + 1);
    }
    // Reset selected option to null for the next question
    setSelectedOption(null);
    setQuestionCount((prevCount) => prevCount + 1);
  };

  console.log(user);
  if (loading) {
    return <Loader />;
  }
  if (!user || user.status === "error") {
    navigate("/login");
  }

  return (
    <div className="quiz-page">
      {currentQuestion && (
        <div>
          <h1 className="quentin-title">Python</h1>
          <h2>Question {questionCount + 1} / {questions.length}</h2>
          <p className="question">{currentQuestion.question}</p>
          <div className="option-section">
            <input
              type="radio"
              id="option1"
              name="options"
              value={currentQuestion.option1}
              onChange={handleOption}
              checked={selectedOption === currentQuestion.option1} // Check if the selected option is the current option
            />
            <label htmlFor="option1">{currentQuestion.option1}</label>
          </div>
          <div className="option-section">
            <input
              type="radio"
              id="option2"
              name="options"
              value={currentQuestion.option2}
              onChange={handleOption}
              checked={selectedOption === currentQuestion.option2} // Check if the selected option is the current option
            />
            <label htmlFor="option2">{currentQuestion.option2}</label>
          </div>
          <div className="option-section">
            <input
              type="radio"
              id="option3"
              name="options"
              value={currentQuestion.option3}
              onChange={handleOption}
              checked={selectedOption === currentQuestion.option3} // Check if the selected option is the current option
            />
            <label htmlFor="option3">{currentQuestion.option3}</label>
          </div>
          <div className="option-section">
            <input
              type="radio"
              id="option4"
              name="options"
              value={currentQuestion.option4}
              onChange={handleOption}
              checked={selectedOption === currentQuestion.option4} // Check if the selected option is the current option
            />
            <label htmlFor="option4">{currentQuestion.option4}</label>
          </div>
          <div className="next-button">
            <button onClick={handleNextQuestion}>Next</button>
          </div>
        </div>
      )}
      {questionCount !== 0 && questionCount === questions.length && (
        <div className="result-card">
          <WinCup />
          <div>
            <h2>Congrats!</h2>
            <h3>Total Points: {point}</h3>
            <p>Quiz completed successfully.</p>
            <Link className="again-play" to="/play_quiz">
              Play More
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlayQuiz;
