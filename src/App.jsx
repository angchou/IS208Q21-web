import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
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
    </HashRouter>
  );
}

export default App;
