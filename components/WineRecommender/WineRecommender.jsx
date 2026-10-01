"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";

import wines from "../../data/wines";

import "./WineRecommender.css";
import {
  steps,
  occasionOptions,
  typeOptions,
  bodyOptions,
  sweetnessOptions,
  MIN_PRICE,
  MAX_PRICE,
} from "./utils/recommenderUtils";

export default function WineRecommender() {
  const [step, setStep] = useState(0);

  const [answers, setAnswers] = useState({
    type: "",
    body: "",
    sweetness: "",
    occasion: "",
    price: 30000,
  });

  const [showResult, setShowResult] = useState(false);

  const currentStep = steps[step];

  useEffect(() => {
    if (recommenderRef.current) {
      recommenderRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [step]);

  const recommenderRef = useRef(null);

  const selectAnswer = (key, value) => {
    setAnswers((previous) => ({
      ...previous,
      [key]: value,
    }));
  };

  const nextStep = () => {
    if (step < steps.length - 1) {
      setStep((previous) => previous + 1);
      return;
    }

    setShowResult(true);
  };

  const previousStep = () => {
    if (step === 0) return;

    setStep((previous) => previous - 1);
  };

  const restart = () => {
    setStep(0);

    setAnswers({
      type: "",
      body: "",
      sweetness: "",
      occasion: "",
      price: 30000,
    });

    setShowResult(false);
  };

  const canContinue = () => {
    if (currentStep.id === "type") {
      return Boolean(answers.type);
    }

    if (currentStep.id === "body") {
      return Boolean(answers.body);
    }

    if (currentStep.id === "sweetness") {
      return Boolean(answers.sweetness);
    }

    if (currentStep.id === "occasion") {
      return Boolean(answers.occasion);
    }

    return true;
  };

  const recommendations = useMemo(() => {
    if (!showResult) return [];

    const scoredWines = wines
      .map((wine) => {
        let score = 0;

        // ==============================
        // TIPO — 20%
        // ==============================

        if (wine.type?.toLowerCase() === answers.type?.toLowerCase()) {
          score += 20;
        }

        // ==============================
        // CUERPO — 15%
        // ==============================

        const wineBody = wine.characteristics?.body?.toLowerCase();
        const userBody = answers.body?.toLowerCase();

        if (wineBody === userBody) {
          score += 15;
        } else if (
          (userBody === "intenso" && wineBody === "medio-alto") ||
          (userBody === "medio" && wineBody === "medio-alto") ||
          (userBody === "medio" && wineBody === "ligero")
        ) {
          score += 8;
        }

        // ==============================
        // DULZOR — 15%
        // ==============================

        const wineSweetness = wine.characteristics?.sweetness?.toLowerCase();

        const userSweetness = answers.sweetness?.toLowerCase();

        if (wineSweetness === userSweetness) {
          score += 15;
        }

        // ==============================
        // OCASIÓN — 20%
        // ==============================

        if (wine.occasions?.includes(answers.occasion)) {
          score += 20;
        }

        // ==============================
        // PRECIO — 30%
        // ==============================

        const priceDifference = Math.abs(wine.price - answers.price);

        const maxDifference = 30000;

        const priceScore = Math.max(
          0,
          30 - (priceDifference / maxDifference) * 30
        );

        score += priceScore;

        return {
          ...wine,
          score: Math.round(score),
        };
      })
      .sort((a, b) => b.score - a.score);

    return scoredWines.slice(0, 3);
  }, [answers, showResult]);

  const recommendedWine = recommendations[0];

  const alternatives = recommendations.slice(1);

  if (showResult && recommendedWine) {
    return (
      <section className="wine-recommender wine-recommender--result">
        <div className="wine-recommender__container">
          {/* HEADER */}

          <div className="wine-recommender__result-header">
            <p className="wine-recommender__eyebrow">Nuestra recomendación</p>

            <h2>
              Creemos que este vino
              <br />
              es para vos.
            </h2>

            <p>
              Según tus preferencias, encontramos una opción que podría
              gustarte.
            </p>
          </div>

          {/* MAIN RESULT */}

          <div className="wine-recommender__result">
            <div className="wine-recommender__result-image">
              <Image
                src={recommendedWine.image}
                alt={recommendedWine.name}
                fill
                sizes="(max-width: 700px) 100vw, 50vw"
                className="wine-recommender__result-image-img"
              />
            </div>

            <div className="wine-recommender__result-info">
              <span className="wine-recommender__result-type">
                {recommendedWine.type}
              </span>

              <div className="wine-recommender__match">
                <strong>{recommendedWine.score}%</strong>

                <span>compatibilidad con tus preferencias</span>
              </div>

              <h3>{recommendedWine.name}</h3>

              <p className="wine-recommender__result-winery">
                {recommendedWine.winery}
              </p>

              <div className="wine-recommender__result-line" />

              <p className="wine-recommender__result-description">
                {recommendedWine.description}
              </p>

              <div className="wine-recommender__result-bottom">
                <strong>
                  ${recommendedWine.price.toLocaleString("es-AR")}
                </strong>

                <Link
                  href={`/catalogo/${recommendedWine.slug}`}
                  className="wine-recommender__result-button"
                >
                  Ver vino
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M5 12H19"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />

                    <path
                      d="M13 6L19 12L13 18"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* ALTERNATIVES */}

          {alternatives.length > 0 && (
            <div className="wine-recommender__alternatives">
              <div className="wine-recommender__alternatives-header">
                <div>
                  <span>Otras opciones</span>

                  <h3>También podrías probar</h3>
                </div>
              </div>

              <div className="wine-recommender__alternatives-grid">
                {alternatives.map((wine) => (
                  <Link
                    key={wine.id}
                    href={`/catalogo/${wine.slug}`}
                    className="wine-recommender__alternative"
                  >
                    <div className="wine-recommender__alternative-image">
                      <Image
                        src={wine.image}
                        alt={wine.name}
                        fill
                        sizes="100px"
                        className="wine-recommender__alternative-image-img"
                      />
                    </div>

                    <div>
                      <span>{wine.type}</span>

                      <h4>{wine.name}</h4>

                      <p>{wine.winery}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* RESTART */}

          <button
            type="button"
            className="wine-recommender__restart"
            onClick={restart}
          >
            Volver a empezar
          </button>
        </div>
      </section>
    );
  }

  return (
    <section ref={recommenderRef} className="wine-recommender">
      <div className="wine-recommender__container">
        {/* INTRO */}

        {step === 0 && (
          <div className="wine-recommender__intro">
            <p className="wine-recommender__eyebrow">Encontrá tu vino</p>

            <h2>No sabés qué vino elegir?</h2>

            <p>
              Respondé unas preguntas y te ayudamos a encontrar una opción que
              se adapte a tus gustos.
            </p>
          </div>
        )}

        {/* PROGRESS */}

        <div className="wine-recommender__progress">
          <div className="wine-recommender__progress-info">
            <span>0{step + 1}</span>

            <span>0{steps.length}</span>
          </div>

          <div className="wine-recommender__progress-bar">
            <div
              style={{
                width: `${((step + 1) / steps.length) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* QUESTION */}

        <div className="wine-recommender__question">
          <div className="wine-recommender__question-header">
            <p>
              {currentStep.id === "price"
                ? "Presupuesto"
                : `Pregunta ${step + 1}`}
            </p>

            <h3>{currentStep.title}</h3>

            <span>{currentStep.description}</span>
          </div>

          {/* TYPE */}

          {currentStep.id === "type" && (
            <div className="wine-recommender__options">
              {typeOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`wine-recommender__option ${
                    answers.type === option.value
                      ? "wine-recommender__option--active"
                      : ""
                  }`}
                  onClick={() => selectAnswer("type", option.value)}
                >
                  <span className="wine-recommender__option-marker">
                    <span />
                  </span>

                  <span>
                    <strong>{option.label}</strong>

                    <small>{option.description}</small>
                  </span>

                  <span className="wine-recommender__option-check">✓</span>
                </button>
              ))}
            </div>
          )}

          {/* BODY */}

          {currentStep.id === "body" && (
            <div className="wine-recommender__options wine-recommender__options--three">
              {bodyOptions.map((option, index) => (
                <button
                  key={option.value}
                  type="button"
                  className={`wine-recommender__option ${
                    answers.body === option.value
                      ? "wine-recommender__option--active"
                      : ""
                  }`}
                  onClick={() => selectAnswer("body", option.value)}
                >
                  <span className="wine-recommender__option-marker">
                    <span />
                  </span>

                  <span>
                    <strong>{option.label}</strong>

                    <small>{option.description}</small>
                  </span>

                  <span className="wine-recommender__option-check">✓</span>
                </button>
              ))}
            </div>
          )}

          {/* SWEETNESS */}

          {currentStep.id === "sweetness" && (
            <div className="wine-recommender__options wine-recommender__options--three">
              {sweetnessOptions.map((option, index) => (
                <button
                  key={option.value}
                  type="button"
                  className={`wine-recommender__option ${
                    answers.sweetness === option.value
                      ? "wine-recommender__option--active"
                      : ""
                  }`}
                  onClick={() => selectAnswer("sweetness", option.value)}
                >
                  <span className="wine-recommender__option-marker">
                    <span />
                  </span>

                  <span>
                    <strong>{option.label}</strong>

                    <small>{option.description}</small>
                  </span>

                  <span className="wine-recommender__option-check">✓</span>
                </button>
              ))}
            </div>
          )}

          {/* OCCASION */}

          {currentStep.id === "occasion" && (
            <div className="wine-recommender__options">
              {occasionOptions.map((option, index) => (
                <button
                  key={option.value}
                  type="button"
                  className={`wine-recommender__option ${
                    answers.occasion === option.value
                      ? "wine-recommender__option--active"
                      : ""
                  }`}
                  onClick={() => selectAnswer("occasion", option.value)}
                >
                  <span className="wine-recommender__option-marker">
                    <span />
                  </span>

                  <span>
                    <strong>{option.label}</strong>
                    <small>{option.description}</small>
                  </span>

                  <span className="wine-recommender__option-check">✓</span>
                </button>
              ))}
            </div>
          )}

          {/* PRICE */}

          {currentStep.id === "price" && (
            <div className="wine-recommender__price">
              <div className="wine-recommender__price-value">
                ${Number(answers.price).toLocaleString("es-AR")}
              </div>

              <input
                type="range"
                min={MIN_PRICE}
                max={MAX_PRICE}
                step="1000"
                value={answers.price}
                onChange={(event) =>
                  selectAnswer("price", Number(event.target.value))
                }
              />

              <div className="wine-recommender__price-range">
                <span>${MIN_PRICE.toLocaleString("es-AR")}</span>

                <span>${MAX_PRICE.toLocaleString("es-AR")}</span>
              </div>
            </div>
          )}
        </div>

        {/* NAVIGATION */}

        <div className="wine-recommender__navigation">
          <button
            type="button"
            className="wine-recommender__back"
            onClick={previousStep}
            disabled={step === 0}
          >
            ← Volver
          </button>

          <button
            type="button"
            className="wine-recommender__next"
            onClick={nextStep}
            disabled={!canContinue()}
          >
            {step === steps.length - 1 ? "Encontrar mi vino" : "Continuar"}

            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M5 12H19"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />

              <path
                d="M13 6L19 12L13 18"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
