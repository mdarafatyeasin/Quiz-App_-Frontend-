import { Link, useParams } from "react-router-dom";
import "./ViewQuestion.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../../../Shared/Loader/Loader";
// icons
import { MdDeleteSweep } from "react-icons/md";
import { RiAddCircleFill } from "react-icons/ri";
import { BiSolidMessageSquareEdit } from "react-icons/bi";
import toast from "react-hot-toast";

const ViewQuestion = () => {
  const [questions, setQuestions] = useState([]);
  const [questionLoader, setQuestionLoader] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setQuestionLoader(true);
      try {
        const response = await axios.get(
          `https://quiz-app-backend-ybe6.onrender.com/quiz/card_question/${id}`
        );
        // console.log(response.data);
        setQuestions(response.data);
        setQuestionLoader(false);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);

  const handleDeleteCard = async (id) => {
    try {
      const confirmed = window.confirm(
        "Are you sure you want to delete this question?"
      );
      if (confirmed) {
        await axios.delete(`https://quiz-app-backend-ybe6.onrender.com/quiz/all_questions/${id}`);
        setQuestions((prevState) =>
          prevState.filter((question) => question.id !== id)
        );
        toast.success("Quiz card deleted successfully");
        // console.log("Quiz card deleted successfully");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(error);
    }
    // console.log(id);
  };

  if (questionLoader) {
    return <Loader />;
  }

  return (
    <div className="view-question">
      <div className="question-title-dashboard">
        <h1>All Questions</h1>
        <div>
          <Link to={`/dashboard/upload_question/${id}`}>
            <RiAddCircleFill className="mr-3 text-4xl text-yellow-400" />
          </Link>
        </div>
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
            <div className="flex items-center question-actin-section">
              {/* ----------------------Delete Question--------------------- */}
              <div>
                <button
                  onClick={() => handleDeleteCard(question.id)}
                  className=" bg-red-500 rounded px-3 py-1 text-white"
                >
                  <MdDeleteSweep />
                </button>
              </div>
              {/* -----------------------Edit button-------------------- */}
              <div>
                <Link
                  to={`/dashboard/upload_question/question/edit/${question.id}`}
                >
                  <BiSolidMessageSquareEdit className="text-3xl text-green-600 ml-2 rounded" />
                </Link>
              </div>
              {/* ---------------------Add question button---------------------- */}
              <Link to={`/dashboard/upload_question/${id}`}>
                <RiAddCircleFill className="text-3xl text-yellow-400 ml-2" />
              </Link>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewQuestion;
