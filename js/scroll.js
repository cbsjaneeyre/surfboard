const sections = $("section");
const main = $(".main");

let inScroll = false;

sections.first().addClass("active");

const showSection = (section) => {
  if (inScroll == false) {
    inScroll = true;

    const position = section * -100;

    const currentSection = sections.eq(section);
    const colorSection = currentSection.attr("data-color");
    const scroll = $(".scroll");
    const burger = $(".burger");

    if (colorSection == "black") {
      scroll.addClass("scroll--black");
      burger.addClass("burger--black");
    } else {
      scroll.removeClass("scroll--black");
      burger.removeClass("burger--black");
    }

    main.css({
      transform: `translateY(${position}%)`
    });

    sections.eq(section).addClass("active").siblings().removeClass("active");

    setTimeout(() => {
      inScroll = false;

      scroll.find(".scroll__item").eq(section).addClass("scroll__item--active").siblings().removeClass("scroll__item--active");
    }, 1300);
  }
};

const scrollDirection = (direction) => {
  const activeSection = sections.filter(".active");
  const nextSection = activeSection.next();
  const prevSection = activeSection.prev();


  if (direction == "next" && nextSection.length) {
    showSection(nextSection.index());
  }

  if (direction == "prev" && prevSection.length) {
    showSection(prevSection.index());
  }
};

$(window).on("wheel", e => {
  const deltaY = e.originalEvent.deltaY;

  if (deltaY > 0) {
    scrollDirection("next");
  }

  if (deltaY < 0) {
    scrollDirection("prev");
  }

});

$(window).on("keydown", e => {
  const tagName = e.target.tagName.toLowerCase();

  if (tagName != "input" && tagName != "textarea") {
    switch (e.keyCode) {
      case 38:
        scrollDirection("prev");
        break;

      case 40:
        scrollDirection("next");
        break;
    }
  }
});

$("[data-scroll]").on("click", e => {
  e.preventDefault();

  const $this = $(e.currentTarget);
  const target = $this.attr("data-scroll");
  const openSection = $(`[data-id=${target}]`);

  showSection(openSection.index());
});