/** @format */

$(document).ready(function () {
  const $cardContainer = $("#card-container");

  $.each(dictionary, function (term, definition) {
    const $flipCard = $('<div class="flip-card"></div>');
    const $flipCardInner = $('<div class="flip-card-inner"></div>');
    const $flipCardFront = $('<div class="flip-card-front"></div>').text(term);
    const $flipCardBack = $(
      '<div class="flip-card-back"></div>'
    );
    const $flipCardDef = $('<div class="definition-area"></div>')
    .html(definition);

    $flipCardBack.append($flipCardDef);
    $flipCardInner.append($flipCardFront, $flipCardBack);
    $flipCard.append($flipCardInner);
    $cardContainer.append($flipCard);
  });
});
