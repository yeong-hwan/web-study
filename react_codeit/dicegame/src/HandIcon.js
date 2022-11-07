import rockImg from "./assets/rock.svg";
import scissorImg from "./assets/scissor.svg";
import paperImg from "./assets/paper.svg";

function HandIcon({ value }) {
  const IMAGES = {
    rock: rockImg,
    scissor: scissorImg,
    paper: paperImg,
  };

  const alt = value;

  return <img src={IMAGES[value]} alt={alt} />;
}

export default HandIcon;
