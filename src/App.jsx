import './App.css'
import Proyect from './Proyect'

function App() {
  const projects = [
    {
      title: "EcoMercado",
      img: "ecomercado.png",
      href: "uwu",
      description1: "Proyecto ecommerce para ofrecer productos ecológicos y sostenibles, desarrollado con MySQL, Express, React y Node.js. La página está alojada en AWS, usando S3 para archivos, EC2 para el servidor y RDS para la base de datos.",
      description2: "La plataforma incluye todas las características esenciales de un ecommerce moderno, como un panel de administración, carrito de compras, procesamiento de pagos, inicio de sesión y registro, así como una interfaz de usuario intuitiva. También implementé funcionalidades de filtrado y búsqueda, lo que facilita la navegación por categorías y productos."
    },
    {
      title: "ProLegal",
      img: "prolegal.png",
      href: "uwu",
      description1: "Proyecto conceptual para bufetes de abogados, diseñado para facilitar la venta de asesorías legales. La solución utiliza un stack tradicional basado en PHP, complementado con AWS para el alojamiento y despliegue de la página web.",
      description2: "La plataforma incluye todas las funcionalidades esenciales para un bufete de abogados, como un panel de administración, panel para lso asesores, gestión de clientes, programación de asesorías, inicio de sesión y registro, así como una interfaz minimalista."
    },
    {
      title: "Card Clash AI",
      img: "cartas.png",
      href: "uwu",
      description1: "Este juego de cartas enfrenta al jugador contra un algoritmo con varios niveles de dificultad. Permite formar un mazo de cartas para competir por turnos y cuenta con un sistema de puntos, todo desarrollado en el frontend.",
      description2: "Implementando React y funciones en JavaScript para los algoritmos, el juego cuenta con una interfaz para seleccionar cartas y elegir la dificultad. Además, incluye un tutorial para entender las reglas. El objetivo es derrotar al algoritmo, que controla las decisiones del mazo oponente, en el menor número de turnos."
    },
    {
      title: "Runestone 2D",
      img: "https://example.com/bookbarn.png",
      href: "uwu",
      description1: "Juego RPG 2D en el que el jugador debe formar un equipo de personajes, mejorarlos y superar diversos modos de juego. Al ser un juego de progreso diario, cuenta con almacenamiento en la nube, utilizando el stack MySQL, Express, React y Node.js para su desarrollo.",
      description2: "Basado en un diseño de fantasía, el juego incluye las características esenciales de un RPG moderno, como inicio de sesión y registro, ofreciendo una experiencia inmersiva y fluida para el jugador."
    }
  ];

  return (
    <div className='body'>
      <div className='titles'>
        <h1>Proyectos de programación</h1>
        <h2>Por Wilson Criollo</h2>
      </div>
      <h4>
        En esta sección, te presento algunos de los proyectos web en los que he trabajado usando React, MySQL, Node.js, Express y PHP.
        Me apasiona programar en mi tiempo libre, y estos proyectos son el resultado de esa dedicación y entusiasmo por crear soluciones digitales.
      </h4>
      <div className='proyects'>
        {projects.slice(0, 3).map((p, i) => {
          return (
            <Proyect
              key={i}
              title={p.title}
              img={p.img}
              description1={p.description1}
              description2={p.description2}
            />
          )
        })}
      </div>
    </div>
  )
}

export default App
