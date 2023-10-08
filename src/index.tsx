import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { initStore } from "./store/store";
import "./firebase";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <HashRouter>
    <Provider store={initStore()}>
      <App />
    </Provider>
  </HashRouter>
);
