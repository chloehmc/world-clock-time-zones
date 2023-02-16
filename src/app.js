const locations = document.querySelectorAll("section.times div");

function updateTimes() {
  locations.forEach((location) => {
    const output = location.querySelector("output");
    const timezone = location.getAttribute("data-timezone");

    const now = luxon.DateTime.now().setZone(timezone);

    output.innerHTML = now.toFormat("HH: mm :ss");
  });
}
updateTimes();

setInterval(function () {
  updateTimes();
}, 1000);
