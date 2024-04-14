import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../../../../Shared/Loader/Loader";
import "./UploadForm.css";

const UploadForm = () => {
    const { id } = useParams();
    const [uploadLoader, setUploadLoader] = useState(false);

    const handleQuestion = async (event) => {
        setUploadLoader(true);
        event.preventDefault();
        const form = event.target;
        const question = form.question.value;
        const option1 = form.option1.value;
        const option2 = form.option2.value;
        const option3 = form.option3.value;
        const option4 = form.option4.value;
        const answer = form.answer.value;
        const quizCard = id;
        const question_level = "medium";
        const question_category = null;

        // Prepare the request body
        const requestBody = {
            quizCard: quizCard,
            question_level: question_level,
            question_category: question_category,
            question: question,
            option1: option1,
            option2: option2,
            option3: option3,
            option4: option4,
            answer: answer,
        };

        // Send a POST request
        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/quiz/all_questions/",
                requestBody
            );
            if (response.status === 201) {
                // Clear the form
                form.reset();
                console.log("Question added successfully!");
                setUploadLoader(false);
            } else {
                console.log("Failed to submit question");
            }
        } catch (error) {
            console.log(error);
        }
    };

    if (uploadLoader) {
        return <Loader />;
    }

    return (
        <div id="upload-form">
          <div className="upload-form">
            <div className="upload-question-form">
                <h1>Upload Form</h1>
                <form onSubmit={handleQuestion}>
                    <div>
                        <textarea
                            type="text"
                            name="question"
                            placeholder="Write your question here"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="option1"
                            placeholder="Option 1"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="option2"
                            placeholder="Option 2"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="option3"
                            placeholder="Option 3"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="option4"
                            placeholder="Option 4"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="answer"
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

export default UploadForm;
