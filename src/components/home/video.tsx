import React from "react";

const Video = () => {
  return (
    <div>
      <div className="overflow-hidden pt-20 relative grid place-items-center ">
        {/* <div className="z-0 absolute">
          <img src="/src/assets/HeroBg.jpg" alt="" />
        </div> */}
        <iframe
          className="lg:w-3/5 w-3/4 aspect-video z-10 rounded-xl shadow-xl drop-shadow-2xl shadow-black/30"
          src="https://www.youtube.com/embed/dyMwa-gP6bY"
        ></iframe>
      </div>
    </div>
  );
};

export default Video;
