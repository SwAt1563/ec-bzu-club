import "./Art.css";

import timer from "../../assets/timer.mp4";
import video from "../../assets/highway-loop.mp4";

import Hero from "../Hero/Hero";
import Video from "../Video/Video";

const Art = () => {
    return (
        <>
            <Hero />

            <Video autoPlay={true} src={timer} />
            <Video autoPlay={false} src={video} title="الدعاية الإنتخابية" />
        </>
    );
};

export default Art;
