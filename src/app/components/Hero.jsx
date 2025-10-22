"use client";
import { useRef, useEffect } from "react";

export default function Home() {
  const videoRef = useRef(null);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play(); // play when visible
          } else {
            video.pause(); // pause when out of view
          }
        });
      },
      { threshold: 0.5 } // triggers when at least 50% visible
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);
  const handlePlayWithSound = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = false;
      video.play();
    }
  };

  return (
    <div className="w-full mt-28 md:flex md:justify-center md:items-center  md:mt-36">
      <div className="w-full md:rounded-xl overflow-hidden shadow-lg">
        <video
          ref={videoRef}
          className="w-full h-auto md:rounded-xl"
          loop
          autoPlay
          playsInline
          muted
          onClick={handlePlayWithSound}
        >
          <source src="/Video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
