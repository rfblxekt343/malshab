import { useState, useEffect, useRef, forwardRef } from 'react';
import Siren from './Siren.jsx';
import video from '../assets/video.mp4';

const SimulatorVideo = forwardRef(function SimulatorVideo({ }, ref) {
    const videoRef = useRef(null);
    const [showSiren, setShowSiren] = useState(false);
    const [sirenShown, setSirenShown] = useState(false); // Flag to track if siren has been shown

    useEffect(() => {
        const checkTime = () => {
            if (!sirenShown && videoRef.current && videoRef.current.currentTime >= 5) {
                setShowSiren(true);
                videoRef.current.pause();
                setSirenShown(true); // Set the flag to true once siren is shown
            }
        };

        const interval = setInterval(checkTime, 1000); // Check every second

        return () => clearInterval(interval);
    }, [sirenShown]); // Run whenever sirenShown changes

    const jumpToTime = (time) => {
        if (videoRef.current) {
          videoRef.current.currentTime = time;
        }
      };

    const resumeVideo = () => {
        setShowSiren(false);
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    useEffect(() => {
        if (ref) {
          ref.current = { jumpToTime }; // Assign jumpToTime function to the ref
        }
      }, [ref]);
    return (
        <>
            <video ref={videoRef} className="video-player" controls>
                <source src={video} type="video/mp4" />
            </video>
            {showSiren && <Siren onPlaySiren={resumeVideo} />}
        </>
    );
}
)
export default SimulatorVideo;