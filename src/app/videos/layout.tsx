import VideosMetadata from "@/services/api-videos/pages/metadata";

export const metadata = VideosMetadata;

export default function VideosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
