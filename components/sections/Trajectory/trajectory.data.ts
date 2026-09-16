export type ProjectStatus =
  | "Lanzamiento"
  | "Vigente"
  | "Cierre"
  | "Liquidado";

export interface TrajectoryProject {
  name: string;
  location: string;
  period: string;
  status: ProjectStatus;
  progress: number;
  image: string;
  description: string;
}

export const trajectoryProjects: TrajectoryProject[] = [
  {
    name: "Moro 416",
    location: "Huancayo · Av. Giráldez y Ferrocarril",
    period: "2023 — 2026",
    status: "Lanzamiento",
    progress: 58,
    image: "/images/projects/moro416.webp",
    description:
      "Proyecto inmobiliario de uso mixto ubicado en una de las zonas más estratégicas de Huancayo.",
  },

  {
    name: "Las Colinas de Moro",
    location: "La Huaycha · Concepción",
    period: "2023 — 2025",
    status: "Vigente",
    progress: 60,
    image: "/images/projects/colinas-moro.webp",
    description:
      "Desarrollo de lotes orientado al crecimiento residencial y a la inversión en Concepción.",
  },

  {
    name: "Neo Emperatriz",
    location: "San Carlos · Huancayo",
    period: "2024 — 2025",
    status: "Cierre",
    progress: 62,
    image: "/images/projects/emperatriz.webp",
    description:
      "Proyecto residencial de perfil premium desarrollado dentro del crecimiento urbano de San Carlos.",
  },

  {
    name: "Origen",
    location: "El Tambo · Huancayo",
    period: "2024 — 2026",
    status: "Lanzamiento",
    progress: 46,
    image: "/images/projects/neo-origen.webp",
    description:
      "Proyecto residencial concebido para integrar arquitectura, funcionalidad y ubicación estratégica.",
  },

  {
    name: "Camino Real",
    location: "El Tambo · Huancayo",
    period: "2024 — 2026",
    status: "Vigente",
    progress: 21,
    image: "/images/projects/camino-real.webp",
    description:
      "Desarrollo residencial que integra lotes y propuestas habitacionales dentro de un entorno planificado.",
  },

  {
    name: "Zagari Resort",
    location: "San Ramón · Selva Central",
    period: "2023 — 2027",
    status: "Vigente",
    progress: 37,
    image: "/images/projects/zagari-resort.webp",
    description:
      "Una propuesta de inversión y descanso que desarrolla el concepto de Resort Club en la Selva Central.",
  },

  {
    name: "Las Terrazas de Concepción",
    location: "Concepción · Junín",
    period: "2022 — 2025",
    status: "Liquidado",
    progress: 100,
    image: "/images/projects/terrazas-concepcion.webp",
    description:
      "Proyecto de lotes desarrollado en Concepción como parte de la trayectoria inmobiliaria del grupo.",
  },
];