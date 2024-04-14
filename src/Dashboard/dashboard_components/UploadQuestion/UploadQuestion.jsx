import "./UploadQuestion.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from '../../../Shared/Loader/Loader'
import { Link } from "react-router-dom";


const UploadQuestion = () => {
  const [quizCardData, setQuizCardData] = useState([]);
  const [ cardLoading, setCardLoading ] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setCardLoading(true)
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/quiz/quiz_card/"
        );
        console.log(response.data);
        setQuizCardData(response.data);
        setCardLoading(false)
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);

  const handleDeleteCard = async (id) => {
    try {
      const confirmed = window.confirm("Are you sure you want to delete this quiz card?");
      if (confirmed) {
        await axios.delete(`http://127.0.0.1:8000/quiz/quiz_card/${id}`);
        setQuizCardData((prevState) =>
          prevState.filter((card) => card.id !== id)
        );
        console.log("Quiz card deleted successfully");
      } else {
        console.log("Deletion cancelled by user");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  if(cardLoading){
    return <Loader/>
  }

  return (
    <div className="quizCard-dashboard-section">
      <h2>Upload Question</h2>
      <div className="quizCard-dashboard">
        {quizCardData.map((card) => (
          <div className="quiz-card-dashboard" key={card.id}>
            <h1>{card.title}</h1>
            <p>{card.description}</p>
            <p>End Date: {card.formattedEndDate}</p>
            <div className="action-section">
              <button
                onClick={() => handleDeleteCard(card.id)}
                className="delete-button"
              >
                DELETE
              </button>
              <Link to={`/dashboard/upload_question/view/${card.id}`}
                className="edit-card-button"
              >
                VIEW
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadQuestion;
