import Catalog from "../../components/Catalog/Catalog";

export default async function CatalogPage({ searchParams }) {
  const params = await searchParams;

  const validTypes = ["todos", "tinto", "blanco", "rosado", "espumante"];

  const typeFromUrl = params?.tipo;

  const initialType = validTypes.includes(typeFromUrl) ? typeFromUrl : "todos";

  return <Catalog initialType={initialType} />;
}
