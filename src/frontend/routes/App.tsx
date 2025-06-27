import { Contact } from "../pages/Contacts";
import { Routes, Route } from "react-router-dom";

export function App() {
  return (
    <Routes>
      <Route path="/agenda" element={<Contact />} />
    </Routes>
  );
}
