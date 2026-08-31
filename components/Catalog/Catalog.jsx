"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import WineCard from "../WineCard/WineCard";
import WineFilters from "../WineFilters/WineFilters";

import wines from "../../data/wines";

import "./Catalog.css";

export default function Catalog() {
  const searchParams = useSearchParams();

  const typeFromUrl = searchParams.get("tipo");

  const validTypes = ["todos", "tinto", "blanco", "rosado", "espumante"];

  const initialType = validTypes.includes(typeFromUrl) ? typeFromUrl : "todos";

  /* =====================================
     FILTER STATE
  ===================================== */

  const [search, setSearch] = useState("");

  const [type, setType] = useState(initialType);

  const [varietal, setVarietal] = useState("todos");

  const [winery, setWinery] = useState("todos");

  const [minPrice, setMinPrice] = useState("");

  const [maxPrice, setMaxPrice] = useState("");

  /* =====================================
     FILTER OPTIONS
  ===================================== */

  const varietals = useMemo(() => {
    return [...new Set(wines.map((wine) => wine.varietal))].sort();
  }, []);

  const wineries = useMemo(() => {
    return [...new Set(wines.map((wine) => wine.winery))].sort();
  }, []);

  /* =====================================
     FILTER WINES
  ===================================== */

  const filteredWines = useMemo(() => {
    const searchValue = search.toLowerCase().trim();

    const minimumPrice = minPrice === "" ? null : Number(minPrice);

    const maximumPrice = maxPrice === "" ? null : Number(maxPrice);

    return wines.filter((wine) => {
      /* SEARCH */

      const matchesSearch =
        !searchValue ||
        wine.name.toLowerCase().includes(searchValue) ||
        wine.winery.toLowerCase().includes(searchValue) ||
        wine.varietal.toLowerCase().includes(searchValue) ||
        wine.region.toLowerCase().includes(searchValue);

      /* TYPE */

      const matchesType = type === "todos" || wine.type.toLowerCase() === type;

      /* VARIETAL */

      const matchesVarietal =
        varietal === "todos" || wine.varietal === varietal;

      /* WINERY */

      const matchesWinery = winery === "todos" || wine.winery === winery;

      /* MIN PRICE */

      const matchesMinPrice =
        minimumPrice === null || wine.price >= minimumPrice;

      /* MAX PRICE */

      const matchesMaxPrice =
        maximumPrice === null || wine.price <= maximumPrice;

      return (
        matchesSearch &&
        matchesType &&
        matchesVarietal &&
        matchesWinery &&
        matchesMinPrice &&
        matchesMaxPrice
      );
    });
  }, [search, type, varietal, winery, minPrice, maxPrice]);

  /* =====================================
     CLEAR
  ===================================== */

  const clearFilters = () => {
    setSearch("");
    setType("todos");
    setVarietal("todos");
    setWinery("todos");
    setMinPrice("");
    setMaxPrice("");
  };

  const hasActiveFilters =
    search !== "" ||
    type !== "todos" ||
    varietal !== "todos" ||
    winery !== "todos" ||
    minPrice !== "" ||
    maxPrice !== "";

  /* =====================================
     RENDER
  ===================================== */

  return (
    <main className="catalog">
      {/* =====================================
          HEADER
      ===================================== */}

      <section className="catalog__header">
        <div className="catalog__header-container">
          <p className="catalog__eyebrow">Tierra de Vinos</p>

          <h1 className="catalog__title">Nuestra selección</h1>

          <p className="catalog__description">
            Explorá nuestra selección de vinos y encontrá el indicado para cada
            ocasión.
          </p>
        </div>
      </section>

      {/* =====================================
          CONTENT
      ===================================== */}

      <section className="catalog__content">
        <div className="catalog__container">
          {/* FILTERS */}

          <WineFilters
            search={search}
            setSearch={setSearch}
            type={type}
            setType={setType}
            varietal={varietal}
            setVarietal={setVarietal}
            winery={winery}
            setWinery={setWinery}
            minPrice={minPrice}
            setMinPrice={setMinPrice}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            varietals={varietals}
            wineries={wineries}
            onClear={clearFilters}
            hasActiveFilters={hasActiveFilters}
          />

          {/* =====================================
              RESULTS
          ===================================== */}

          <div className="catalog__results-header">
            <p>
              {filteredWines.length}{" "}
              {filteredWines.length === 1 ? "vino" : "vinos"}
            </p>

            {hasActiveFilters && (
              <button
                type="button"
                className="catalog__clear"
                onClick={clearFilters}
              >
                Limpiar filtros
              </button>
            )}
          </div>

          {/* =====================================
              GRID
          ===================================== */}

          {filteredWines.length > 0 ? (
            <div className="catalog__grid">
              {filteredWines.map((wine) => (
                <WineCard key={wine.id} wine={wine} />
              ))}
            </div>
          ) : (
            <div className="catalog__empty">
              <h2>No encontramos vinos</h2>

              <p>Probá modificando los filtros o realizando otra búsqueda.</p>

              <button type="button" onClick={clearFilters}>
                Ver todos los vinos
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
