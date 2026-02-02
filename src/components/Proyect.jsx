import { Link } from "react-router-dom";

function Proyect(props) {
  return (
    <Link
      to={props.href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-linear-to-br from-green-400 to-blue-600 rounded-xl h-fit"
    >
      <div className="text-start bg-card rounded-xl transition-all duration-200 hover:scale-[0.97]">
        <div className="p-3 flex justify-between items-center">
          <h3>{props.title}</h3>
          <div className="flex gap-2 text-2xl">
            {props.technologies?.map(([Icon, color], i) => (
              <Icon key={i} className={color} />
            ))}
          </div>
        </div>
        <img src={props.img} />
        <div className="flex flex-col p-3 gap-3">
          <p>{props.description}</p>
          <button
            className="bg-linear-to-br from-green-400 to-blue-600 border-none px-4 py-2 rounded-xl cursor-pointer hover:opacity-85"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              window.open(props.documentation, "_blank");
            }}
          >
            <h6 className="text">Leer documentación</h6>
          </button>
        </div>
      </div>
    </Link>
  );
}

export default Proyect;
