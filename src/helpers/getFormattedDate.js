export default function getFormattedDate(date, format) {
  let year = date.getFullYear();
  let month = formatNumber(date.getMonth() + 1);
  let day = formatNumber(date.getDate());
  let hours = formatNumber(date.getHours());
  let minutes = formatNumber(date.getMinutes());
  let partOfDay = hours < 12 ? "AM" : "PM";
  switch (format) {
    case "YYYY/MM/DD":
      return `${year}/${month}/${day}`;
    case "YYYY.MM.DD":
      return `${year}.${month}.${day}`;
    default:
      return `${hours}:${minutes} ${partOfDay}, ${day}/${month}/${year}`;
  }
}
function formatNumber(num) {
  return num < 10 ? `0${num}` : num;
}
