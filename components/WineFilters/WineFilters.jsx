"use client";

import "./WineFilters.css";

export default function WineFilters({
  search,
  setSearch,
  type,
  setType,
  varietal,
  setVarietal,
  winery,
  setWinery,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  varietals,
  wineries,
  onClear,
  hasActiveFilters,
}) {
  const types = [
    {
      value: "todos",
      label: "Todos",
    },
    {
      value: "tinto",
      label: "Tintos",
    },
    {
      value: "blanco",
      label: "Blancos",
    },
    {
      value: "rosado",
      label: "Rosados",
    },
    {
      value: "espumante",
      label: "Espumantes",
    },
  ];

  return (
    <div className="wine-filters">
      {/* =====================================
          SEARCH
      ===================================== */}

      <div className="wine-filters__search">
        <input
          type="text"
          placeholder="Buscar vino, bodega o varietal..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <svg
          className="wine-filters__search-icon"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle
            cx="11"
            cy="11"
            r="6.5"
            stroke="currentColor"
            strokeWidth="1.5"
          />

          <path
            d="M16 16L21 21"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* =====================================
          TYPE
      ===================================== */}

      <div className="wine-filters__types">
        {types.map((item) => (
          <button
            key={item.value}
            type="button"
            className={`wine-filters__type ${
              type === item.value ? "wine-filters__type--active" : ""
            }`}
            onClick={() => setType(item.value)}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* =====================================
          ADVANCED FILTERS
      ===================================== */}

      <div className="wine-filters__advanced">
        {/* VARIETAL */}

        <div className="wine-filters__field">
          <label htmlFor="wine-varietal">Varietal</label>

          <select
            id="wine-varietal"
            value={varietal}
            onChange={(event) => setVarietal(event.target.value)}
          >
            <option value="todos">Todos los varietales</option>

            {varietals.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* WINERY */}

        <div className="wine-filters__field">
          <label htmlFor="wine-winery">Bodega</label>

          <select
            id="wine-winery"
            value={winery}
            onChange={(event) => setWinery(event.target.value)}
          >
            <option value="todos">Todas las bodegas</option>

            {wineries.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* MIN PRICE */}

        <div className="wine-filters__field">
          <label htmlFor="wine-min-price">Precio mínimo</label>

          <input
            id="wine-min-price"
            type="number"
            min="0"
            placeholder="$ Desde"
            value={minPrice}
            onChange={(event) => setMinPrice(event.target.value)}
          />
        </div>

        {/* MAX PRICE */}

        <div className="wine-filters__field">
          <label htmlFor="wine-max-price">Precio máximo</label>

          <input
            id="wine-max-price"
            type="number"
            min="0"
            placeholder="$ Hasta"
            value={maxPrice}
            onChange={(event) => setMaxPrice(event.target.value)}
          />
        </div>
      </div>

      {/* =====================================
          CLEAR
      ===================================== */}

      {hasActiveFilters && (
        <button type="button" className="wine-filters__clear" onClick={onClear}>
          Limpiar filtros
        </button>
      )}
    </div>
  );
}
