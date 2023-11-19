const openItem = function(open) {
  const container = open.closest(".team__item");
  const content = container.find(".team__job");
  const job = content.find(".team__job-container");
  const openHeight = job.height();

  container.addClass("team__item--active");
  content.height(openHeight);
};

const closeItems = function(close) {
  const items = close.find(".team__job");
  const containerRemove = close.find(".team__item");
  
  containerRemove.removeClass("team__item--active");
  items.height(0);
};

$(".team__name").on("click", e => {
  const $this = $(e.currentTarget);
  const list = $this.closest(".team__list");
  const containerElem = $this.closest(".team__item");

  if (containerElem.hasClass("team__item--active")) {
    closeItems(list);
  } else {
    closeItems(list);
    openItem($this);
  }
});