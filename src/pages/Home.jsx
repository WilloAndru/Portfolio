import Proyect from "../components/Proyect";

function Home() {
  const projects = [
    {
      title: "EcoMercado",
      img: "ecomercado.png",
      href: "https://eco-mercado.vercel.app/",
      description1:
        "Proyecto de comercio electrónico que ofrece productos ecológicos y sostenibles, desarrollado con PostgreSQL, Express, React y Node.js. La plataforma está desplegada usando Vercel para el frontend y backend, y Railway para la base de datos y servicios.",
      description2:
        "La plataforma incluye todas las características esenciales de un sitio de comercio electrónico moderno, como panel de administración, carrito de compras, procesamiento de pagos, inicio de sesión y registro, además de una interfaz de usuario intuitiva. También implementé funcionalidad de filtrado y búsqueda para facilitar la navegación a través de categorías y productos.",
    },
    {
      title: "HappyPaws",
      img: "happypaws.png",
      href: "https://happy-paws-sr4m.vercel.app/",
      description1:
        "Este proyecto funciona como una plataforma completa de tienda en línea para mascotas. Su propósito es permitir a los usuarios explorar productos, gestionar un carrito de compras y autenticarse de forma segura. El frontend está construido con Next.js e integra servicios de autenticación de Firebase.",
      description2:
        "Este proyecto funciona como un sistema de comercio electrónico completo para productos de mascotas. Ayuda a los usuarios a navegar artículos con paginación, guardar favoritos y completar compras usando pagos de Stripe. El backend usa PostgreSQL con Prisma para gestionar datos eficientemente, mientras que Firebase maneja la autenticación de usuarios y seguridad.",
    },
    {
      title: "ControlCash",
      img: "controlcash.png",
      href: "https://control-cash-lrc4.vercel.app/",
      description1:
        "Este proyecto funciona como una calculadora de proyecciones financieras. Su objetivo es permitir a los usuarios estimar cuánto tiempo les tomaría comprar una propiedad basándose en sus ahorros mensuales. Construido con React.ts, Node.js y PostgreSQL.",
      description2:
        "Este proyecto sirve como una herramienta de seguimiento y proyección de finanzas personales. Su propósito es ayudar a los usuarios a gestionar sus ingresos y gastos mensuales mientras visualizan cómo evolucionan sus ahorros con el tiempo. Al analizar patrones de gasto, el sistema proporciona información y proyecciones que guían a los usuarios hacia el logro de objetivos financieros.",
    },
    {
      title: "ProLegal",
      img: "prolegal.png",
      href: "https://willoandru.github.io/ProLegal/",
      description1:
        "Proyecto conceptual para firmas de abogados diseñado para facilitar la venta de consultas legales. La solución usa un stack tradicional basado en PHP. Solo se muestra el lado del cliente aquí para evitar sobrecargar recursos en la nube.",
      description2:
        "La plataforma incluye todas las funcionalidades esenciales para una firma de abogados, como panel de administración, panel de asesores, gestión de clientes, programación de consultas, inicio de sesión y registro, además de una interfaz minimalista.",
    },
    {
      title: "Card Clash",
      img: "cartas.png",
      href: "https://willoandru.github.io/Cartas/",
      description1:
        "Este juego de cartas enfrenta al jugador contra un algoritmo con varios niveles de dificultad. Permite crear un mazo para competir en batallas por turnos e incluye un sistema de puntuación, todo desarrollado en el frontend.",
      description2:
        "Usando React y funciones JavaScript para los algoritmos, el juego presenta una interfaz para seleccionar cartas y elegir la dificultad. También incluye un tutorial para entender las reglas. El objetivo es derrotar al algoritmo, que controla las decisiones del mazo oponente, en la menor cantidad de turnos posible.",
    },
    {
      title: "PickMeUp",
      img: "pickmeup.png",
      href: "https://willoandru.github.io/PickMeUp/",
      description1:
        "Este proyecto fue creado con el objetivo de aprender los fundamentos de Tailwind CSS y mejorar la lógica de programación usando TypeScript. Es un simulador de juego basado en frontend inspirado en el manhwa Pick Me Up.",
      description2:
        "Más allá de sus objetivos técnicos, este proyecto se enfoca en crear una experiencia de usuario atractiva a través de interfaces dinámicas y retroalimentación visual fluida. Experimenta con diseño responsivo y componentes interactivos construidos con Tailwind CSS, con el objetivo de ofrecer una simulación visualmente atractiva e intuitiva con gacha y niveles.",
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <div className="text-center">
        <h1>Proyectos de Programación</h1>
        <h3>Por Wilson Criollo</h3>
      </div>
      <h6>
        Aquí hay algunos de los proyectos web que he construido usando React,
        Node.js, PostgreSQL, TypeScript y Tailwind CSS. Muestran mi enfoque en
        diseño limpio y funcional y mi pasión por el aprendizaje continuo en
        desarrollo web.
      </h6>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p, i) => {
          return (
            <Proyect
              key={i}
              title={p.title}
              img={p.img}
              description1={p.description1}
              description2={p.description2}
              href={p.href}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
