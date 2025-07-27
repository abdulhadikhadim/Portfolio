import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white" style={{ cursor: 'none' }}>
      <CustomCursor />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Achievements />
      <Contact />
    </main>
  );
}