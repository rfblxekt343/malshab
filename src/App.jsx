import { useState, useRef } from 'react';
import {  useSelector } from 'react-redux';

import SimulatorVideo from "./components/SimulatorVideo";
import Timer from "./components/Timer.jsx";
import UserGrad from './components/UserGrade.jsx';
import DecisionMaking from './components/DecisionMaking.jsx';
import Decision from './components/Decision.jsx';
import OpenScreen from './components/OpenScreen.jsx';

function App() {
  const showTimer = useSelector(state => state.timer.showTimer);
  const timer = useSelector(state => state.timer);

  const [showOpenScreen, setShowOpenScreen] = useState(true);

  const videoRef = useRef(null);

  const [showDecision, setShowDecision] = useState(false);
  
  function decisionClick() {
    if (videoRef.current) {
      videoRef.current.jumpToTime(20); // Call the function to jump to second 20
    }
    setShowDecision(true);
  }
  function closeOpenScreen() {
    setShowOpenScreen(false);
  }


  return (
    <>
      {showOpenScreen && <OpenScreen onClose={closeOpenScreen}/>}
      {!showOpenScreen && <div id="app">

        <SimulatorVideo ref={videoRef} />
        {timer.isTimeUp && <div className="red-overlay"></div>}
        
        {showTimer && <Timer/>}

        <UserGrad grade={0} />
        <DecisionMaking onDecisionClick={decisionClick} />
        {showDecision && <Decision />}
      </div>}
    </>);
}

export default App;
