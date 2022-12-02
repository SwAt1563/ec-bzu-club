import "./Art.css";

import video from "../../assets/viedo/ads.mp4";
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

  return (
    <>
      <div className="video-container text-center" ref={ref}>
        <BsFillPlayCircleFill id="play" className="" />
        <video className="" id="video_id" poster={thumbnail_ads}>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default Art;
