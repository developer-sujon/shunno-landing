!(function (e) {
  "use strict";
  e(window).on("load", function () {
    var t;
    (t = e(".spinner-wrapper")),
      setTimeout(function () {
        t.fadeOut(500);
      }, 500);
  }),
    e(window).on("scroll load", function () {
      e(".navbar").offset().top > 20
        ? e(".fixed-top").addClass("top-nav-collapse")
        : e(".fixed-top").removeClass("top-nav-collapse");
    }),
    e(function () {
      e(document).on("click", "a.page-scroll", function (t) {
        var a = e(this);
        e("html, body")
          .stop()
          .animate(
            { scrollTop: e(a.attr("href")).offset().top },
            600,
            "easeInOutExpo"
          ),
          t.preventDefault();
      });
    }),
    e(".navbar-nav li a").on("click", function (t) {
      e(this).parent().hasClass("dropdown") ||
        e(".navbar-collapse").collapse("hide");
    }),
    new Swiper(".card-slider", {
      autoplay: { delay: 4e3, disableOnInteraction: !1 },
      loop: !0,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      slidesPerView: 3,
      spaceBetween: 20,
      breakpoints: { 992: { slidesPerView: 2 }, 768: { slidesPerView: 1 } },
    }),
    new Swiper(".image-slider", {
      autoplay: { delay: 2e3, disableOnInteraction: !1 },
      loop: !1,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      spaceBetween: 30,
      slidesPerView: 5,
      breakpoints: {
        380: { slidesPerView: 1, spaceBetween: 10 },
        516: { slidesPerView: 2, spaceBetween: 10 },
        768: { slidesPerView: 3, spaceBetween: 20 },
        992: { slidesPerView: 4, spaceBetween: 30 },
        1200: { slidesPerView: 5, spaceBetween: 30 },
      },
    }),
    new Swiper(".image-slider-1", {
      autoplay: { delay: 2e3, disableOnInteraction: !1 },
      loop: !0,
      spaceBetween: 30,
      slidesPerView: 6,
      breakpoints: {
        380: { slidesPerView: 1, spaceBetween: 10 },
        580: { slidesPerView: 2, spaceBetween: 10 },
        768: { slidesPerView: 3, spaceBetween: 20 },
        992: { slidesPerView: 4, spaceBetween: 20 },
        1200: { slidesPerView: 5, spaceBetween: 30 },
      },
    }),
    new Swiper(".text-slider", {
      autoplay: { delay: 4e3, disableOnInteraction: !1 },
      loop: !0,
      pagination: { el: ".swiper-pagination", type: "bullets", clickable: !0 },
    }),
    e(".popup-link").magnificPopup({
      removalDelay: 300,
      type: "image",
      callbacks: {
        beforeOpen: function () {
          this.st.image.markup = this.st.image.markup.replace(
            "mfp-figure",
            "mfp-figure " + this.st.el.attr("data-effect")
          );
        },
        beforeClose: function () {
          e(".mfp-figure").addClass("fadeOut");
        },
      },
      gallery: { enabled: !0 },
    }),
    e(".popup-youtube, .popup-vimeo").magnificPopup({
      disableOn: 700,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: !1,
      fixedContentPos: !1,
      iframe: {
        patterns: {
          youtube: {
            index: "youtube.com/",
            id: function (e) {
              var t = e.match(/[\\?\\&]v=([^\\?\\&]+)/);
              return t && t[1] ? t[1] : null;
            },
            src: "https://www.youtube.com/embed/%id%?autoplay=1",
          },
          vimeo: {
            index: "vimeo.com/",
            id: function (e) {
              var t = e.match(
                /(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/
              );
              return t && t[5] ? t[5] : null;
            },
            src: "https://player.vimeo.com/video/%id%?autoplay=1",
          },
        },
      },
    }),
    e(".popup-with-move-anim").magnificPopup({
      type: "inline",
      fixedContentPos: !1,
      fixedBgPos: !0,
      overflowY: "auto",
      closeBtnInside: !0,
      preloader: !1,
      midClick: !0,
      removalDelay: 300,
      mainClass: "my-mfp-slide-bottom",
    });
  var t = 0;
  function a() {
    e("#contactForm")
      .removeClass()
      .addClass("shake animated")
      .one(
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
        function () {
          e(this).removeClass();
        }
      );
  }
  function n(t, a) {
    if (t) var n = "h3 text-center tada animated";
    else var n = "h3 text-center";
    e("#cmsgSubmit").removeClass().addClass(n).text(a);
  }
  function s() {
    e("#downloadForm")
      .removeClass()
      .addClass("shake animated")
      .one(
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
        function () {
          e(this).removeClass();
        }
      );
  }
  function o(t, a) {
    if (t) var n = "h3 text-center tada animated";
    else var n = "h3 text-center";
    e("#dmsgSubmit").removeClass().addClass(n).text(a);
  }
  function i() {
    e("#secdownloadForm")
      .removeClass()
      .addClass("shake animated")
      .one(
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
        function () {
          e(this).removeClass();
        }
      );
  }
  function l(t, a) {
    if (t) var n = "h3 text-center tada animated";
    else var n = "h3 text-center";
    e("#sdmsgSubmit").removeClass().addClass(n).text(a);
  }
  function r() {
    e("#getQuoteForm")
      .removeClass()
      .addClass("shake animated")
      .one(
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
        function () {
          e(this).removeClass();
        }
      );
  }
  function c(t, a) {
    if (t) var n = "h3 text-center tada animated";
    else var n = "h3 text-center";
    e("#gmsgSubmit").removeClass().addClass(n).text(a);
  }
  e(window).scroll(function () {
    if (e("#counter").length) {
      var a = e("#counter").offset().top - window.innerHeight;
      0 == t &&
        e(window).scrollTop() > a &&
        (e(".counter-value").each(function () {
          var t = e(this),
            a = t.attr("data-count");
          e({ countNum: t.text() }).animate(
            { countNum: a },
            {
              duration: 2e3,
              easing: "swing",
              step: function () {
                t.text(Math.floor(this.countNum));
              },
              complete: function () {
                t.text(this.countNum);
              },
            }
          );
        }),
        (t = 1));
    }
  }),
    e("input, textarea").keyup(function () {
      "" != e(this).val()
        ? e(this).addClass("notEmpty")
        : e(this).removeClass("notEmpty");
    }),
    e("#contactForm")
      .validator()
      .on("submit", function (t) {
        var s, o, i;
        t.isDefaultPrevented()
          ? (a(), n(!1, "Please fill all fields!"))
          : (t.preventDefault(),
            (s = e("#cname").val()),
            (o = e("#cemail").val()),
            (i = e("#cmessage").val()),
            e.ajax({
              type: "POST",
              url: "../assets/php/contactform-process.php",
              data: "name=" + s + "&email=" + o + "&message=" + i,
              success: function (t) {
                "success" == t
                  ? (e("#contactForm")[0].reset(),
                    n(!0, "Message Submitted!"),
                    e("input").removeClass("notEmpty"),
                    e("textarea").removeClass("notEmpty"))
                  : (a(), n(!1, t));
              },
            }));
      }),
    e("#downloadForm")
      .validator()
      .on("submit", function (t) {
        var a;
        t.isDefaultPrevented()
          ? (s(), o(!1, "Please fill all fields!"))
          : (t.preventDefault(),
            (a = e("#demail").val()),
            e.ajax({
              type: "POST",
              url: "../assets/php/downloadform-process.php",
              data: "email=" + a,
              success: function (t) {
                "success" == t
                  ? (e("#downloadForm")[0].reset(),
                    o(!0, "Download Link Sent To Your Email!"),
                    e("input").removeClass("notEmpty"))
                  : (s(), o(!1, t));
              },
            }));
      }),
    e("#secdownloadForm")
      .validator()
      .on("submit", function (t) {
        var a;
        t.isDefaultPrevented()
          ? (i(), l(!1, "Please fill all fields!"))
          : (t.preventDefault(),
            (a = e("#sdemail").val()),
            e.ajax({
              type: "POST",
              url: "../assets/php/downloadform-process.php",
              data: "email=" + a,
              success: function (t) {
                "success" == t
                  ? (e("#secdownloadForm")[0].reset(),
                    l(!0, "Download Link Sent To Your Email!"),
                    e("input").removeClass("notEmpty"))
                  : (i(), l(!1, t));
              },
            }));
      }),
    e("#getQuoteForm")
      .validator()
      .on("submit", function (t) {
        var a, n, s, o, i;
        t.isDefaultPrevented()
          ? (r(), c(!1, "Please fill all fields!"))
          : (t.preventDefault(),
            (a = e("#gname").val()),
            (n = e("#gemail").val()),
            (s = e("#gphone").val()),
            (o = e("#gselect").val()),
            (i = e("#gterms").val()),
            e.ajax({
              type: "POST",
              url: "../assets/php/getquoteform-process.php",
              data:
                "name=" +
                a +
                "&email=" +
                n +
                "&phone=" +
                s +
                "&select=" +
                o +
                "&terms=" +
                i,
              success: function (t) {
                "success" == t
                  ? (e("#getQuoteForm")[0].reset(),
                    c(!0, "Request Submitted!"),
                    e("input").removeClass("notEmpty"))
                  : (r(), c(!1, t));
              },
            }));
      }),
    e("body").prepend(
      '<a href="body" class="back-to-top page-scroll">Back to Top</a>'
    ),
    e(window).scroll(function () {
      e(window).scrollTop() > 700
        ? e("a.back-to-top").fadeIn("500")
        : e("a.back-to-top").fadeOut("500");
    }),
    e(".button, a, button").mouseup(function () {
      e(this).blur();
    });
})(jQuery),
  new WOW().init();
var error = document.getElementById("g-recaptcha-error");
function submitUserForm() {
  return (
    0 != grecaptcha.getResponse().length ||
    ((error.innerHTML =
      '<span class="recaptcha-error">This field is required.</span>'),
    !1)
  );
}
function verifyCaptcha() {
  error.innerHTML = "";
}
