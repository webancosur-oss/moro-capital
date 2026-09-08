"use client";

import {
  ArrowUpRight,
  MoveHorizontal,
} from "lucide-react";

import Image from "next/image";

import {
  type PointerEvent,
  useRef,
  useState,
} from "react";

import {
  PROJECTS,
} from "@/data/investors";

import Button from "../Button/Button";
import Reveal from "../Reveal";
import styles from "./TrackRecord.module.css";

type Project =
  (typeof PROJECTS)[number];

type DragState = {
  pressed: boolean;
  dragging: boolean;
  moved: boolean;
  startX: number;
  scrollLeft: number;
};

export default function TrackRecord() {
  const scrollerRef =
    useRef<HTMLDivElement | null>(null);

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

  const getProjectUrl = (
    project: Project,
  ): string => {
    const url = project.url.trim();

    if (
      url.startsWith("https://") ||
      url.startsWith("http://")
    ) {
      return url;
    }

    return `https://${url}`;
  };

  const handlePointerDown = (
    event: PointerEvent<HTMLDivElement>,
  ) => {
    if (event.pointerType === "touch") {
      return;
    }

    if (
      event.pointerType === "mouse" &&
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
      startX: event.clientX,
      scrollLeft: scroller.scrollLeft,
    };
  };

  const handlePointerMove = (
    event: PointerEvent<HTMLDivElement>,
  ) => {
    if (event.pointerType === "touch") {
      return;
    }

    if (!dragRef.current.pressed) {
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

    if (Math.abs(deltaX) < 8) {
      return;
    }

    if (!dragRef.current.dragging) {
      dragRef.current.dragging = true;
      dragRef.current.moved = true;

      setIsDragging(true);
    }

    event.preventDefault();

    scroller.scrollLeft =
      dragRef.current.scrollLeft -
      deltaX;
  };

  const handlePointerUp = (
    event: PointerEvent<HTMLDivElement>,
  ) => {
    if (event.pointerType === "touch") {
      return;
    }

    dragRef.current.pressed = false;
    dragRef.current.dragging = false;

    setIsDragging(false);
  };

  const cancelDragging = () => {
    dragRef.current.pressed = false;
    dragRef.current.dragging = false;

    setIsDragging(false);
  };

  const handleButtonPointerDown = (
    event: PointerEvent<HTMLAnchorElement>,
  ) => {
    event.stopPropagation();
  };

  return (
    <section
      id="trayectoria"
      className={styles.section}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <Reveal className={styles.headerMain}>
            <h2>
              Experiencia que
              <br />
              <span>
                se puede medir.
              </span>
            </h2>
          </Reveal>

          <Reveal
            className={styles.headerSide}
            delay={0.08}
          >
            <p>
              Proyectos inmobiliarios de
              departamentos, lotizaciones y
              resort club desarrollados dentro
              del ecosistema del grupo.
            </p>

            <div className={styles.dragHint}>
              <MoveHorizontal
                size={18}
                strokeWidth={1.5}
                aria-hidden="true"
              />

              <span className={styles.mouseHint}>
                Arrastra para explorar
              </span>

              <span className={styles.touchHint}>
                Desliza para explorar
              </span>
            </div>
          </Reveal>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className={`${styles.scroller} ${
          isDragging ? styles.isDragging : ""
        }`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={cancelDragging}
        onPointerLeave={() => {
          if (dragRef.current.dragging) {
            cancelDragging();
          }
        }}
      >
        {PROJECTS.map((project) => {
          const url =
            getProjectUrl(project);

          return (
            <Reveal
              key={project.name}
              className={styles.card}
            >
              <div className={styles.media}>
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  draggable={false}
                  loading="lazy"
                  sizes="
                    (max-width: 640px) 84vw,
                    (max-width: 960px) 70vw,
                    (max-width: 1300px) 43vw,
                    480px
                  "
                  className={styles.image}
                />

                <div
                  className={styles.shade}
                  aria-hidden="true"
                />

                <span className={styles.status}>
                  {project.stage}
                </span>

                <div className={styles.mediaTop}>
                  <span className={styles.year}>
                    {project.year}
                  </span>

                  <span
                    className={styles.iconButton}
                    aria-hidden="true"
                  >
                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.6}
                    />
                  </span>
                </div>

                <div className={styles.overlay}>
                  <h3>
                    {project.name}
                  </h3>

                  <Button
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    text="Conocer proyecto"
                    suffixIcon="arrow-up-right"
                    variant="light"
                    size="sm"
                    className={styles.projectButton}
                    ariaLabel={`Conocer proyecto ${project.name}`}
                    onPointerDown={
                      handleButtonPointerDown
                    }
                  />
                </div>
              </div>

              <div className={styles.cardBottom}>
                <div className={styles.progressHeader}>
                  <span>
                    Avance del proyecto
                  </span>

                  <strong>
                    {project.progress}
                  </strong>
                </div>

                <div
                  className={styles.progress}
                  aria-hidden="true"
                >
                  <span
                    style={{
                      width:
                        project.progress,
                    }}
                  />
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <div className={styles.container}>
        <div className={styles.footer}>
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