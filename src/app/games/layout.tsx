export const metadata = {
  title: "Games",
  description:
    "Welcome to MVGL Games Section! The place where you can search your favorite games!",
};

export default function GamesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
