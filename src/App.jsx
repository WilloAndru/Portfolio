import "./App.css";
import Proyect from "./Proyect";

function App() {
  const projects = [
    {
      title: "EcoMercado - (Wait 30s to connect)",
      img: "ecomercado.png",
      href: "https://eco-mercado.vercel.app/",
      description1:
        "E-commerce project offering eco-friendly and sustainable products, developed with MySQL, Express, React, and Node.js. The platform is deployed using Vercel for the frontend, Render for the backend, and Railway for the database and services.",
      description2:
        "The platform includes all the essential features of a modern e-commerce site, such as an admin panel, shopping cart, payment processing, login and registration, as well as an intuitive user interface. I also implemented filtering and search functionality to make browsing through categories and products easier.",
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
  ];

  return (
    <div className="body">
      <div className="titles">
        <h1>Programming Projects</h1>
        <h2>By Wilson Criollo</h2>
      </div>
      <h4>
        In this section, I present some of the web projects I have worked on
        using React, MySQL, Node.js, Express, and PHP. I am passionate about
        coding in my free time, and these projects are the result of that
        dedication and enthusiasm for creating digital solutions.
      </h4>
      <div className="proyects">
        {projects.slice(0, 3).map((p, i) => {
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
