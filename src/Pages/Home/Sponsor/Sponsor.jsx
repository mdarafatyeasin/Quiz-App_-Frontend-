import "./Sponsor.css";
import i1 from "./asset/i1.png";
import i2 from "./asset/i2.png";
import i3 from "./asset/i3.png";
import i4 from "./asset/i4.png";

const Sponsor = () => {
  return (
    <div className="sponsor-section">
      <div className="sponsor-content">
        <p className="sponsor-title">FEATURED ON</p>
        <div className="sponsor-logo">
          <div className="sponsor-icon">
            <img src={i1} alt="" />
            <p>lorem</p>
          </div>
          <div className="sponsor-icon">
            <img src={i2} alt="" />
            <p>lorem</p>
          </div>
          <div className="sponsor-icon">
            <img src={i3} alt="" />
            <p>lorem</p>
          </div>
          <div className="sponsor-icon">
            <img src={i4} alt="" />
            <p>lorem</p>
          </div>
          <div className="sponsor-icon">
            <img src={i4} alt="" />
            <p>lorem</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
