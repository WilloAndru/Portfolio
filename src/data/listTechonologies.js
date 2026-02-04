import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";

export const listTechnologies = {
  HTML: [FaHtml5, "fill-orange-500"],
  CSS: [FaCss3Alt, "fill-blue-500"],
  javaScript: [FaJs, "fill-yellow-400"],
  tailwind: [RiTailwindCssFill, "fill-cyan-500"],
  react: [FaReact, "fill-cyan-500"],
  nextjs: [RiNextjsFill, "fill-white"],
  typeScript: [BiLogoTypescript, "fill-blue-500"],
  nodejs: [FaNodeJs, "fill-green-500"],
  postgreSQL: [BiLogoPostgresql, "fill-indigo-400"],
};
