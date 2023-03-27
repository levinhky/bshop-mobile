const capacityItems = document.querySelectorAll(
  ".product--detail-info > .information .capacity .items .item "
);
const detailQtyPlusBtn = document.querySelector(
  ".product--detail-info > .information .quantity .plus"
);
const detailQtyMinusBtn = document.querySelector(
  ".product--detail-info > .information .quantity .minus"
);

capacityItems.forEach((item) => {
  item.addEventListener("click", () => {
    const activeItem = document.querySelector(
      ".product--detail-info > .information .capacity .items .item.active"
    );
    activeItem.classList.remove("active");
    item.classList.add("active");
  });
});

detailQtyMinusBtn.addEventListener("click", () => {
  let input = detailQtyMinusBtn.parentElement.querySelector("input");
  input.value--;
});

detailQtyPlusBtn.addEventListener("click", () => {
  let input = detailQtyMinusBtn.parentElement.querySelector("input");
  input.value++;
});
