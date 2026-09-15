import { useEffect, useRef, useState } from 'react';
import './Gallery.css';

const IMAGE_COUNT = 9;
const AUTO_ADVANCE_MS = 6000;

function normalize(i: number, n: number) {
  return ((i % n) + n) % n;
}

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((i) => normalize(i + 1, IMAGE_COUNT));
    }, AUTO_ADVANCE_MS);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goTo = (i: number) => {
    setActiveIndex(normalize(i, IMAGE_COUNT));
    resetTimer();
  };

  const next = () => goTo(activeIndex + 1);
  const prev = () => goTo(activeIndex - 1);

  const IMAGE_ALT_TEXT = [
    'Lavadora y secadora tipo torre instaladas, listas para mantenimiento en Quindío',
    'Técnico de Mantenimientos Gonbel revisando el ducto de secado en mantenimiento de lavadora',
    'Diagnóstico interno del tambor y motor durante mantenimiento de lavadora',
    'Revisión del sistema de secado y ventilador en mantenimiento de lavadora',
    'Lavadora abierta durante reparación y mantenimiento preventivo en Armenia',
    'Técnico ajustando el agitador durante el mantenimiento de la lavadora',
    'Limpieza y revisión de la tina interna en mantenimiento de lavadora',
    'Técnico instalando conexión eléctrica y ducto de secado de lavadora',
    'Instalación de ducto de ventilación para lavadora en Quindío',
  ];

  const items = Array.from({ length: IMAGE_COUNT }, (_, i) => {
    let offset = i - activeIndex;
    if (offset > IMAGE_COUNT / 2) offset -= IMAGE_COUNT;
    if (offset < -IMAGE_COUNT / 2) offset += IMAGE_COUNT;
    const abs = Math.abs(offset);
    const scale = offset === 0 ? 1 : 1 - abs * 0.18;
    const x = offset * 190;
    const opacity = abs >= 3 ? 0 : 1 - abs * 0.32;
    return {
      key: i,
      src: `/uploads/mantenimiento${i + 1}.jpg`,
      alt: IMAGE_ALT_TEXT[i],
      transform: `translateX(${x}px) scale(${scale})`,
      opacity,
      z: 10 - abs,
    };
  });

  return (
    <section id="galeria" className="gallery">
      <div className="gallery__heading">
        <span className="gallery__eyebrow">Nuestro proceso</span>
        <h2 className="gallery__title">Así se ve un mantenimiento, paso a paso.</h2>
      </div>

      <div className="gallery__stage">
        <button onClick={prev} aria-label="Anterior" className="gallery__arrow gallery__arrow--prev">
          ‹
        </button>

        {items.map((item) => (
          <div
            key={item.key}
            className="gallery__slide"
            style={{ transform: item.transform, opacity: item.opacity, zIndex: item.z }}
          >
            <img
              src={item.src}
              alt={item.alt}
              width={280}
              height={380}
              loading="lazy"
              decoding="async"
              className="gallery__image"
            />
          </div>
        ))}

        <button onClick={next} aria-label="Siguiente" className="gallery__arrow gallery__arrow--next">
          ›
        </button>
      </div>

      <div className="gallery__dots">
        {Array.from({ length: IMAGE_COUNT }, (_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label="Ir a la imagen"
            className="gallery__dot"
            style={{
              width: i === activeIndex ? 26 : 8,
              opacity: i === activeIndex ? 1 : 0.35,
            }}
          />
        ))}
      </div>
    </section>
  );
}
