"use client";

import Image from "next/image";
import {
  Building2,
  ChartNoAxesCombined,
  Landmark,
} from "lucide-react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent,
} from "react";

import Reveal from "../Reveal";
import styles from "./InvestmentProof.module.css";

type ProjectId =
  | "sanCarlos"
  | "moro416"
  | "eterna"
  | "rivera";

type Project = {
  id: ProjectId;
  name: string;
  location: string;
  image: string;
};

const AUTOPLAY_INTERVAL = 3000;

const projects: Project[] = [
  {
    id: "sanCarlos",
    name: "DISTRITO SAN CARLOS",
    location: "SAN CARLOS",
    image:
      "/assets/inversionistas/projects/distrito_sancarlos_tower.webp",
  },
  {
    id: "moro416",
    name: "MORO 416",
    location: "HUANCAYO",
    image:
      "/assets/inversionistas/projects/moro416_tower.webp",
  },
  {
    id: "eterna",
    name: "NEO ETERNA",
    location: "SAN ANTONIO",
    image:
      "/assets/inversionistas/projects/neo_eterna_tower.webp",
  },
  {
    id: "rivera",
    name: "NEO RIVERA",
    location: "LA RIBERA",
    image:
      "/assets/inversionistas/projects/neo_rivera_tower.webp",
  },
];

export default function InvestmentProof() {
  /*
   * MORO 416 inicia siempre como proyecto principal.
   */
  const [activeProject, setActiveProject] =
    useState<ProjectId>("moro416");

  const [isDragging, setIsDragging] =
    useState(false);

  const [isHovered, setIsHovered] =
    useState(false);

  const dragStartX = useRef<number | null>(null);
  const dragCurrentX = useRef<number | null>(null);
  const suppressClick = useRef(false);

  const activeIndex = projects.findIndex(
    (project) =>
      project.id === activeProject
  );

  const selectedProject =
    projects[activeIndex];

  /*
   * ========================================================
   * CAMBIO DE PROYECTO
   * ========================================================
   */

  const goToProject = useCallback(
    (index: number) => {
      const normalized =
        (index + projects.length) %
        projects.length;

      setActiveProject(
        projects[normalized].id
      );
    },
    []
  );

  const goNext = useCallback(() => {
    goToProject(activeIndex + 1);
  }, [activeIndex, goToProject]);

  const goPrevious = useCallback(() => {
    goToProject(activeIndex - 1);
  }, [activeIndex, goToProject]);

  /*
   * ========================================================
   * TECLADO
   * ========================================================
   */

  useEffect(() => {
    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.key === "ArrowRight") {
        goNext();
      }

      if (event.key === "ArrowLeft") {
        goPrevious();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [goNext, goPrevious]);

  /*
   * ========================================================
   * AUTOPLAY
   * ========================================================
   */

  useEffect(() => {
    if (isHovered || isDragging) {
      return;
    }

    const intervalId = window.setInterval(() => {
      goNext();
    }, AUTOPLAY_INTERVAL);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [goNext, isDragging, isHovered]);

  /*
   * ========================================================
   * SWIPE / DRAG
   * ========================================================
   */

  const handlePointerDown = (
    event: PointerEvent<HTMLButtonElement>
  ) => {
    dragStartX.current = event.clientX;
    dragCurrentX.current = event.clientX;

    setIsDragging(true);

    event.currentTarget.setPointerCapture?.(
      event.pointerId
    );
  };

  const handlePointerMove = (
    event: PointerEvent<HTMLButtonElement>
  ) => {
    if (dragStartX.current === null) {
      return;
    }

    dragCurrentX.current =
      event.clientX;
  };

  const handlePointerUp = (
    event: PointerEvent<HTMLButtonElement>
  ) => {
    if (dragStartX.current === null) {
      return;
    }

    const start = dragStartX.current;
    const current =
      dragCurrentX.current ?? start;

    const distance = current - start;

    const threshold =
      window.innerWidth <= 768
        ? 42
        : 65;

    dragStartX.current = null;
    dragCurrentX.current = null;

    setIsDragging(false);

    if (Math.abs(distance) >= threshold) {
      suppressClick.current = true;

      if (distance < 0) {
        goNext();
      } else {
        goPrevious();
      }

      window.setTimeout(() => {
        suppressClick.current = false;
      }, 140);

      return;
    }

    event.currentTarget.releasePointerCapture?.(
      event.pointerId
    );
  };

  const handlePointerCancel = () => {
    dragStartX.current = null;
    dragCurrentX.current = null;
    setIsDragging(false);
  };

  /*
   * ========================================================
   * POSICIÓN DEL SLIDER
   * ========================================================
   */

  const getRelativePosition = (
    index: number
  ) => {
    let position =
      index - activeIndex;

    const total = projects.length;

    if (position > total / 2) {
      position -= total;
    }

    if (position < -total / 2) {
      position += total;
    }

    return position;
  };

  return (
    <section
      id="oportunidad"
      className={styles.investorProof}
      aria-label="Oportunidad de inversión inmobiliaria"
    >

      <div
        className={
          styles.investorProofGrid
        }
      >

        {/* ==================================================
            TEXTO
        ================================================== */}

        <Reveal
          className={
            styles.investorProofContent
          }
        >
          <div
            className={
              styles.contentInner
            }
          >
            <h2
              className={
                styles.investorProofTitle
              }
            >
              Invierte en
              <br />
              proyectos
              <br />
              reales.
            </h2>

            <p
              className={
                styles.investorLead
              }
            >
              Una oportunidad para participar
              en el desarrollo de activos
              inmobiliarios respaldados por
              proyectos, ejecución y una
              estrategia orientada a la
              generación de valor.
            </p>

            <div
              className={
                styles.investorProofItems
              }
            >

              <div
                className={
                  styles.investorProofItem
                }
              >
                <div
                  className={
                    styles.investorProofItemIcon
                  }
                >
                  <Building2
                    size={20}
                    strokeWidth={1.35}
                    aria-hidden="true"
                  />
                </div>

                <div
                  className={
                    styles.investorProofItemText
                  }
                >
                  <span>
                    Activos inmobiliarios
                  </span>

                  <small>
                    Proyectos tangibles
                  </small>
                </div>
              </div>

              <div
                className={
                  styles.investorProofItem
                }
              >
                <div
                  className={
                    styles.investorProofItemIcon
                  }
                >
                  <Landmark
                    size={20}
                    strokeWidth={1.35}
                    aria-hidden="true"
                  />
                </div>

                <div
                  className={
                    styles.investorProofItemText
                  }
                >
                  <span>
                    Desarrollo de proyectos
                  </span>

                  <small>
                    Ejecución y crecimiento
                  </small>
                </div>
              </div>

              <div
                className={
                  styles.investorProofItem
                }
              >
                <div
                  className={
                    styles.investorProofItemIcon
                  }
                >
                  <ChartNoAxesCombined
                    size={20}
                    strokeWidth={1.35}
                    aria-hidden="true"
                  />
                </div>

                <div
                  className={
                    styles.investorProofItemText
                  }
                >
                  <span>
                    Gestión y estrategia
                  </span>

                  <small>
                    Visión orientada a valor
                  </small>
                </div>
              </div>

            </div>

            <div
              className={
                styles.futureStatement
              }
            >
              CAPITAL QUE CONSTRUYE FUTURO
            </div>

          </div>
        </Reveal>


        {/* ==================================================
            PORTAFOLIO
        ================================================== */}

        <div
          className={
            styles.investorProofVisual
          }
        >

          <div
            className={styles.sceneGlow}
            aria-hidden="true"
          />

          <div
            className={styles.sceneOrbit}
            aria-hidden="true"
          />

          <div
            className={styles.sceneGrid}
            aria-hidden="true"
          />


          {/* ==================================================
              SLIDER
          ================================================== */}

          <div
            className={`
              ${styles.projectScene}
              ${
                isDragging
                  ? styles.projectSceneDragging
                  : ""
              }
            `}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >

            {projects.map(
              (project, index) => {
                const position =
                  getRelativePosition(index);

                const isActive =
                  position === 0;

                const isSide =
                  Math.abs(position) === 1;

                const isFar =
                  Math.abs(position) === 2;

                return (
                  <article
                    key={project.id}
                    className={`
                      ${styles.project}
                      ${
                        isActive
                          ? styles.projectActive
                          : styles.projectInactive
                      }
                      ${
                        isSide
                          ? styles.projectSide
                          : ""
                      }
                      ${
                        isFar
                          ? styles.projectFar
                          : ""
                      }
                    `}
                    style={
                      {
                        "--project-position":
                          position,
                      } as CSSProperties
                    }
                  >

                    <button
                      type="button"
                      className={
                        styles.projectButton
                      }
                      onPointerDown={
                        handlePointerDown
                      }
                      onPointerMove={
                        handlePointerMove
                      }
                      onPointerUp={
                        handlePointerUp
                      }
                      onPointerCancel={
                        handlePointerCancel
                      }
                      onClick={() => {
                        if (
                          suppressClick.current
                        ) {
                          return;
                        }

                        goToProject(index);
                      }}
                      aria-label={`Seleccionar ${project.name}`}
                      aria-pressed={
                        isActive
                      }
                    >

                      <div
                        className={
                          styles.projectImage
                        }
                      >

                        {isActive ? (
                          <Reveal
                            key={`reveal-${project.id}`}
                            className={
                              styles.projectReveal
                            }
                          >
                            <Image
                              src={
                                project.image
                              }
                              alt={
                                project.name
                              }
                              fill
                              priority={
                                project.id ===
                                "moro416"
                              }
                              sizes="
                                (max-width: 640px) 80vw,
                                (max-width: 960px) 58vw,
                                46vw
                              "
                              draggable={false}
                            />
                          </Reveal>
                        ) : (
                          <Image
                            src={
                              project.image
                            }
                            alt=""
                            fill
                            sizes="
                              (max-width: 640px) 30vw,
                              (max-width: 960px) 25vw,
                              20vw
                            "
                            draggable={false}
                          />
                        )}

                      </div>

                    </button>


                    {/* ==================================================
                        NOMBRE VERTICAL
                    ================================================== */}

                   {isActive && (
                      <div
                        key={`name-${project.id}`}
                        className={styles.verticalProjectName}
                      >
                        <span
                          className={styles.verticalProjectTitle}
                        >
                          {project.name}
                        </span>

                        <span
                          className={styles.verticalProjectLocation}
                        >
                          {project.location}
                        </span>
                      </div>
                    )}

                  </article>
                );
              }
            )}

          </div>


          {/* ==================================================
              DOTS
          ================================================== */}

          <div
            className={
              styles.sliderDots
            }
          >
            {projects.map(
              (project, index) => (
                <button
                  key={project.id}
                  type="button"
                  className={`
                    ${styles.sliderDot}
                    ${
                      index ===
                      activeIndex
                        ? styles.sliderDotActive
                        : ""
                    }
                  `}
                  onClick={() =>
                    goToProject(index)
                  }
                  aria-label={`Mostrar ${project.name}`}
                  aria-pressed={
                    index ===
                    activeIndex
                  }
                />
              )
            )}
          </div>

        </div>

      </div>
    </section>
  );
}