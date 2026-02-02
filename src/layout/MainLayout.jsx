import { Link, Outlet } from "react-router-dom";
import { MdOutlineDarkMode } from "react-icons/md";

export default function MainLayout() {
  return (
    <div className="bg-gray-900 flex flex-col justify-center items-center w-full gap-10">
      <header className="relative bg-gray-800 flex items-center h-15 w-full px-6 font-semibold">
        <nav className="absolute left-1/2 -translate-x-1/2 flex gap-5">
          <Link>Sobre mi</Link>
          <Link>Mis proyectos</Link>
          <Link>Contacto</Link>
        </nav>

        <button className="ml-auto text-xl">
          <MdOutlineDarkMode />
        </button>
      </header>

      <div className="w-9/10 max-w-275">
        <Outlet />
      </div>
    </div>
  );
}
