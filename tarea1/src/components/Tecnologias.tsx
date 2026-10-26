function Tecnologias() {
  const technologies = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Express",
    "HTML5",
    "CSS3",
    "GitHub",
    "AWS",
    "Figma",
    "VS Code",
    "MongoDB",
    "MySQL",
    "Docker",
    "Cassandra",
    "Dgraph",
    "ChromaDB",
    "FLutter",
    "Suite Adobe",
    "Unity",
  ];

  return (
    <section id="tecnologias" className="seccion">
      <h2>Tecnologías</h2>

      <div className="tech-grid">
        {technologies.map((technology) => (
          <div className="tech-card" key={technology}>
            {technology}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Tecnologias;