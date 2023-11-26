const findWidth = (item) => {
  let neededItemWidth = 0;
  const screenWidth = $(window).width();
  const list = item.closest(".products__list");
  const infoBlocks = list.find(".products__link");
  const infoWidth = infoBlocks.width() * infoBlocks.length;

  const textContainer = item.find(".products__info-container");
  const paddingLeft = parseInt(textContainer.css("padding-left"));
  const paddingRight = parseInt(textContainer.css("padding-right"));

  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  if (isMobile) {
    neededItemWidth = screenWidth - infoWidth;
  } else {
    neededItemWidth = 500;
  };

  return {
    container: neededItemWidth,
    textContainer: neededItemWidth - paddingLeft - paddingRight
  };
};



const closeContent = (list) => {
  const items = list.find(".products__item");
  const content = list.find(".products__info");

  items.removeClass("products__item--active");
  content.width(0);
}



const openContent = (item) => {
  const hiddenContent = item.find(".products__info");
  const neededWidth = findWidth(item);
  const textBlock = item.find(".products__info-container");

  item.addClass("products__item--active");
  hiddenContent.width(neededWidth.container);
  textBlock.width(neededWidth.textContainer);
};



$(".products__link").on("click", e => {
  e.preventDefault();

  const $this = $(e.currentTarget);
  const item = $this.closest(".products__item");
  const openedItem = item.hasClass("products__item--active");
  const list = $this.closest(".products__list");

  if (openedItem) {
    closeContent(list);
  } else {
    closeContent(list);
    openContent(item);
  }
});

$(".products__info-button").on("click", e => {
  e.preventDefault();
  
  closeContent($('.products__list'));
});