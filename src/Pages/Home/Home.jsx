import { Helmet } from "react-helmet-async";
import "./Home.css"
import Banner from "./Banner/Banner";
import Sponsor from "./Sponsor/Sponsor";
import MindForge from "./MindForge/MindForge";
import Contact from "./Contact/Contact";
import About from "./About/About";

const Home = () => {
  return (
    <div  className="home-component">
      <Helmet>
        <title>QuizApp | Home</title>
      </Helmet>
      {/* banner */}
      <Banner/>
      <Sponsor/>
      <MindForge/>
      <About/>
      <Contact/>
    </div>
  );
};

export default Home;
