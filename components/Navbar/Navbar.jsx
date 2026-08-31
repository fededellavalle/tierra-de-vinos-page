"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar__container">
        {/* LOGO */}
        <Link href="/" className="navbar__logo" onClick={closeMenu}>
          <Image
            src="/images/logos/logo-sin-bg.png"
            alt="Tierra de Vinos - Vinoteca y Cristalería"
            width={150}
            height={150}
            priority
            className="navbar__logo-image"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="navbar__nav">
          <Link href="/" className="navbar__link">
            Inicio
          </Link>

          <Link href="/catalogo" className="navbar__link">
            Catálogo
          </Link>

          <Link
            href="/recomendador"
            className="navbar__link navbar__link--highlight"
          >
            ¿No sabés qué elegir?
          </Link>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          className={`navbar__menu-button ${
            menuOpen ? "navbar__menu-button--open" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`navbar__mobile ${menuOpen ? "navbar__mobile--open" : ""}`}
      >
        <nav className="navbar__mobile-nav">
          <Link href="/" className="navbar__mobile-link" onClick={closeMenu}>
            Inicio
          </Link>

          <Link
            href="/catalogo"
            className="navbar__mobile-link"
            onClick={closeMenu}
          >
            Catálogo
          </Link>

          <Link
            href="/recomendador"
            className="navbar__mobile-link navbar__mobile-link--highlight"
            onClick={closeMenu}
          >
            ¿No sabés qué elegir?
          </Link>
        </nav>
      </div>
    </header>
  );
}
