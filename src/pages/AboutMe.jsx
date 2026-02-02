import { listTechnologies } from "../data/listTechonologies";

export default function AboutMe() {
  return (
    <div className="flex flex-col lg:flex-row min-h-[80vh] w-full gap-4">
      <div className="grid grid-rows-2 gap-4 w-full lg:w-2/3">
        {/* Introduccion */}
        <div className="bg-card rounded-2xl p-8 flex items-center gap-8">
          <img
            className="rounded-full w-1/4 object-cover bg-card"
            src="perfil.jpeg"
            alt="Perfil"
          />
          <div className="flex flex-col gap-2 justify-center">
            <h6>Wilson Andrés Criollo Rodríguez</h6>
            <h3>Desarrollador Web FullStack</h3>
            <span className="text-sm">
              Más de 3 años desarrollando software de forma autodidacta. He
              desarrollado proyectos web desde cero hasta su despliegue en
              producción, con enfoque en arquitectura, rendimiento y experiencia
              de usuario. Trabajo bajo un proceso de mejora continua apoyado en
              métricas para optimizar la calidad y el desempeño.
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-card rounded-2xl p-5">a</div>
          <div className="bg-card rounded-2xl p-5">a</div>
        </div>
      </div>
      <div className="bg-card rounded-2xl p-5 w-full lg:w-1/3 lg:min-h-full">
        <h3 className="mb-5">Tecnologías</h3>
        <div className="grid grid-cols-3 gap-5">
          {Object.entries(listTechnologies).map(([name, [Icon, color]]) => (
            <div className="flex flex-col items-center p-5 gap-2">
              <p>{name}</p>
              <Icon key={name} className={`${color} text-4xl`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
