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
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1800&q=85",
    description:
      "Proyecto inmobiliario de uso mixto ubicado en una de las zonas más estratégicas de Huancayo.",
  },
  {
    name: "Las Colinas de Moro",
    location: "La Huaycha · Concepción",
    period: "2023 — 2025",
    status: "Vigente",
    progress: 60,
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=85",
    description:
      "Desarrollo de lotes orientado al crecimiento residencial y a la inversión en Concepción.",
  },
  {
    name: "Neo Emperatriz",
    location: "San Carlos · Huancayo",
    period: "2024 — 2025",
    status: "Cierre",
    progress: 62,
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85",
    description:
      "Proyecto residencial de perfil premium desarrollado dentro del crecimiento urbano de San Carlos.",
  },
  {
    name: "Origen",
    location: "El Tambo · Huancayo",
    period: "2024 — 2026",
    status: "Lanzamiento",
    progress: 46,
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=85",
    description:
      "Proyecto residencial concebido para integrar arquitectura, funcionalidad y ubicación estratégica.",
  },
  {
    name: "Camino Real",
    location: "El Tambo · Huancayo",
    period: "2024 — 2026",
    status: "Vigente",
    progress: 21,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85",
    description:
      "Desarrollo residencial que integra lotes y propuestas habitacionales dentro de un entorno planificado.",
  },
  {
    name: "Zagari Resort",
    location: "San Ramón · Selva Central",
    period: "2023 — 2027",
    status: "Vigente",
    progress: 37,
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1800&q=85",
    description:
      "Una propuesta de inversión y descanso que desarrolla el concepto de Resort Club en la Selva Central.",
  },
  {
    name: "Las Terrazas de Concepción",
    location: "Concepción · Junín",
    period: "2022 — 2025",
    status: "Liquidado",
    progress: 100,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1800&q=85",
    description:
      "Proyecto de lotes desarrollado en Concepción como parte de la trayectoria inmobiliaria del grupo.",
  },
];