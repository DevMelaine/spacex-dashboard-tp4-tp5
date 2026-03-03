import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MissionDetail from "./pages/MissionDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mission/:id" element={<MissionDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;