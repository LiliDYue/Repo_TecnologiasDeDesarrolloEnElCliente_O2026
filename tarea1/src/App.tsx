import Hero from "./components/Hero";
import SobreMi from "./components/SobreMi";
import Proyectos from "./components/Proyectos";
import Tecnologias from "./components/Tecnologias";
import Experiencia from "./components/Experiencia";
import Educacion from "./components/Educacion";
import Habilidades from "./components/Habilidades";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <header className="navbar">

        <a href="#inicio" className="logo">
          LP
        </a>

        <nav aria-label="Navegación principal">

          <a href="#sobre-mi">
            Sobre mí
          </a>

          <a href="#proyectos">
            Proyectos
          </a>

          <a href="#tecnologias">
            Tecnologías
          </a>

          <a href="#experiencia">
            Experiencia
          </a>

          <a href="#educacion">
            Educación
          </a>

          <a href="#habilidades">
            Habilidades
          </a>

          <a href="#contacto">
            Contacto
          </a>

        </nav>

      </header>

      <main>

        <Hero />

        <SobreMi />

        <Proyectos />

        <Tecnologias />

        <Experiencia />

        <Educacion />

        <Habilidades />

        <Contacto />

      </main>

      <Footer />
    </>
  );
}

export default App;