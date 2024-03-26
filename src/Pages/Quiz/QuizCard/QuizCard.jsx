import { format } from 'date-fns';
import './QuizCard.css'
import { Link } from 'react-router-dom';

const QuizCard = (card) => {
    const {id, title, description, end_date} = card.card;
    const formattedEndDate = format(new Date(end_date), 'MMMM dd, yyyy');

    return (
        <div className="quiz-card">
            <h1>{title}</h1>
            <p>{description}</p>
            <p>End Date: {formattedEndDate}</p>
            <Link to={`/play_quiz/${id}`}>VIEW</Link>
        </div>
    );
};

export default QuizCard;