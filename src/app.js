const locations = document.querySelectorAll("section.times div");

function updateTimes() {
  locations.forEach((location) => {
    const output = location.querySelector("output");
    const timezone = location.getAttribute("data-timezone");

    const now = luxon.DateTime.now().setZone(timezone);

    output.innerHTML = now.toFormat("HH: mm :ss");

    const hour = parseInt(now.toFormat("H"));

    if (hour >= 9 && hour < 17) {
      location.classList.add("open");
    }
  });
}
updateTimes();

setInterval(function () {
  updateTimes();
}, 1000);
