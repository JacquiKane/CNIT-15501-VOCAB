/** @format */

$(document).ready(function () {
  const items = [
    { title: "Week 2, Data Types & Variables", link: ".\\module2\\index.html" },
    { title: "Week 3", link: "#" },
    { title: "Week 4", link: "#" },
  ];

  items.forEach((item) => {
    const card = $('<div class="card"></div>').text(item.title);
    card.on("click", function () {
      window.location.href = item.link;
    });
    $("#card-container").append(card);
  });
});