/** @format */

$(document).ready(function () {
  const items = [
    { title: "Data Types & Variables", description: "Basis for Building Code",  link: ".\\module2\\index.html", pic: "./pics/pp.png" },
    {
      title: "Math Ops and Conditionals",
      description: "Computations, Analysis & Evaluations",
      link: ".\\module3\\index.html",
      pic: "./pics/pp.png"
    },
    {
      title: "Random Numbers, Boolean Expressions, Loops",
      description: "Building Effective Program Code",
      link: ".\\module4\\index.html",
      pic: "./pics/pp.png"
    },
    {
      title: "Loops - While Loop, For Loop, Nested Loop",
      description: "Iteration",
      link: ".\\module5\\index.html",
      pic: "./pics/pp.png"
    },
    {
      title: "Functions, Modularizing Program Code",
      description: "Divide and Conquer",
      link: ".\\module6\\index.html",
      pic: "./pics/pp.png"
    },
    {
      title: "Recursion",
      description: "Programming Techniques",
      link: ".\\module_p\\index.html",
      pic: "./pics/pp.png"
    },
    {
      title: "Lists",
      description: "Representing Groups of Items",
      link: ".\\module8\\index.html",
      pic: "./pics/pp.png"
    },
    {
      title: "File Handling",
      description: "Persistent Storage",
      link: ".\\module9\\index.html",
      pic: "./pics/pp.png"
    },
    {
      title: "Exceptions!",
      description: "Handling Error Conditions",
      link: ".\\module10\\index.html",
      pic: "./pics/pp.png"
    },

   
  ];

  items.forEach((item) => {
    const $card = $('<div class="card"></div>');
    const $topic = $('<p></p>').text(item.title);
    const $topicDesc = $('<p></p>').text(item.description);
    const $cardPic = $(`<img src="${item.pic}"/>`);
    console.log($cardPic);
    $card.append($topic);
    $card.append($topicDesc);
    $card.append($cardPic);
    $card.on("click", function () {
      window.location.href = item.link;
    });
    $("#card-container").append($card);
  });
});
