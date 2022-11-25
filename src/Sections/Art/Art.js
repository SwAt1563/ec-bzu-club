import "./Art.css";

import timer from "../../assets/timer.mp4";
import video from "../../assets/highway-loop.mp4";
const Art = () => {
  return (
    <>
      <div className="container">
        <div className="video-container">
          <video className="mb-5" autoplay="true" muted>
            <source src={timer} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className=" container">
        <h4 className="text-light text-center">الدعاية الأنتخابية</h4>
        <div className="bg2 video-container">
          <video controls className="p-5">
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
};

export default Art;
