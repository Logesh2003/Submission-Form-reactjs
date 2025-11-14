import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      {/* <Route path="/about" element={<About />} /> */}
    </Routes>
  );
}

export default App;
