// Siren.jsx
import { useState } from 'react';
import sirenPic from '../assets/media/siren.png';
import sirenSound from '../assets/sounds/siren.wav';

export default function Siren({ onPlaySiren }) {
    const [isPlaying, setIsPlaying] = useState(false);

    let audio = new Audio(sirenSound);

    function playSiren() {
        audio.play();
        setIsPlaying(true);
        // Inform the parent component that the siren has been played
        onPlaySiren();
    }

    return (
        <section className="siren">
            <h1>תרצה להפעיל סירנה?</h1>
            <button onClick={playSiren} disabled={isPlaying}>הפעל סירנה</button>
            <img src={sirenPic} alt="siren" />
            {/* This is the <audio> element */}
            <audio id="sirenAudio" src={sirenSound}></audio>
        </section>
    );
}
