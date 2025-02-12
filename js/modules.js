/** @format */

$(document).ready(function () {
  const items = [
    { title: "Week 2, Data Types & Variables", link: ".\\module2\\index.html" },
    {
      title: "Week 3, Math Ops and Conditionals",
      link: ".\\module3\\index.html",
    },
    {
      title: "Week 4, Random Numbers, Boolean Expressions, Loops",
      link: ".\\module4\\index.html",
    },
    {
      title: "Week 5, Loops - While Loop, For Loop, Nested Loop",
      link: ".\\module5\\index.html",
    },
    {
      title: "Week 6, Functions, Modularizing Program Code",
      link: ".\\module6\\index.html",
    },
    {
      title: "Week 7, Under Construction!",
      link: "#",
    },
    {
      title: "Week 8, Under Construction!",
      link: "#",
    },
    {
      title: "Week 9, Under Construction!",
      link: "#",
    },
    {
      title: "Week 10, Under Construction!",
      link: "#",
    },
    {
      title: "Week 11, Under Construction!",
      link: "#",
    },
    {
      title: "Week 12, Under Construction!",
      link: "#",
    },
    {
      title: "Week 13, Under Construction!",
      link: "#",
    },
    {
      title: "Week 14, Under Construction!",
      link: "#",
    },
  ];

  items.forEach((item) => {
    const card = $('<div class="card"></div>').text(item.title);
    card.on("click", function () {
      window.location.href = item.link;
    });
    $("#card-container").append(card);
  });
});
