import { BrowserRouter } from "react-router-dom";
import { App } from "./frontend/routes/App";
import "../src/frontend/style/index.css";

export default function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
