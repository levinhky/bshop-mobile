const bankCopyBtns = document.querySelectorAll(
  ".checkout-success-container .checkout--method .manual-banking table tr td .bank-copy"
);

bankCopyBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const clipBoardEl = btn.parentElement.querySelector(".tooltiptext");
    const value =
      btn.parentElement.previousElementSibling.querySelector(
        "td .text"
      ).innerHTML;
    copyToClipboard(value);
    clipBoardEl.classList.add("show");

    setTimeout(() => clipBoardEl.classList.remove("show"), 1000);
  });
});

function copyToClipboard(text) {
  var sampleTextarea = document.createElement("textarea");
  document.body.appendChild(sampleTextarea);
  sampleTextarea.value = text;
  sampleTextarea.select();
  document.execCommand("copy");
  document.body.removeChild(sampleTextarea);
}
