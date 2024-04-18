import { useEffect, useState } from "react";
import "./Quiz.css";
import QuizCard from "./QuizCard/QuizCard";
import { Helmet } from "react-helmet-async";
import Loader from "../../Shared/Loader/Loader";
// import useUser from "../../Hooks/useUser";

const Quiz = () => {
  const [quizCard, setQuizCard] = useState([]);
  const [loading, setLoading] = useState(true); // Set loading to true initially
  // const {user} = useUser()
  // console.log(user)

  useEffect(() => {
    const url = "https://quiz-app-backend-ybe6.onrender.com/quiz/quiz_card/";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setQuizCard(data);
        setLoading(false); // Set loading to false after fetching data
      })
      .catch((error) => {
        console.error("Error fetching quiz cards:", error);
        setLoading(false); // Set loading to false in case of error
      });
  }, []);

  return (
    <div className="quiz-section">
      <Helmet>
        <title>QuizApp | Quiz</title>
      </Helmet>
      <h1 className="quiz-section-title">Welcome to our quiz Arena</h1>
      {loading ? ( // If loading is true, render loader component
        <Loader />
      ) : (
        // If loading is false, render quiz cards
        <div className="all-card">
          {quizCard.map((card) => (
            <QuizCard key={card.id} card={card} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Quiz;
