import Link from "next/link";
import "./WineCard.css";

export default function WineCard({ wine }) {
  return (
    <Link href={`/catalogo/${wine.slug}`} className="wine-card">
      <div className="wine-card__image-container">
        {wine.image ? (
          <img src={wine.image} alt={wine.name} className="wine-card__image" />
        ) : (
          <div className="wine-card__placeholder">
            <span>TIERRA</span>
            <strong>DE VINOS</strong>
          </div>
        )}

        <span className="wine-card__type">{wine.type}</span>

        <span className="wine-card__view" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.5 12C4.8 8.2 8.2 6 12 6C15.8 6 19.2 8.2 21.5 12C19.2 15.8 15.8 18 12 18C8.2 18 4.8 15.8 2.5 12Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="12"
              cy="12"
              r="2.5"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>

          <span>Ver vino</span>
        </span>
      </div>

      <div className="wine-card__content">
        <p className="wine-card__winery">{wine.winery}</p>

        <h3 className="wine-card__name">{wine.name}</h3>

        <div className="wine-card__details">
          <span>{wine.varietal}</span>

          {wine.price && <strong>${wine.price}</strong>}
        </div>
      </div>
    </Link>
  );
}
