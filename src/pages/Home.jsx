import Proyect from "../components/Proyect";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";

function Home() {
  const listTechnologies = {
    react: [FaReact, "fill-cyan-500"],
    tailwind: [RiTailwindCssFill, "fill-cyan-500"],
    nodejs: [FaNodeJs, "fill-green-500"],
    psql: [BiLogoPostgresql, "fill-indigo-400"],
    nextjs: [RiNextjsFill, "fill-white"],
    ts: [BiLogoTypescript, "fill-blue-500"],
  };

  const projects = [
    {
      title: "EcoMercado",
      img: "ecomercado.png",
      href: "https://eco-mercado.vercel.app/",
      description:
        "Proyecto de comercio electrónico que ofrece productos ecológicos y sostenibles, desarrollado con PostgreSQL, React y Node.js. La plataforma está desplegada usando Vercel para el frontend y backend, y Railway para la base de datos y servicios.",
      technologies: [
        listTechnologies.react,
        listTechnologies.tailwind,
        listTechnologies.nodejs,
        listTechnologies.psql,
      ],
    },
    {
      title: "HappyPaws",
      img: "happypaws.png",
      href: "https://happy-paws-sr4m.vercel.app/",
      description:
        "Este proyecto funciona como una plataforma completa de tienda en línea para mascotas. Su propósito es permitir a los usuarios explorar productos, gestionar un carrito de compras y autenticarse de forma segura. El frontend está construido con Next.js e integra servicios de autenticación de Firebase.",
      technologies: [
        listTechnologies.nextjs,
        listTechnologies.tailwind,
        listTechnologies.psql,
      ],
    },
    {
      title: "ControlCash",
      img: "controlcash.png",
      href: "https://control-cash-lrc4.vercel.app/",
      description:
        "Este proyecto funciona como una calculadora de proyecciones financieras. Su objetivo es permitir a los usuarios estimar cuánto tiempo les tomaría comprar una propiedad basándose en sus ahorros mensuales. Construido con React.ts, Node.js y PostgreSQL.",
      technologies: [
        listTechnologies.react,
        listTechnologies.tailwind,
        listTechnologies.ts,
        listTechnologies.nodejs,
        listTechnologies.psql,
      ],
    },
    {
      title: "ProLegal",
      img: "prolegal.png",
      href: "https://willoandru.github.io/ProLegal/",
      description:
        "Proyecto conceptual para firmas de abogados diseñado para facilitar la venta de consultas legales. La solución usa un stack tradicional basado en PHP. Solo se muestra el lado del cliente aquí para evitar sobrecargar recursos en la nube.",
      technologies: [listTechnologies.react, listTechnologies.nodejs],
    },
    {
      title: "PickMeUp",
      img: "pickmeup.png",
      href: "https://willoandru.github.io/PickMeUp/",
      description:
        "Este proyecto fue creado con el objetivo de aprender los fundamentos de Tailwind CSS y mejorar la lógica de programación usando TypeScript. Es un simulador de juego basado en frontend inspirado en el manhwa Pick Me Up.",
      technologies: [listTechnologies.react, listTechnologies.ts],
    },
    {
      title: "Card Clash",
      img: "cartas.png",
      href: "https://willoandru.github.io/Cartas/",
      description:
        "Este juego de cartas enfrenta al jugador contra un algoritmo con varios niveles de dificultad. Permite crear un mazo para competir en batallas por turnos e incluye un sistema de puntuación, todo desarrollado en el frontend.",
      technologies: [listTechnologies.react],
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <div className="text-center">
        <h1>Proyectos de Programación</h1>
        <h3>Por Wilson Criollo</h3>
      </div>
      <h6>
        Una selección de proyectos web desarrollados con React.ts, Node.js,
        PostgreSQL y Tailwind CSS. Reflejan mi enfoque en interfaces limpias,
        soluciones funcionales y mejora continua como desarrollador web.
      </h6>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-">
        {projects.map((p, i) => {
          return (
            <Proyect
              key={i}
              title={p.title}
              img={p.img}
              description={p.description}
              technologies={p.technologies}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
