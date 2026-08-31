import WineDetail from "../../../components/WineDetail/WineDetail";
import wines from "../../../data/wines";

export default async function WinePage({ params }) {
  const { slug } = await params;

  const wine = wines.find((wine) => wine.slug === slug);

  if (!wine) {
    return (
      <main className="wine-not-found">
        <h1>Vino no encontrado</h1>
        <p>El vino que estás buscando no existe en nuestro catálogo.</p>
      </main>
    );
  }

  return <WineDetail wine={wine} />;
}
