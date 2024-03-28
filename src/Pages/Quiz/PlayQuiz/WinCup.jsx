import { useLottie } from "lottie-react";
import winCup from "../asset/win-cup.json";

const WinCup = () => {
  const options = {
    animationData: winCup,
    loop: false,
  };

  const { View } = useLottie(options);
  return <div className="win-cup">{View}</div>;
};

export default WinCup;
