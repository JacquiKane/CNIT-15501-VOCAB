/** @format */

$(document).ready(function () {
  const items = [
    { title: "Data Types & Variables", link: ".\\module2\\index.html" },
    {
      title: "Math Ops and Conditionals",
      link: ".\\module3\\index.html",
    },
    {
      title: "Random Numbers, Boolean Expressions, Loops",
      link: ".\\module4\\index.html",
    },
    {
      title: "Loops - While Loop, For Loop, Nested Loop",
      link: ".\\module5\\index.html",
    },
    {
      title: "Functions, Modularizing Program Code",
      link: ".\\module6\\index.html",
    },
    {
      title: "Recursion",
      link: ".\\module_p\\index.html",
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
