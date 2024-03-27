import { configureStore } from "@reduxjs/toolkit";

import timerReducer from "./timer-slice";

const store = configureStore({
    reducer: { timer: timerReducer },
});

export default store;