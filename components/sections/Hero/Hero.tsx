"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import Container from "@/components/layout/Container/Container";
import ScrollIndicator from "@/components/ui/ScrollIndicator/ScrollIndicator";

import styles from "./Hero.module.css";
import Reveal from "@/components/ui/Reveal/Reveal";

interface HeroSlide {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
}

const slides: HeroSlide[] = [
  {
    id: 1,
    title: "EXPERIENCIA",
    description:
      "Más de 10 años de experiencia desarrollando y ejecutando proyectos inmobiliarios.",
    image: "/images/hero/hero-experiencia.jpg",
    alt: "Desarrollo inmobiliario Moro Capital",
  },
  {
    id: 2,
    title: "RESPALDO",
    description:
      "El respaldo de un grupo económico con experiencia inmobiliaria, proyectos en ejecución y propiedades en garantía.",
    image: "/images/hero/hero-respaldo.jpg",
    alt: "Respaldo del grupo Moro Capital",
  },
  {
    id: 3,
    title: "GESTIÓN",
    description:
      "Gestión financiera transparente y eficiente orientada a generar oportunidades de inversión en el sector inmobiliario.",
    image: "/images/hero/hero-gestion.jpg",
    alt: "Gestión financiera y desarrollo inmobiliario",
  },
  {
    id: 4,
    title: "OPORTUNIDAD",
    description:
      "Participa en el desarrollo de proyectos inmobiliarios a través de una alternativa de inversión de renta fija.",
    image: "/images/hero/hero-oportunidad.jpg",
    alt: "Oportunidad de inversión inmobiliaria",
  },
];

const SLIDE_DURATION = 7000;
const DRAG_THRESHOLD = 70;

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const dragStartX = useRef<number | null>(null);
  const dragCurrentX = useRef<number | null>(null);
  const isDragging = useRef(false);

  /*
   * ========================================================
   * AUTOPLAY
   * ========================================================
   */

  useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(() => {
      setActiveSlide((current) =>
        current === slides.length - 1
          ? 0
          : current + 1
      );
    }, SLIDE_DURATION);

    return () => {
      window.clearInterval(interval);
    };
  }, [isPaused]);

  /*
   * ========================================================
   * NEXT / PREVIOUS
   * ========================================================
   */

  const goToNext = () => {
    setActiveSlide((current) =>
      current === slides.length - 1
        ? 0
        : current + 1
    );
  };

  const goToPrevious = () => {
    setActiveSlide((current) =>
      current === 0
        ? slides.length - 1
        : current - 1
    );
  };

  /*
   * ========================================================
   * DRAG START
   * ========================================================
   */

  const handlePointerDown = (
    event: React.PointerEvent<HTMLElement>
  ) => {
    dragStartX.current = event.clientX;
    dragCurrentX.current = event.clientX;

    isDragging.current = true;

    event.currentTarget.setPointerCapture(
      event.pointerId
    );
  };

  /*
   * ========================================================
   * DRAG MOVE
   * ========================================================
   */

  const handlePointerMove = (
    event: React.PointerEvent<HTMLElement>
  ) => {
    if (!isDragging.current) return;

    dragCurrentX.current = event.clientX;
  };

  /*
   * ========================================================
   * DRAG END
   * ========================================================
   */

  const handlePointerUp = (
    event: React.PointerEvent<HTMLElement>
  ) => {
    if (!isDragging.current) return;

    const startX = dragStartX.current;
    const currentX = dragCurrentX.current;

    if (
      startX === null ||
      currentX === null
    ) {
      resetDrag();
      return;
    }

    const difference = currentX - startX;

    if (
      Math.abs(difference) >=
      DRAG_THRESHOLD
    ) {
      if (difference < 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }

    resetDrag();

    if (
      event.currentTarget.hasPointerCapture(
        event.pointerId
      )
    ) {
      event.currentTarget.releasePointerCapture(
        event.pointerId
      );
    }
  };

  /*
   * ========================================================
   * DRAG CANCEL
   * ========================================================
   */

  const handlePointerCancel = () => {
    resetDrag();
  };

  const resetDrag = () => {
    dragStartX.current = null;
    dragCurrentX.current = null;
    isDragging.current = false;
  };

  const currentSlide = slides[activeSlide];

  return (
    <section
      id="inicio"
      className={styles.hero}
      aria-label="Moro Capital"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
    >

      {/* ==================================================
          BACKGROUND
      ================================================== */}

      <div className={styles.slides}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${styles.slide} ${
              index === activeSlide
                ? styles.slideActive
                : ""
            }`}
            aria-hidden={
              index !== activeSlide
            }
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              draggable={false}
              className={styles.backgroundImage}
            />
          </div>
        ))}
      </div>


      {/* ==================================================
          OVERLAY
      ================================================== */}

      <div className={styles.overlay} />


      {/* ==================================================
          CONTENT
      ================================================== */}

      <Container className={styles.container}>
        <div className={styles.content}>

          <Reveal key={currentSlide.id}>

            <div className={styles.titleWrapper}>

              <span
                className={styles.titleLine}
                aria-hidden="true"
              />

              <h1 className={styles.title}>
                {currentSlide.title}
              </h1>

            </div>

            <p className={styles.description}>
              {currentSlide.description}
            </p>

          </Reveal>

        </div>
      </Container>


      {/* ==================================================
          SCROLL INDICATOR
      ================================================== */}

      <ScrollIndicator targetId="nosotros" />

    </section>
  );
}