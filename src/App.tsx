import "./App.css";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import AboutMe from "./Components/AboutMe";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
function App() {
  return (
    <>
      <div className=" grid-cols-1 bg-[#0A0E17] w-full">
        <Navbar />
        <main>
          <section id="home">
            <Hero />
          </section>

          <section id="about">
            <AboutMe />
          </section>
          <section id="experience">
            <Experience />
          </section>

          <section id="skills">
          <Skills />
        </section>

        <section id="contact">
          <Contact />
        </section>
        </main>
      </div>
    </>
  );
}

export default App;
