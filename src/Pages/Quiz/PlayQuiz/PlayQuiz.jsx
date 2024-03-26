import { useParams } from "react-router-dom";
import "./PlayQuiz.css";
import { useEffect, useState } from "react";

const PlayQuiz = () => {
  const { id } = useParams();
  const [questions, setQuestions] = useState([]);
  const [questionCount, setQuestionCount] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [point, setPoint] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  useEffect(() => {
    const url = `http://127.0.0.1:8000/quiz/card_question/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
      });
  }, [id]);

  const currentQuestion = questions[questionCount];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const nextQuestion = () => {
    // Check if the selected option is correct and the question has not been answered before
    if (selectedOption === currentQuestion.answer && !answeredQuestions.includes(questionCount)) {
      setPoint((prevPoint) => prevPoint + 1);
      setAnsweredQuestions((prevAnsweredQuestions) => [...prevAnsweredQuestions, questionCount]);
    }
    setQuestionCount((prevCount) => prevCount + 1);
    setSelectedOption(null); // Reset selected option for the next question
  };

  const previousQuestion = () => {
    if (questionCount > 0) {
      setQuestionCount((prevCount) => prevCount - 1);
      setSelectedOption(null); // Reset selected option for the previous question
    }
  };

  return (
    <div className="quiz-page">
      <h1>This is play quiz page</h1>
      <p>Total Questions: {questions.length}</p>
      {questionCount < questions.length ? (
        // Render question if not all questions have been answered
        <div>
          <h1>Question {questionCount + 1}</h1>
          <h1>{currentQuestion.question}</h1>
          <p onClick={() => handleOptionClick(currentQuestion.option1)}>
            {currentQuestion.option1}
          </p>
          <p onClick={() => handleOptionClick(currentQuestion.option2)}>
            {currentQuestion.option2}
          </p>
          <p onClick={() => handleOptionClick(currentQuestion.option3)}>
            {currentQuestion.option3}
          </p>
          <p onClick={() => handleOptionClick(currentQuestion.option4)}>
            {currentQuestion.option4}
          </p>
          <button onClick={previousQuestion}>Previous</button>
          <button onClick={nextQuestion}>Next</button>
        </div>
      ) : (
        // Render total points if all questions have been answered
        <div>
          <h1>Total Points: {point}</h1>
          <h1>Thank you for completing the quiz!</h1>
        </div>
      )}
    </div>
  );
};

export default PlayQuiz;
