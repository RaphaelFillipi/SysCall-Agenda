import { BrowserRouter } from "react-router-dom";
import { App } from "./frontend/routes/App";
import "./frontend/style/index.css";

export default function Root(props) {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
