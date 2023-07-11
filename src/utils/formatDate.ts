export default function formatDate(
  value: string | number,
  type: "american" | "british" = "american"
) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date(value);

  if (type === "british") {
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  }

  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}
