import { listTechnologies } from "../data/listTechonologies";
import { IoDocumentText } from "react-icons/io5";

export default function AboutMe() {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      {/* Introduccion */}
      <div className="bg-card rounded-2xl w-full lg:w-2/3 p-8 items-center flex gap-8">
        <img
          className="w-[14vw] h-[14vw] rounded-full object-cover bg-card"
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
          <h6 className="mt-4">Descarga mi currículum</h6>
          <a
            href="HDV.pdf"
            download
            className="rounded-xl flex items-center justify-center gap-2 p-3 bg-base bg-btn font-semibold"
          >
            <IoDocumentText className="text-xl" />
            Descárgalo aquí
          </a>
        </div>
      </div>
      {/* Tecnologias */}
      <div className="bg-card rounded-2xl p-5 w-full lg:w-1/3 lg:min-h-full">
        <h3 className="mb-5">Tecnologías</h3>
        <div className="grid grid-cols-3 gap-6">
          {Object.entries(listTechnologies).map(([name, [Icon, color]]) => (
            <div key={name} className="flex flex-col items-center gap-2">
              <p className="capitalize">{name}</p>
              <Icon key={name} className={`${color} text-4xl`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
