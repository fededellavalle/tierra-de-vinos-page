import Link from "next/link";
import Image from "next/image";
import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* BRAND */}
        <div className="footer__brand">
          <Link href="/" className="footer__logo">
            <Image
              src="/images/logos/logo-sin-bg.png"
              alt="Tierra de Vinos - Vinoteca y Cristalería"
              width={150}
              height={150}
              className="footer__logo-image"
            />
          </Link>

          <p className="footer__description">
            Vinos para cada momento.
            <br />
            Descubrí nuestra selección.
          </p>
        </div>

        {/* NAVIGATION */}
        <div className="footer__column">
          <h3 className="footer__title">Navegación</h3>

          <nav className="footer__links">
            <Link href="/" className="footer__link">
              Inicio
            </Link>

            <Link href="/catalogo" className="footer__link">
              Catálogo
            </Link>

            <Link href="/recomendador" className="footer__link">
              No sé qué vino elegir
            </Link>
          </nav>
        </div>

        {/* CONTACT */}
        <div className="footer__column">
          <h3 className="footer__title">Contacto</h3>

          <div className="footer__links">
            {/* Reemplazar por los datos reales */}
            <a href="#" className="footer__link">
              WhatsApp
            </a>

            <a href="#" className="footer__link">
              Instagram
            </a>

            <a href="#" className="footer__link">
              Cómo llegar
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer__bottom">
        <div className="footer__bottom-container">
          <p>© {currentYear} Tierra de Vinos</p>

          <p>Vinoteca y Cristalería</p>
        </div>
      </div>
    </footer>
  );
}
