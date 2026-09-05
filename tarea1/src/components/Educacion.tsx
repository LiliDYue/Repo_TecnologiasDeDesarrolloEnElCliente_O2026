function Educacion() {
  return (
    <section id="educacion" className="seccion">
      <h2>Educación</h2>

      <div className="cards">

        <article className="card">
          <h3>Licenciatura en Diseño</h3>

          <p>ITESO</p>
        </article>

        <article className="card">
          <h3>Ingeniería en Desarrollo de Software</h3>

          <p>
            Formación enfocada en programación, desarrollo web,
            bases de datos y tecnologías de software.
          </p>
        </article>

      </div>

      <h3 className="subtitulo">
        Cursos
      </h3>

      <ul className="lista">
        <li>
          Diplomado en E-marketing y Community Manager
        </li>

        <li>
          Curso de Diseño Automotriz - Alberto Rigoletti
        </li>

        <li>
          Curso de Clase y Estilo
        </li>
      </ul>
    </section>
  );
}

export default Educacion;