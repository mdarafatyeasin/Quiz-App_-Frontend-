import { useNavigate, useParams } from "react-router-dom";
import "./UpdateQuestion.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../../../Shared/Loader/Loader";
import toast from "react-hot-toast";

const UpdateQuestion = () => {
  const { id } = useParams();
  const [questionLoader, setQuestionLoader] = useState(false);

  const usenavigete = useNavigate()

  // State variables for each input field
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [answer, setAnswer] = useState("");
  const [quizCard, setQuizCard] = useState("");
  const [question_category, setQuestion_category] = useState("");
  const [question_level, setQuestion_level] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setQuestionLoader(true);
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/quiz/all_questions/${id}/`
        );
        console.log(response.data);
        setQuestion(response.data.question);
        setOption1(response.data.option1);
        setOption2(response.data.option2);
        setOption3(response.data.option3);
        setOption4(response.data.option4);
        setAnswer(response.data.answer);
        setQuizCard(response.data.quizCard);
        setQuestion_level(response.data.question_level);
        setQuestion_category(response.data.question_category);
        setQuestionLoader(false);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchData();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await updateQuestion({
        question: question,
        option1: option1,
        option2: option2,
        option3: option3,
        option4: option4,
        answer: answer,
        quizCard: quizCard,
        question_category: question_category,
        question_level: question_level,
      });
      console.log("Question updated successfully!");
      toast.success('Question updated successfully!')
      usenavigete(`/dashboard/upload_question/view/${quizCard}`)
      // Add any additional logic here after successful update
    } catch (error) {
      console.error("Error updating question:", error);
    }
  };

  const updateQuestion = async (updatedData) => {
    try {
      await axios.put(
        `http://127.0.0.1:8000/quiz/all_questions/${id}/`,
        updatedData
      );
    } catch (error) {
      console.error("Error updating question:", error);
      throw error;
    }
  };

  if (questionLoader) {
    return <Loader />;
  }

  return (
    <div id="upload-form">
      <div className="upload-form">
        <div className="upload-question-form">
          <h1>Edit Form</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <textarea
                type="text"
                name="question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Write your question here"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="option1"
                value={option1}
                onChange={(e) => setOption1(e.target.value)}
                placeholder="Option 1"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="option2"
                value={option2}
                onChange={(e) => setOption2(e.target.value)}
                placeholder="Option 2"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="option3"
                value={option3}
                onChange={(e) => setOption3(e.target.value)}
                placeholder="Option 3"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="option4"
                value={option4}
                onChange={(e) => setOption4(e.target.value)}
                placeholder="Option 4"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="answer"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Answer"
                required
              />
            </div>
            <div>
              <input type="submit" value="SUBMIT" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateQuestion;
