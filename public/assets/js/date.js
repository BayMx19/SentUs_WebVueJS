const dateTemp = new Date();
dateTime.innerHTML = format_date(dateTemp)

function format_date() {
  const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
  };

  return dateTemp.toLocaleDateString("id-ID", options);
}