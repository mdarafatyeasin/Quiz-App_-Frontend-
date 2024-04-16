import axios from "axios";
import "./CreateQuiz.css";
import toast from "react-hot-toast";

const CreateQuiz = () => {

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
        toast.success('Quiz created successfully!')
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
