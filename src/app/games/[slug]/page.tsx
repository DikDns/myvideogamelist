import { Metadata, ResolvingMetadata } from "next";
import { PageProps } from "@/types/PagePropsType";
import { VideoGame } from "@/types/VideoGameType";
import { getGames, getImageUrl } from "@/lib/igdb";
import truncStr from "@/utils/truncStr";

type GamePageProps = PageProps<{ slug: string }>;

export async function generateMetadata(
  { params, searchParams }: GamePageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const body = `f *; w slug="${slug}";`;
  const games: VideoGame[] = await getGames(body);

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  if (games.length < 1) throw new Error();

  const currentImage = getImageUrl(games[0].cover?.image_id || "", "720p");

  return {
    title: `${truncStr(games[0].name || "", 20)} | MVGL`,
    openGraph: {
      images: [currentImage, ...previousImages],
    },
  };
}

export default function GamePage({ params }: GamePageProps) {
  return <div>My Post: {params.slug}</div>;
}
