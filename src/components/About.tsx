import { useEffect, useRef, useState } from 'react';
import './About.css';

const ABOUT_CONTENT = [
  {
    eyebrow: 'Quiénes somos',
    title: 'Servicio técnico de lavadoras y estufas en Armenia y Quindío.',
    paragraph:
      'En Mantenimientos Gonbel nos dedicamos al mantenimiento preventivo, reparación e instalación de estufas y lavadoras, atendiendo hogares, familias y pequeños negocios en todo el departamento.',
  },
  {
    eyebrow: 'Nuestra misión',
    title: 'Soluciones técnicas confiables, oportunas y de calidad.',
    paragraph:
      'Trabajamos para que cada cliente recupere el funcionamiento de sus electrodomésticos sin necesidad de reemplazarlos prematuramente, con diagnósticos precisos y técnicos capacitados.',
  },
  {
    eyebrow: 'Nuestra propuesta de valor',
    title: 'Cercanía, garantía y cobertura en todo el Quindío.',
    paragraph:
      'Atención rápida a domicilio, repuestos de calidad y garantía sobre cada servicio realizado, para devolverte la tranquilidad de contar con un equipo funcionando correctamente.',
  },
];

const STAGE_COUNT = ABOUT_CONTENT.length;
const AUTO_ADVANCE_MS = 20000;
const FADE_MS = 280;
const TRAVEL = 280;

export default function About() {
  const [stage, setStage] = useState(0);
  const [fading, setFading] = useState(false);
  const stageRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const fadeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const changeStage = (next: number) => {
    if (next === stageRef.current) return;
    setFading(true);
    if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current);
    fadeTimerRef.current = setTimeout(() => {
      stageRef.current = next;
      setStage(next);
      setFading(false);
    }, FADE_MS);
  };

  const advanceStage = () => changeStage((stageRef.current + 1) % STAGE_COUNT);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(advanceStage, AUTO_ADVANCE_MS);
  };

  const goToStage = (i: number) => {
    changeStage(i);
    resetTimer();
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const washerVisible = stage !== 1;
  const stoveVisible = stage === 1;
  const content = ABOUT_CONTENT[stage];

  return (
    <section id="quienes-somos" className="about">
      <div
        className="about__overlay about__overlay--1"
        style={{ opacity: stage === 1 ? 1 : 0 }}
      />
      <div
        className="about__overlay about__overlay--2"
        style={{ opacity: stage === 2 ? 1 : 0 }}
      />
      <div className="about__overlay about__overlay--radial" />

      <div className="about__row" style={{ flexDirection: stage === 1 ? 'row-reverse' : 'row' }}>
        <div className="about__appliance">
          <div
            className="about__appliance-layer"
            style={{
              transform: `translateX(${washerVisible ? 0 : -TRAVEL}px) rotate(${
                washerVisible ? -4 : -18
              }deg)`,
              opacity: washerVisible ? 1 : 0,
            }}
          >
            <div className="about__washer">
              <div className="about__washer-dots">
                <span className="about__dot-accent" />
                <span className="about__dot-cream" />
                <span className="about__dot-cream" />
              </div>
              <div className="about__washer-drum">
                <div className="about__washer-drum-inner">
                  <div className="about__washer-drum-core" />
                </div>
              </div>
            </div>
          </div>

          <div
            className="about__appliance-layer"
            style={{
              transform: `translateX(${stoveVisible ? 0 : TRAVEL}px) rotate(${
                stoveVisible ? 4 : 18
              }deg)`,
              opacity: stoveVisible ? 1 : 0,
            }}
          >
            <div className="about__stove">
              <div className="about__stove-burners">
                <span />
                <span />
                <span />
                <span />
              </div>
              <div className="about__stove-oven">
                <div className="about__stove-oven-door" />
              </div>
            </div>
          </div>
        </div>

        <div className="about__text-wrap">
          <div
            className="about__text"
            style={{
              opacity: fading ? 0 : 1,
              transform: fading ? 'translateY(10px)' : 'translateY(0)',
            }}
          >
            <span className="about__eyebrow">{content.eyebrow}</span>
            <h2 className="about__title">{content.title}</h2>
            <p className="about__paragraph">{content.paragraph}</p>
          </div>
        </div>
      </div>

      <div className="about__dots">
        {ABOUT_CONTENT.map((item, i) => (
          <button
            key={item.eyebrow}
            onClick={() => goToStage(i)}
            aria-label={`Ver: ${item.eyebrow.toLowerCase()}`}
            className="about__dot"
            style={{
              width: stage === i ? 28 : 8,
              opacity: stage === i ? 1 : 0.35,
            }}
          />
        ))}
      </div>
    </section>
  );
}
