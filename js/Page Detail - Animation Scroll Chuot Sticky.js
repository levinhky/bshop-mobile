window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector(".scroll--sticky .sticky--bottom ").classList.add("active");
    document.querySelector(".scroll--sticky .sticky--top ").classList.add("active");
  } else {
    document.querySelector(".scroll--sticky .sticky--bottom ").classList.remove("active");
    document.querySelector(".scroll--sticky .sticky--top ").classList.remove("active");
  }
}