let activeMenu = false;

function toggleMenu(x) {
  x.classList.toggle("change");
  $("#menu-modal").toggleClass("hidden");
  if (!activeMenu) {
    $("body").css({ overflow: "hidden" });
    window.scrollTo(0, 0);
    $(document).bind("scroll", function () {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    });
    console.log(activeMenu);
    activeMenu = true;
  } else {
    $(document).unbind("scroll");
    $("body").css({ overflow: "visible" });
    console.log(activeMenu);
    activeMenu = false;
  }
}

$("#products").click((e) => {
  e.preventDefault();
  $("#menu-modal").addClass("hidden");
  $(document).unbind("scroll");
  $("body").css({ overflow: "visible" });
  activeMenu = false;
  const target = $("#items-display");
  if (target.length) {
    $("html, body").animate(
      {
        scrollTop: target.offset().top,
      },
      200
    );
  }
  $(".container").toggleClass("change");
});

$("#about").click((e) => {
  e.preventDefault();
  $("#menu-modal").addClass("hidden");
  $(document).unbind("scroll");
  $("body").css({ overflow: "visible" });
  activeMenu = false;
  const target = $("#about-us");
  if (target.length) {
    $("html, body").animate(
      {
        scrollTop: target.offset().top,
      },
      200
    );
  }
  $(".container").toggleClass("change");
});

$(".images-content").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
});

// $(".images-content").slick();
