export function formattingDate(date: Date) {
  const newDate = new Date(date);

  let formattedDate = newDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const firstNumberOfTheDay = /(^[1-9])+\D/;

  if (firstNumberOfTheDay.test(formattedDate)) {
    const newFormattedDate = formattedDate.replace(/^/, "0");

    return newFormattedDate;
  }
  return formattedDate;
}
