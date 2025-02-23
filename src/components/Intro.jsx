import top from "../assets/s.png";
import Horizontalscroll from "../components/Horizontalscroll";
import { Parallax } from "./Parallax";
const Intro = () => {
  return (
    <div className=" mt-5">
      
      <div>
        <Parallax/>
      </div>
      <div>
        <div>
        <p className="font-bold text-center pb-4 font-monstserrat text-2xl uppercase">
        Our Portfolio
        </p>
        </div>
      <Horizontalscroll />
      </div>
    </div>
  );
};

export default Intro;
