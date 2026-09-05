import { useState, type FormEvent } from "react";

function Contacto() {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const datos = new FormData(form);

    const nombre = datos.get("nombre");
    const correo = datos.get("correo");
    const mensaje = datos.get("mensaje");

    console.log("Formulario enviado:");
    console.log("Nombre:", nombre);
    console.log("Correo:", correo);
    console.log("Mensaje:", mensaje);

    setEnviado(true);

    form.reset();
  };

  if (enviado) {
    return (
      <section id="contacto" className="seccion contacto">

        <div className="confirmacion">

          <div className="check">
            ✓
          </div>

          <h2>
            ¡Mensaje enviado!
          </h2>

          <p>
            Gracias por contactarme. He recibido tu mensaje correctamente.
          </p>

          <button
            className="boton"
            onClick={() => setEnviado(false)}
          >
            Enviar otro mensaje
          </button>

        </div>

      </section>
    );
  }

  return (
    <section id="contacto" className="seccion contacto">

      <h2>
        Contacto
      </h2>

      <p>
        Si quieres ponerte en contacto conmigo, puedes llenar el
        siguiente formulario.
      </p>

      <form
        className="formulario"
        onSubmit={handleSubmit}
      >

        <label htmlFor="nombre">
          Nombre
        </label>

        <input
          id="nombre"
          name="nombre"
          type="text"
          placeholder="Escribe tu nombre"
          required
        />

        <label htmlFor="correo">
          Correo electrónico
        </label>

        <input
          id="correo"
          name="correo"
          type="email"
          placeholder="ejemplo@correo.com"
          required
        />

        <label htmlFor="mensaje">
          Mensaje
        </label>

        <textarea
          id="mensaje"
          name="mensaje"
          placeholder="Escribe tu mensaje"
          rows={5}
          required
        />

        <button
          type="submit"
          className="boton"
        >
          Enviar mensaje
        </button>

      </form>

    </section>
  );
}

export default Contacto;