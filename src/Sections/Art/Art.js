import "./Art.css";

import ads from "../../assets/viedo/ads.mp4";
import sktsh from "../../assets/viedo/sktsh.mp4";
import thumbnail_ads from "../../assets/viedo/ads.jpg";
import thumbnail_sktsh from "../../assets/viedo/sktsh.jpg";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { useRef, useEffect } from "react";

const Art = () => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      const pbtn = document.getElementById("play");
      const viedo_cons = document.getElementById("video_id");
      if (viedo_cons.paused) {
        pbtn.classList.add("hidden");
        viedo_cons.play();
      } else {
        pbtn.classList.remove("hidden");
        viedo_cons.pause();
      }
    };

    const element = ref.current;

    element.addEventListener("click", handleClick);

    return () => {
      element.removeEventListener("click", handleClick);
    };
  }, []);

  const ref2 = useRef(null);

  useEffect(() => {
    const handleClick2 = (event) => {
      const pbtn = document.getElementById("play2");
      const viedo_cons = document.getElementById("video_id2");
      if (viedo_cons.paused) {
        pbtn.classList.add("hidden");
        viedo_cons.play();
      } else {
        pbtn.classList.remove("hidden");
        viedo_cons.pause();
      }
    };

    const element2 = ref2.current;

    element2.addEventListener("click", handleClick2);

    return () => {
      element2.removeEventListener("click", handleClick2);
    };
  }, []);

  return (
    <>
      <div className="bg">
        <div className="container">
          <div className="video-container2 text-center mb-5" ref={ref2}>
            <BsFillPlayCircleFill id="play2" className="" />
            <video className="" id="video_id2" poster={thumbnail_sktsh}>
              <source src={sktsh} type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="container">
          <div className="video-container text-center" ref={ref}>
            <BsFillPlayCircleFill id="play" className="" />
            <video className="" id="video_id" poster={thumbnail_ads}>
              <source src={ads} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default Art;
