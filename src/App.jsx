import { HashRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import Project from "./pages/Project";
import Progress from "./pages/Progress";
import ProjectAgreement from "./pages/ProjectAgreement";
import Footer from "./components/footer";

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col">
        <NavBar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/about_us" element={<AboutUs />} />
            <Route path="/project" element={<Project />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/project_agreement" element={<ProjectAgreement />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
