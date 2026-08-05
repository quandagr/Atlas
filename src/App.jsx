import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import Healthcare from "./pages/Healthcare";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/healthcare" element={<Healthcare />} />
    </Routes>
  );
}

export default App;
