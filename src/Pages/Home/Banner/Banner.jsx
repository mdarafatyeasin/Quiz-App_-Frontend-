import "./Banner.css";
import { useLottie } from "lottie-react";
import bannerAnim from "../../../assets/banner-anim.json";

const Banner = () => {
  const options = {
    animationData: bannerAnim,
    loop: true,
  };
  const { View } = useLottie(options);
  return (
    <div className="banner-component">
      <div className="banner">
        <div className="banner-text">
          <div>
            <h1 className="font-bold">Flex your brain with our fun quiz challenges!</h1>
            <p>
              Challenge yourself and your friends as you navigate through our
              fun-filled quiz challenges designed to stimulate your brain and
              test your wits. Each question is crafted to not only entertain but
              also educate, ensuring that you will walk away with new insights
              and tidbits of information.
            </p>
          </div>
          <div className="button-section">
            <button className="play-now" >
              Play Now
            </button>
            <button className="premium-button">Get Premium</button>
          </div>
        </div>
        <div className="banner-anim">
          <div>{View}</div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
