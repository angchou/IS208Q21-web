import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import AboutUs from "./pages/about_us";
import Project from "./pages/project";
import Progress from "./pages/progress";
import ProjectAgreement from "./pages/project_argeement";

import NavBar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <NavBar />

        <main className="flex-1">
          <Routes>
            <Route path="/home" element={<Homepage />} />
            <Route path="/about_us" element={<AboutUs />} />
            <Route path="/project" element={<Project />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/project_agreement" element={<ProjectAgreement />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
