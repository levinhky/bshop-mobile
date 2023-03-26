const plusBtns = document.querySelectorAll(
  ".checkout--container .box--cart .item .quantity .plus-icon"
);
const minusBtns = document.querySelectorAll(
  ".checkout--container .box--cart .item .quantity .minus-icon"
);

plusBtns.forEach((btn) => handleChangeInputValueOnclick(btn));
minusBtns.forEach((btn) => handleChangeInputValueOnclick(btn));

function handleChangeInputValueOnclick(btn) {
  btn.addEventListener("click", () => {
    const input = btn.parentElement.querySelector("input");
    btn.classList.contains("plus-icon") ? input.value++ : input.value--;
  });
}
