import { Link, useParams } from "react-router-dom";
import "./ViewQuestion.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../../../Shared/Loader/Loader";

const ViewQuestion = () => {
  const [questions, setQuestions] = useState([]);
  const [questionLoader, setQuestionLoader] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setQuestionLoader(true);
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/quiz/card_question/${id}`
        );
        console.log(response.data);
        setQuestions(response.data);
        setQuestionLoader(false);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);

  if (questionLoader) {
    return <Loader />;
  }

  return (
    <div className="view-question">
      <div className="question-title-dashboard">
        <h1>question {id}</h1>
        <Link to={`/dashboard/upload_question/${id}`}>Add More Questions</Link>
      </div>
      <div className="dashboard-question-section">
        {questions.map((question, index) => (
          <div className="question-card" key={question.id}>
            <div className="question-text">
              <h1>{index + 1}.</h1>
              <h2>{question.question}</h2>
            </div>
            <div className="options">
              <div>
                <input
                  type="radio"
                  disabled
                  checked={question.answer === question.option1}
                />
                <label
                  className={
                    question.answer === question.option1
                      ? "correct-option"
                      : "incorrect-option"
                  }
                  htmlFor=""
                >
                  {question.option1}
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  disabled
                  checked={question.answer === question.option2}
                />
                <label
                  className={
                    question.answer === question.option2
                      ? "correct-option"
                      : "incorrect-option"
                  }
                >
                  {question.option2}
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  disabled
                  checked={question.answer === question.option3}
                />
                <label
                  className={
                    question.answer === question.option3
                      ? "correct-option"
                      : "incorrect-option"
                  }
                >
                  {question.option3}
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  disabled
                  checked={question.answer === question.option4}
                />
                <label
                  className={
                    question.answer === question.option4
                      ? "correct-option"
                      : "incorrect-option"
                  }
                >
                  {question.option4}
                </label>
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewQuestion;
