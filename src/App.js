import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import DownloadResume from './components/DownloadResume';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="bg-gray-900 min-h-screen w-full">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <DownloadResume />
            <Contact />
          </div>
        } />
        <Route path="/project/:projectId" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
