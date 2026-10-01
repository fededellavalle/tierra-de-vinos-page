import Link from "next/link";
import "./RecommenderCTA.css";

export default function RecommenderCTA() {
  return (
    <section className="recommender-cta">
      <div className="recommender-cta__background"></div>

      <div className="recommender-cta__container">
        {/* LEFT */}
        <div className="recommender-cta__content">
          <p className="recommender-cta__eyebrow">Encontrá tu vino</p>

          <h2 className="recommender-cta__title">
            ¿No sabés
            <br />
            qué vino elegir?
          </h2>

          <p className="recommender-cta__description">
            No hace falta que seas experto. Contanos qué estás buscando, para
            qué ocasión y cuánto querés gastar. Nosotros te ayudamos a encontrar
            algunas opciones.
          </p>

          <Link href="/recomendador" className="recommender-cta__button">
            <span>Encontrar mi vino</span>

            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M4 12H19"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M14 7L19 12L14 17"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        {/* RIGHT */}
        <div className="recommender-cta__visual">
          <div className="recommender-cta__circle recommender-cta__circle--large"></div>

          <div className="recommender-cta__circle recommender-cta__circle--medium"></div>

          <div className="recommender-cta__circle recommender-cta__circle--small"></div>

          <div className="recommender-cta__glass">
            <div className="recommender-cta__glass-bowl"></div>
            <div className="recommender-cta__glass-stem"></div>
            <div className="recommender-cta__glass-base"></div>
          </div>

          <span className="recommender-cta__number">01</span>

          <span className="recommender-cta__label">
            RESPONDÉ · DESCUBRÍ · DISFRUTÁ
          </span>
        </div>
      </div>
    </section>
  );
}
