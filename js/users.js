const findItem = (find) => {
  return $(".comments__item").filter((ndx, item) => {
    return $(item).attr("data-item") == find;
  });
};

$(".users__link").on("click", (event) => {
  event.preventDefault();

  const $this = $(event.currentTarget);
  const target = $this.attr("data-link");
  const showItem = findItem(target);
  const activeItem = $this.closest(".users__item");

  showItem.addClass("comments__item--active").siblings().removeClass("comments__item--active");
  activeItem.addClass("users__item--active").siblings().removeClass("users__item--active");
});