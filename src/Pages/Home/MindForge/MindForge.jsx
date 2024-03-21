import "./MindForge.css";
import Trivia from "./asset/trivia.png";
import Puzzles from "./asset/puzzle.png";
import Facts from "./asset/facts.png";

const MindForge = () => {
  return (
    <div className="MindForge-section">
      <div className="MindForge-content">
        <div className="specialty">
          <div className="specialty-card sc-1">
            <img src={Trivia} alt="Trivia" />
            <div>
              <p>Trivia</p>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="specialty-card sc-2">
            <img src={Puzzles} alt="Puzzles" />
            <div>
              <p>Puzzles</p>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="specialty-card sc-3">
            <img src={Facts} alt="Facts" />
            <div>
              <p>Facts</p>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
        <div className="specialty-title">
          <p className="s-t">MIND FORGE</p>
          <h1>Test Your Knowledge</h1>
          <p>
          Challenge yourself with our quiz! Test your knowledge across a wide range of topics and discover how much you know about the world around you. From science and history to pop culture and literature, our quiz offers a diverse array of questions to challenge your intellect and expand your horizons.
          </p>
          <button className="mindforge-button">EXPLORE NOW</button>
        </div>
      </div>
    </div>
  );
};

export default MindForge;
