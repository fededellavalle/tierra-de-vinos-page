import Categories from "@/components/Categories/Categories";
import Hero from "@/components/Hero/Hero";
import RecommenderCTA from "@/components/RecommenderCTA/RecommenderCTA";

export default function Home() {
  return (
    <main>
      <Hero />

      <Categories />

      <RecommenderCTA />
    </main>
  );
}
