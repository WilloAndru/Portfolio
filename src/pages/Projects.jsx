import Proyect from "../components/Project";
import { listTechnologies } from "../data/listTechonologies";

function Projects() {
  const projects = [
    {
      title: "EcoMercado",
      img: "ecomercado.png",
      href: "https://eco-mercado.vercel.app/",
      description:
        "Plataforma de comercio electrónico de productos sostenibles con autenticación de usuario, carrito de compras, búsqueda avanzada con filtrado y paginación, CRUD de productos para usuarios vendedores y dashboard para administradores.",
      technologies: [
        listTechnologies.react,
        listTechnologies.tailwind,
        listTechnologies.nodejs,
        listTechnologies.postgreSQL,
      ],
      documentation: "https://github.com/WilloAndru/EcoMercado",
    },
    {
      title: "HappyPaws",
      img: "happypaws.png",
      href: "https://happy-paws-sr4m.vercel.app/",
      description:
        "Plataforma de comercio electrónico especializada en productos para mascotas con autenticación de usuario, carrito de compras, búsqueda avanzada con filtrado y paginación, e integración de pagos con Stripe.",
      technologies: [
        listTechnologies.nextjs,
        listTechnologies.tailwind,
        listTechnologies.postgreSQL,
      ],
      documentation: "https://github.com/WilloAndru/HappyPaws",
    },
    {
      title: "ControlCash",
      img: "controlcash.png",
      href: "https://control-cash-lrc4.vercel.app/",
      description:
        "Aplicación web de proyección financiera para calcular el tiempo de adquisición de vivienda, con autenticación de usuario, diseño responsive con SASS, suscripción recurrente implementada con Stripe y modo claro/oscuro.",
      technologies: [
        listTechnologies.react,
        listTechnologies.tailwind,
        listTechnologies.ts,
        listTechnologies.nodejs,
        listTechnologies.postgreSQL,
      ],
      documentation: "https://github.com/WilloAndru/ControlCash",
    },
    {
      title: "PriceCompare",
      img: "pricecompare.png",
      href: "https://pricecompare-seven.vercel.app/",
      description:
        "Herramienta web que extrae información de las principales cadenas de supermercados, mostrando el precio de los productos en tablas, con funcionalidad de exportación a Excel y modo claro/oscuro.",
      technologies: [
        listTechnologies.react,
        listTechnologies.tailwind,
        listTechnologies.nodejs,
      ],
      documentation: "https://github.com/WilloAndru/TrabajoOmar",
    },
    {
      title: "ProLegal",
      img: "prolegal.png",
      href: "https://willoandru.github.io/ProLegal/",
      description:
        "Sitio web para un bufete de abogados con autenticación de usuario, sistema de solicitud de consultas y visualización de citas programadas. (Actualmente sin base de datos, pero funcional en producción).",
      technologies: [listTechnologies.react, listTechnologies.nodejs],
      documentation: "https://github.com/WilloAndru/ProLegal",
    },
    {
      title: "PickMeUp",
      img: "pickmeup.png",
      href: "https://willoandru.github.io/PickMeUp/",
      description:
        "Videojuego con sistema de entidades, progresión de niveles y gacha para obtención de personajes.",
      technologies: [listTechnologies.react, listTechnologies.ts],
      documentation: "https://github.com/WilloAndru/PickMeUp",
    },
    {
      title: "Card Clash",
      img: "cartas.png",
      href: "https://willoandru.github.io/Cartas/",
      description:
        "Videojuego de cartas con sistema de inteligencia artificial y mecánicas de batalla.",
      technologies: [listTechnologies.react],
      documentation: "https://github.com/WilloAndru/Cartas",
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <div className="text-center">
        <h1>Proyectos de Programación</h1>
      </div>
      <p>
        Una selección de proyectos web desarrollados con React.ts, Node.js,
        PostgreSQL y Tailwind CSS. Reflejan mi enfoque en interfaces limpias,
        soluciones funcionales y mejora continua como desarrollador web.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-">
        {projects.map((p, i) => (
          <Proyect
            key={i}
            title={p.title}
            img={p.img}
            description={p.description}
            href={p.href}
            technologies={p.technologies}
            documentation={p.documentation}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
