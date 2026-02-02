import { NavLink, Outlet } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

export default function MainLayout() {
  const { darkMode, setDarkMode } = useTheme();

  const linkStyle = ({ isActive }) =>
    `h-full flex items-center px-5 transition-all duration-150 whitespace-nowrap
    ${isActive ? "border-b-2" : "hover:scale-105"}`;

  return (
    <div className="bg-base flex flex-col items-center w-full">
      <header className="fixed top-0 z-10 bg-card flex items-center h-15 w-full font-semibold px-2">
        <nav className="absolute md:left-1/2 md:-translate-x-1/2 flex h-full">
          <NavLink to="/Portfolio/aboutMe" className={linkStyle}>
            Sobre mi
          </NavLink>
          <NavLink to="/Portfolio/" className={linkStyle}>
            Mis proyectos
          </NavLink>
          <NavLink to="/Portfolio/contact" className={linkStyle}>
            Contacto
          </NavLink>
        </nav>

        <button
          className="ml-auto text-xl px-4 py-3 rounded-xl bg-base bg-btn"
          onClick={() => setDarkMode((p) => !p)}
        >
          {darkMode ? <FiSun /> : <FiMoon />}
        </button>
      </header>

      <div className="w-9/10 max-w-275 pt-25 pb-10">
        <Outlet />
      </div>
    </div>
  );
}
