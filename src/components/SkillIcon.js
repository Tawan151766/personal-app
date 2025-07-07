"use client";

import { FaReact, FaNodeJs, FaPhp } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiAntdesign,
  SiTailwindcss,
  SiExpress,
  SiNestjs,
  SiMysql,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";
import { FiCode } from "react-icons/fi";

const skillIconMap = {
  React: <FaReact className="text-[#61DAFB]" />,
  "Next.js": <SiNextdotjs className="text-black" />,
  TypeScript: <SiTypescript className="text-[#3178C6]" />,
  "Ant Design": <SiAntdesign className="text-[#0170FE]" />,
  "Tailwind CSS": <SiTailwindcss className="text-[#06B6D4]" />,
  "Express.js": <SiExpress className="text-black" />,
  "Node.js": <FaNodeJs className="text-[#339933]" />,
  PHP: <FaPhp className="text-[#777BB4]" />,
  NestJS: <SiNestjs className="text-[#E0234E]" />,
  MySQL: <SiMysql className="text-[#4479A1]" />,
  PostgreSQL: <SiPostgresql className="text-[#336791]" />,
  MongoDB: <SiMongodb className="text-[#47A248]" />,
};

export default function SkillIcon({ skill }) {
  const icon = skillIconMap[skill] || <FiCode className="text-gray-600" />; // fallback to code icon

  return <div className="flex items-center justify-center text-2xl">{icon}</div>;
}
