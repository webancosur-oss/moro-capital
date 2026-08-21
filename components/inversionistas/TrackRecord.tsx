"use client";

import Image from "next/image";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

import {
  useCallback,
  useRef,
  useState,
} from "react";

import {
  PROJECTS,
} from "@/data/investors";

import Reveal from "./Reveal";

export default function TrackRecord() {
  const scrollerRef =
    useRef<HTMLDivElement | null>(
      null
    );

  const [
    activeIndex,
    setActiveIndex,
  ] = useState(0);

  /* ==========================================
     IR A UN PROYECTO
  ========================================== */

  const goToProject =
    useCallback(
      (index: number) => {
        const scroller =
          scrollerRef.current;

        if (!scroller) return;

        const cards =
          scroller.querySelectorAll<HTMLElement>(
            "[data-track-card]"
          );

        const card =
          cards[index];

        if (!card) return;

        const targetLeft =
          card.offsetLeft -
          scroller.offsetLeft;

        scroller.scrollTo({
          left: targetLeft,
          behavior: "smooth",
        });

        setActiveIndex(index);
      },
      []
    );

  /* ==========================================
     ANTERIOR
  ========================================== */

  const previousProject =
    useCallback(() => {
      const nextIndex =
        activeIndex === 0
          ? PROJECTS.length - 1
          : activeIndex - 1;

      goToProject(
        nextIndex
      );
    }, [
      activeIndex,
      goToProject,
    ]);

  /* ==========================================
     SIGUIENTE
  ========================================== */

  const nextProject =
    useCallback(() => {
      const nextIndex =
        activeIndex ===
        PROJECTS.length - 1
          ? 0
          : activeIndex + 1;

      goToProject(
        nextIndex
      );
    }, [
      activeIndex,
      goToProject,
    ]);

  /* ==========================================
     DETECTAR PROYECTO ACTIVO AL HACER SCROLL
  ========================================== */

  const handleScroll =
    useCallback(() => {
      const scroller =
        scrollerRef.current;

      if (!scroller) return;

      const cards =
        Array.from(
          scroller.querySelectorAll<HTMLElement>(
            "[data-track-card]"
          )
        );

      if (!cards.length) {
        return;
      }

      const scrollerRect =
        scroller.getBoundingClientRect();

      const referencePoint =
        scrollerRect.left +
        24;

      let closestIndex = 0;

      let closestDistance =
        Number.POSITIVE_INFINITY;

      cards.forEach(
        (
          card,
          index
        ) => {
          const cardRect =
            card.getBoundingClientRect();

          const distance =
            Math.abs(
              cardRect.left -
              referencePoint
            );

          if (
            distance <
            closestDistance
          ) {
            closestDistance =
              distance;

            closestIndex =
              index;
          }
        }
      );

      setActiveIndex(
        closestIndex
      );
    }, []);

  return (
    <section
      className="trackRecord"
      id="trayectoria"
    >
      {/* ======================================
          HEADER
      ======================================= */}

      <div className="investorContainer">
        <div className="trackRecordHeader">
          <Reveal className="trackRecordHeading">
            <p className="investorEyebrow">
              TRACK RECORD
            </p>

            <h2>
              Experiencia que
              <br />
              se puede medir.
            </h2>
          </Reveal>

          <Reveal
            className="trackRecordHeaderSide"
            delay={0.08}
          >
            <p>
              Proyectos inmobiliarios
              de departamentos,
              lotizaciones y resort
              club desarrollados
              dentro del ecosistema
              del grupo.
            </p>

            <div className="trackRecordNavigation">
              {/* CONTADOR */}

              <div className="trackRecordCounter">
                <strong>
                  {String(
                    activeIndex + 1
                  ).padStart(
                    2,
                    "0"
                  )}
                </strong>

                <span />

                <small>
                  {String(
                    PROJECTS.length
                  ).padStart(
                    2,
                    "0"
                  )}
                </small>
              </div>

              {/* FLECHAS */}

              <div className="trackRecordArrows">
                <button
                  type="button"
                  onClick={
                    previousProject
                  }
                  aria-label="Proyecto anterior"
                >
                  <ArrowLeft
                    size={17}
                  />
                </button>

                <button
                  type="button"
                  onClick={
                    nextProject
                  }
                  aria-label="Proyecto siguiente"
                >
                  <ArrowRight
                    size={17}
                  />
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* ======================================
          PROJECT SLIDER
      ======================================= */}

      <div
        ref={scrollerRef}
        className="trackRecordScroller"
        onScroll={
          handleScroll
        }
      >
        {PROJECTS.map(
          (
            project,
            index
          ) => {
            const isActive =
              index ===
              activeIndex;

            const href =
              project.name ===
              "Moro 416"
                ? "#moro416"
                : "#formulario";

            return (
              <article
                key={
                  project.name
                }
                data-track-card
                className={`trackRecordCard ${
                  isActive
                    ? "trackRecordCardActive"
                    : ""
                }`}
              >
                {/* ==========================
                    IMAGE
                =========================== */}

                <div className="trackRecordCardMedia">
                  <Image
                    src={
                      project.image
                    }
                    alt={
                      project.name
                    }
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 82vw, (max-width: 960px) 46vw, (max-width: 1300px) 29vw, 355px"
                    className="trackRecordCardImage"
                  />

                  <div className="trackRecordCardShade" />

                  {/* NUMBER */}

                  <span className="trackRecordCardNumber">
                    {String(
                      index + 1
                    ).padStart(
                      2,
                      "0"
                    )}
                  </span>

                  {/* LINK */}

                  <a
                    href={href}
                    className="trackRecordCardLink"
                    aria-label={`Ver ${project.name}`}
                  >
                    <ArrowUpRight
                      size={18}
                    />
                  </a>

                  {/* TEXT OVER IMAGE */}

                  <div className="trackRecordCardOverlay">
                    <div className="trackRecordCardMeta">
                      <span>
                        {
                          project.year
                        }
                      </span>

                      <span className="trackRecordCardStatus">
                        {
                          project.stage
                        }
                      </span>
                    </div>

                    <h3>
                      {
                        project.name
                      }
                    </h3>
                  </div>
                </div>

                {/* ==========================
                    CARD BOTTOM
                =========================== */}

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
              </article>
            );
          }
        )}
      </div>

      {/* ======================================
          SECTION BOTTOM
      ======================================= */}

      <div className="investorContainer">
        <div className="trackRecordFooter">
          <p>
            Información histórica
            según presentación
            corporativa. Las cifras
            deben validarse antes de
            publicación.
          </p>

          {/* DOTS */}

          <div className="trackRecordDots">
            {PROJECTS.map(
              (
                project,
                index
              ) => (
                <button
                  key={
                    project.name
                  }
                  type="button"
                  aria-label={`Ir a ${project.name}`}
                  className={
                    index ===
                    activeIndex
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    goToProject(
                      index
                    )
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