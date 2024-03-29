import './CreateQuiz.css'
import './CreateQuiz.css'; // Import your CSS file

const CreateQuiz = () => {
    return (
        <div className="create-quiz-container">
            <h2>Create Quiz</h2>
            <form>
                <div className="form-group">
                    <input
                        type="text"
                        name="title"
                        placeholder='Enter Quiz Title'
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
                <button type="submit" className="btn btn-primary">Create Quiz</button>
            </form>
        </div>
    );
};

export default CreateQuiz;
