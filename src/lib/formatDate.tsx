export const formatDate = (date: string, location: string, format: string) => {
  const newDate = new Date(date);
  const shortDate = newDate.toLocaleDateString(location);
  const longDate = newDate.toLocaleDateString(location, { day: "numeric", month: "long", year: "numeric" });

  if(location === "en-EN" || location === "en-US") {
    const splitDate = longDate.split(',').join('');
    return `${format === "long" ? splitDate : shortDate}`;
  } else {
    return `${format === "long" ? longDate : shortDate}`;
  }
}