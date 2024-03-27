import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { timerActions } from '../store/timer-slice';

export default function Timer() {
  const dispatch = useDispatch();
  const timer = useSelector(state => state.timer.timer);

  const startTimer = () => {
    // Start the timer when the button is clicked
    dispatch(timerActions.startTimer());

    const intervalId = setInterval(() => {
      // Dispatch action to update the timer every second
      dispatch(timerActions.updateTimer());
    }, 1000);

    // Clean up the interval when the component unmounts or when the button is clicked again
    return () => clearInterval(intervalId);
  };

  let btnContent = 'התחל טיימר';
  let btnDisabled = false;
  if (timer.secondsLeft === 0) {
    btnContent = 'נגמר הזמן';
    btnDisabled = true;
  }

  return (
    <div id="timer">
     {(timer.secondsLeft=== 10 || timer.secondsLeft ===0) && <button onClick={startTimer} disabled={btnDisabled}>{btnContent}</button>}
    {timer.secondsLeft>0 &&  <p >הזמן שנותר: {timer.secondsLeft} שניות</p>}
    </div>
  );
}
