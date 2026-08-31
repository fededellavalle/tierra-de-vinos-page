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

        <span className="wine-card__arrow">↗</span>
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
