import { useParams } from "react-router-dom";
import "./PlayQuiz.css";
import { useEffect, useState } from "react";

const PlayQuiz = () => {
  const { id } = useParams();
  const [questions, setQuestions] = useState([]);
  const [questionCount, setQuestionCount] = useState(0);
  const [point, setPoint] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null); // State to hold the selected option

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
    if (selectedOption === currentQuestion.answer) {
      // Increment point if the selected option is correct
      setPoint((prevPoint) => prevPoint + 1);
    }
    // Move to the next question
    setQuestionCount((prevCount) => prevCount + 1);
    setSelectedOption(null); // Reset selected option to null when moving to the next question
  };

  return (
    <div className="quiz-page">
      <h1>This is play quiz page</h1>
      {currentQuestion && (
        <div>
          <h2>Question {questionCount + 1}</h2>
          <p>{currentQuestion.question}</p>
          <div>
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
          <div>
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
          <div>
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
          <div>
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
        </div>
      )}
      {questionCount !== 0 && questionCount === questions.length && (
        <div>
          <h2>Quiz Completed!</h2>
          <p>Total Points: {point}</p>
        </div>
      )}
    </div>
  );
};

export default PlayQuiz;
