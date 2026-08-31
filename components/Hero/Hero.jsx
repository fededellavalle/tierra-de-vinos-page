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
              Explorar vinos
              <span>↗</span>
            </Link>

            <Link
              href="/recomendador"
              className="hero__button hero__button--secondary"
            >
              No sé qué elegir
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
