"use client";

import {
  ArrowUpRight,
  MoveHorizontal,
} from "lucide-react";

import Image from "next/image";

import {
  type MouseEvent,
  type PointerEvent,
  useRef,
  useState,
} from "react";

import {
  PROJECTS,
} from "@/data/investors";

import Reveal from "./Reveal";

/* =========================================================
   TYPES
========================================================= */

type Project =
  (typeof PROJECTS)[number];

type DragState = {
  pressed: boolean;
  dragging: boolean;
  moved: boolean;
  startX: number;
  scrollLeft: number;
};

/* =========================================================
   COMPONENT
========================================================= */

export default function TrackRecord() {
  const scrollerRef =
    useRef<HTMLDivElement | null>(
      null,
    );

  const dragRef =
    useRef<DragState>({
      pressed: false,
      dragging: false,
      moved: false,
      startX: 0,
      scrollLeft: 0,
    });

  const [
    isDragging,
    setIsDragging,
  ] = useState(false);

  /* =======================================================
     URL DEL PROYECTO

     Usa exactamente project.url de investors.ts.
     Si no tiene https:// se agrega.
  ======================================================= */

  const getProjectUrl = (
    project: Project,
  ): string => {
    const url =
      project.url.trim();

    if (
      url.startsWith(
        "https://",
      ) ||
      url.startsWith(
        "http://",
      )
    ) {
      return url;
    }

    return `https://${url}`;
  };

  /* =======================================================
     POINTER DOWN
  ======================================================= */

  const handlePointerDown = (
    event:
      PointerEvent<HTMLDivElement>,
  ) => {
    /*
     * Mobile/tablet:
     * no interferimos.
     * El navegador realiza el swipe.
     */
    if (
      event.pointerType ===
      "touch"
    ) {
      return;
    }

    /*
     * Solo clic izquierdo.
     */
    if (
      event.pointerType ===
        "mouse" &&
      event.button !== 0
    ) {
      return;
    }

    const scroller =
      scrollerRef.current;

    if (!scroller) {
      return;
    }

    dragRef.current = {
      pressed: true,
      dragging: false,
      moved: false,

      startX:
        event.clientX,

      scrollLeft:
        scroller.scrollLeft,
    };
  };

  /* =======================================================
     POINTER MOVE

     Hasta 8px sigue siendo un clic normal.
  ======================================================= */

  const handlePointerMove = (
    event:
      PointerEvent<HTMLDivElement>,
  ) => {
    if (
      event.pointerType ===
      "touch"
    ) {
      return;
    }

    if (
      !dragRef.current
        .pressed
    ) {
      return;
    }

    const scroller =
      scrollerRef.current;

    if (!scroller) {
      return;
    }

    const deltaX =
      event.clientX -
      dragRef.current.startX;

    /*
     * Todavía es un clic.
     */
    if (
      Math.abs(deltaX) <
      8
    ) {
      return;
    }

    /*
     * A partir de aquí
     * sí comienza el drag.
     */
    if (
      !dragRef.current
        .dragging
    ) {
      dragRef.current.dragging =
        true;

      dragRef.current.moved =
        true;

      setIsDragging(
        true,
      );
    }

    /*
     * Solo bloqueamos comportamiento
     * por defecto una vez iniciado
     * el arrastre.
     */
    event.preventDefault();

    scroller.scrollLeft =
      dragRef.current
        .scrollLeft -
      deltaX;
  };

  /* =======================================================
     POINTER UP
  ======================================================= */

  const handlePointerUp = (
    event:
      PointerEvent<HTMLDivElement>,
  ) => {
    if (
      event.pointerType ===
      "touch"
    ) {
      return;
    }

    dragRef.current.pressed =
      false;

    dragRef.current.dragging =
      false;

    setIsDragging(
      false,
    );
  };

  /* =======================================================
     POINTER CANCEL / LEAVE
  ======================================================= */

  const cancelDragging =
    () => {
      dragRef.current.pressed =
        false;

      dragRef.current.dragging =
        false;

      setIsDragging(
        false,
      );
    };

  /* =======================================================
     CLICK DE TARJETA

     Si solo hiciste clic:
     abre project.url.

     Si arrastraste:
     cancela únicamente ese clic.
  ======================================================= */

  const handleProjectClick = (
    event:
      MouseEvent<HTMLAnchorElement>,
  ) => {
    if (
      dragRef.current.moved
    ) {
      event.preventDefault();

      dragRef.current.moved =
        false;

      return;
    }

    /*
     * IMPORTANTE:
     * aquí NO usamos preventDefault.
     *
     * El <a href=""> navega
     * normalmente.
     */
  };

  return (
    <section
      className="trackRecord"
      id="trayectoria"
    >
      {/* ===================================================
          HEADER
      ==================================================== */}

      <div className="investorContainer">
        <div className="trackRecordHeader">
          <Reveal className="trackRecordHeading">
            <p className="investorEyebrow">
              TRACK RECORD
            </p>

            <h2>
              Experiencia que
              <br />

              <span>
                se puede medir.
              </span>
            </h2>
          </Reveal>

          <Reveal
            className="trackRecordHeaderSide"
            delay={0.08}
          >
            <p>
              Proyectos inmobiliarios de
              departamentos, lotizaciones y
              resort club desarrollados dentro
              del ecosistema del grupo.
            </p>

            <div className="trackRecordDragHint">
              <MoveHorizontal
                size={16}
                strokeWidth={1.6}
                aria-hidden="true"
              />

              <span className="trackRecordMouseHint">
                Arrastra para explorar
              </span>

              <span className="trackRecordTouchHint">
                Desliza para explorar
              </span>
            </div>
          </Reveal>
        </div>
      </div>

      {/* ===================================================
          PROJECTS
      ==================================================== */}

      <div
        ref={
          scrollerRef
        }
        className={`trackRecordScroller ${
          isDragging
            ? "isDragging"
            : ""
        }`}
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
          cancelDragging
        }
        onPointerLeave={() => {
          /*
           * Solo cancelamos si
           * realmente estaba arrastrando.
           */
          if (
            dragRef.current
              .dragging
          ) {
            cancelDragging();
          }
        }}
      >
        {PROJECTS.map(
          (project) => {
            const url =
              getProjectUrl(
                project,
              );

            return (
              <a
                key={
                  project.name
                }
                href={
                  url
                }
                target="_blank"
                rel="noopener noreferrer"
                className="trackRecordCard"
                draggable={false}
                onClick={
                  handleProjectClick
                }
                aria-label={`Ir al proyecto ${project.name}`}
              >
                {/* =============================
                    IMAGE
                ============================== */}

                <div className="trackRecordCardMedia">
                  <Image
                    src={
                      project.image
                    }
                    alt={
                      project.name
                    }
                    fill
                    draggable={false}
                    loading="lazy"
                    sizes="
                      (max-width: 640px) 84vw,
                      (max-width: 960px) 47vw,
                      (max-width: 1300px) 31vw,
                      430px
                    "
                    className="trackRecordCardImage"
                  />

                  <div
                    className="trackRecordCardShade"
                    aria-hidden="true"
                  />

                  {/* ===========================
                      STATUS
                  ============================ */}

                  <span className="trackRecordCardStatus">
                    {
                      project.stage
                    }
                  </span>

                  {/* ===========================
                      LINK
                  ============================ */}

                  <span
                    className="trackRecordCardLink"
                    aria-hidden="true"
                  >
                    <ArrowUpRight
                      size={18}
                      strokeWidth={
                        1.8
                      }
                    />
                  </span>

                  {/* ===========================
                      INFO
                  ============================ */}

                  <div className="trackRecordCardOverlay">
                    <span className="trackRecordCardYear">
                      {
                        project.year
                      }
                    </span>

                    <h3>
                      {
                        project.name
                      }
                    </h3>

                    <span className="trackRecordCardDiscover">
                      Conocer proyecto

                      <ArrowUpRight
                        size={13}
                        strokeWidth={
                          1.8
                        }
                      />
                    </span>
                  </div>
                </div>

                {/* =============================
                    PROGRESS
                ============================== */}

                <div className="trackRecordCardBottom">
                  <div className="trackRecordCardProgressInfo">
                    <span>
                      AVANCE DEL PROYECTO
                    </span>

                    <strong>
                      {
                        project.progress
                      }
                    </strong>
                  </div>

                  <div className="trackRecordCardProgress">
                    <span
                      style={{
                        width:
                          project.progress,
                      }}
                    />
                  </div>
                </div>
              </a>
            );
          },
        )}
      </div>

      {/* ===================================================
          FOOTER
      ==================================================== */}

      <div className="investorContainer">
        <div className="trackRecordFooter">
          <p>
            Información histórica según
            presentación corporativa. Las
            cifras deben validarse antes de
            publicación.
          </p>

          <span>
            {PROJECTS.length} proyectos
          </span>
        </div>
      </div>
    </section>
  );
}