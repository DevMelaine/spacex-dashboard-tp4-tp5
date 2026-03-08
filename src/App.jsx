import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
const Home = React.lazy(() => import("./pages/Home"));
const MissionDetail = React.lazy(() => import("./pages/MissionDetail"));

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<p>Chargement...</p>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mission/:id" element={<MissionDetail />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;