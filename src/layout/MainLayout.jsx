import { Link, Outlet } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

export default function MainLayout() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <div className="bg-base flex flex-col justify-center items-center w-full gap-10">
      <header className="relative bg-card flex items-center h-15 w-full px-6 font-semibold">
        <nav className="absolute left-1/2 -translate-x-1/2 flex gap-5">
          <Link>Sobre mi</Link>
          <Link>Mis proyectos</Link>
          <Link>Contacto</Link>
        </nav>

        <button
          className="ml-auto text-xl px-3 py-2 rounded-xl bg-base hover:bg-card"
          onClick={() => setDarkMode((p) => !p)}
        >
          {darkMode ? <FiSun /> : <FiMoon />}
        </button>
      </header>

      <div className="w-9/10 max-w-275">
        <Outlet />
      </div>
    </div>
  );
}
