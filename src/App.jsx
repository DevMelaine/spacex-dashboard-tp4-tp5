import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Home = React.lazy(() => import("./pages/Home"));
const MissionDetail = React.lazy(() => import("./pages/MissionDetail"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Chargement...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mission/:id" element={<MissionDetail />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;