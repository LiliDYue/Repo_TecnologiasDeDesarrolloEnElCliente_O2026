function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-text">
        <p className="saludo">Hola, soy</p>

        <h1>Lilia Alejandra Padilla Hernández</h1>

        <h2>
          Diseñadora e Ingeniera en Desarrollo de Software
        </h2>

        <p>
          Profesional creativa con interés en el diseño, el desarrollo web
          y la creación de soluciones digitales.
        </p>

        <a href="#contacto" className="boton">
          Contactarme
        </a>
      </div>

      <div className="hero-photo">
        <img
          src="./src/img/lili.jpg"
          alt="Fotografía de Lilia A Padilla"
        />
      </div>
    </section>
  );
}

export default Hero;