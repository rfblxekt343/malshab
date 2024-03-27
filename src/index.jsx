import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import store from './store'; // Assuming your Redux store is defined in this file
import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(
  <Provider store={store}>
    <App />
  </Provider>
);
