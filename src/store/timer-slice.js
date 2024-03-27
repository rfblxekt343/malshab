import { createSlice } from "@reduxjs/toolkit";

const initialTimerState = {
  showTimer: true,
  timer: {
    secondsLeft: 10,
    isTimeUp: false,
  },
};

const timerSlice = createSlice({
  name: "timer",
  initialState: initialTimerState,
  reducers: {
    startTimer(state) {
      state.timer.secondsLeft = 10;
      state.timer.isTimeUp = false;
    },
    // You may want to add a new action to handle updating the timer each second
    updateTimer(state) {
      if (state.timer.secondsLeft > 0) {
        state.timer.secondsLeft--;
      } else {
        state.timer.isTimeUp = true;
      }
    },
    hideTimer(state) {
      state.showTimer = false;
    },
    timeUp(state) {
      state.timer.isTimeUp = true;
    },
  },
});

export const timerActions = timerSlice.actions;

export default timerSlice.reducer;
