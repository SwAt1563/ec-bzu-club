const Video = ({ autoPlay, muted, src, title }) => {
    return (
        <>
            <div className="container mt-5">
                <div className="bg2 video-container text-center py-3">
                    {title && (
                        <h4 className="text-light text-center">{title}</h4>
                    )}
                    <video
                        className="pt-4 pb-5"
                        autoPlay={autoPlay}
                        muted={false}
                        controls
                    >
                        <source src={src} type="video/mp4" />
                    </video>
                </div>
            </div>
        </>
    );
};

export default Video;
