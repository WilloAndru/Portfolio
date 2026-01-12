import "./App.css";
import Proyect from "./Proyect";

function App() {
  const projects = [
    {
      title: "EcoMercado",
      img: "ecomercado.png",
      href: "https://eco-mercado.vercel.app/",
      description1:
        "E-commerce project offering eco-friendly and sustainable products, developed with PostgreSQL, Express, React, and Node.js. The platform is deployed using Vercel for the frontend and backend, and Railway for the database and services.",
      description2:
        "The platform includes all the essential features of a modern e-commerce site, such as an admin panel, shopping cart, payment processing, login and registration, as well as an intuitive user interface. I also implemented filtering and search functionality to make browsing through categories and products easier.",
    },
    {
      title: "HappyPaws",
      img: "happypaws.png",
      href: "https://happy-paws-sr4m.vercel.app/",
      description1:
        "This project works as a complete online pet shop platform. Its purpose is to allow users to explore products, manage a shopping cart, and authenticate securely. The frontend is built with Next.js and integrates Firebase authentication services.",
      description2:
        "This project functions as a full-stack e-commerce system for pet products. It helps users browse items with pagination, save favorites, and complete purchases using Stripe payments. The backend uses PostgreSQL with Prisma to manage data efficiently, while Firebase handles user authentication and security.",
    },
    {
      title: "ControlCash",
      img: "controlcash.png",
      href: "https://control-cash-lrc4-ol7as3gdn.vercel.app/",
      description1:
        "This project functions as a financial projection calculator. Its goal is to allow users to estimate how long it would take to purchase a property based on their monthly savings. Build with React.ts, Node.js and PostgreSQL",
      description2:
        "This project serves as a personal finance tracker and projection tool. Its purpose is to help users manage their monthly income and expenses while visualizing how their savings evolve over time. By analyzing spending patterns, the system provides insights and projections that guide users toward achieving financial goals.",
    },
    {
      title: "ProLegal",
      img: "prolegal.png",
      href: "https://willoandru.github.io/ProLegal/",
      description1:
        "Conceptual project for law firms designed to facilitate the sale of legal consultations. The solution uses a traditional PHP-based stack. Only the client-side is shown here to avoid overloading cloud resources.",
      description2:
        "The platform includes all the essential functionalities for a law firm, such as an admin panel, advisor panel, client management, scheduling consultations, login and registration, as well as a minimalist interface.",
    },
    {
      title: "Card Clash",
      img: "cartas.png",
      href: "https://willoandru.github.io/Cartas/",
      description1:
        "This card game pits the player against an algorithm with various difficulty levels. It allows creating a deck to compete in turn-based battles and includes a scoring system, all developed on the frontend.",
      description2:
        "Using React and JavaScript functions for the algorithms, the game features an interface to select cards and choose the difficulty. It also includes a tutorial to understand the rules. The goal is to defeat the algorithm, which controls the opposing deck's decisions, in the fewest turns possible.",
    },
    {
      title: "PickMeUp",
      img: "pickmeup.png",
      href: "https://willoandru.github.io/PickMeUp/",
      description1:
        "This project was created with the goal of learning the fundamentals of Tailwind CSS and improving programming logic using TypeScript. It is a frontend-based game simulator inspired by the manhwa Pick Me Up.",
      description2:
        "Beyond its technical goals, this project focuses on creating an engaging user experience through dynamic interfaces and smooth visual feedback. It experiments with responsive design and interactive components built with Tailwind CSS, aiming to deliver a visually appealing and intuitive simulation with gacha and levels.",
    },
  ];

  return (
    <div className="body">
      <div className="titles">
        <h1>Programming Projects</h1>
        <h2>By Wilson Criollo</h2>
      </div>
      <h4>
        Here are some of the web projects I’ve built using React, Node.js,
        MySQL, TypeScript, and Tailwind CSS. They showcase my focus on clean,
        functional design and my passion for continuous learning in web
        development.
      </h4>
      <div className="proyects">
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

export default App;
