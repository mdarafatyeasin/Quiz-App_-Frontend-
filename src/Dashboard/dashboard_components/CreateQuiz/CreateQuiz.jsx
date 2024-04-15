import axios from "axios";
import "./CreateQuiz.css";
import Loader from "../../../Shared/Loader/Loader";
import { useNavigate } from "react-router-dom";
import useUser from "../../../Hooks/useUser";
import useAdmin from "../../../Hooks/useAdmin";

const CreateQuiz = () => {

  // auth---------------------------------------------------------------start
  const { user, loading: userLoading } = useUser();
  const { admin, loading: adminLoading } = useAdmin();
  const navigate = useNavigate();

  // Check if either user or admin is still loading
  if (userLoading || adminLoading) {
    return <Loader />;
  }

  // Check if either user or admin request resulted in an error
  if (user?.status === "error" || admin?.status === "error") {
    navigate("/login");
    return null; // Prevent further rendering
  }

  // Check if user is not logged in or not an admin
  if (!user || !admin || admin.role !== "admin") {
    navigate("/login");
    return null; // Prevent further rendering
  }
  // auth---------------------------------------------------------------end


  const handleQuizCard = async (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const description = form.description.value;
    const end_date = form.end_date.value;

    // Prepare the request body
    const requestBody = {
      title: title,
      description: description,
      end_date: end_date,
    };

    // Send a POST request
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/quiz/quiz_card/",
        requestBody
      );
      if (response.status === 201) {
        // Clear the form
        form.reset();
        console.log("Form submitted successfully!");
      } else {
        console.log("Failed to submit form");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="create-quiz-container">
      <h2>Create Quiz</h2>
      
      <form onSubmit={handleQuizCard} className="create-quiz-form">
        <div className="form-group">
          <input
            type="text"
            name="title"
            placeholder="Enter Quiz Title"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <textarea
            name="description"
            placeholder="Write a short description"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            type="datetime-local"
            name="end_date"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create Quiz
        </button>
      </form>
    </div>
  );
};

export default CreateQuiz;
