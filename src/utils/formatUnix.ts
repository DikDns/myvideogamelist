export default function formatUnix(
  unixTimestamp: number,
  locales: Intl.LocalesArgument = "en-US"
) {
  return new Date(unixTimestamp * 1000).toLocaleDateString(locales, {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
