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

const stickyMinusBtn = document.querySelector(".scroll--sticky .actions--sticky .quantity .minus");
const stickyPlusBtn = document.querySelector(".scroll--sticky .actions--sticky .quantity .plus");

stickyMinusBtn.addEventListener("click", () => {
  let input = stickyMinusBtn.parentElement.querySelector("input");
  input.value--;
});

stickyPlusBtn.addEventListener("click", () => {
  let input = stickyMinusBtn.parentElement.querySelector("input");
  input.value++;
});


