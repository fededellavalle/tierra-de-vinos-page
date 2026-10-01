import Link from "next/link";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <p className="hero__eyebrow">Vinoteca y cristalería</p>

          <h1 className="hero__title">
            Un vino para
            <span> cada momento.</span>
          </h1>

          <p className="hero__description">
            Descubrí nuestra selección de vinos y encontrá el indicado para
            disfrutar, regalar o compartir.
          </p>

          <div className="hero__actions">
            <Link
              href="/catalogo"
              className="hero__button hero__button--primary"
            >
              <span>Explorar vinos</span>

              <svg
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M2 8H13"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
                <path
                  d="M9 4L13 8L9 12"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            <Link
              href="/recomendador"
              className="hero__button hero__button--secondary"
            >
              <span>No sé qué elegir</span>

              <svg
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M10 2.5L11.2 7.8L16.5 9L11.2 10.2L10 15.5L8.8 10.2L3.5 9L8.8 7.8L10 2.5Z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 13.5L16.5 15.5L18.5 16L16.5 16.5L16 18.5L15.5 16.5L13.5 16L15.5 15.5L16 13.5Z"
                  stroke="currentColor"
                  strokeWidth="1.1"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__visual-inner">
            <div className="hero__circle"></div>

            <div className="hero__wine-mark">
              <span>TIERRA</span>
              <strong>DE VINOS</strong>
            </div>

            <div className="hero__vertical-text">
              SELECCIÓN · CALIDAD · MOMENTOS
            </div>
          </div>
        </div>
      </div>

      <div className="hero__bottom">
        <span className="hero__bottom-line"></span>
      </div>
    </section>
  );
}
