// app/project/[slug]/page.tsx
import { games } from "@/app/data/games";
import GameClient from "./ProjectClient"; // Import the client component you just created

// 1. Generate Static Params (Runs on Server)
export async function generateStaticParams() {
  return games.map((game) => ({
    slug: game.slug,
  }));
}

// 2. Metadata (Optional but recommended for SEO)
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const game = games.find((g) => g.slug === params.slug);
  return {
    title: game ? `${game.nameGame} - Game Details` : "Game Not Found",
  };
}

// 3. The Server Page
export default function ProjectPage({ params }: { params: { slug: string } }) {
  return <GameClient slug={params.slug} />;
}
