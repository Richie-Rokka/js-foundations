document.addEventListener("DOMContentLoaded", function () {

  const input = document.getElementById("salesInput");
  const button = document.getElementById("calcBtn");
  const result = document.getElementById("result");

  button.addEventListener("click", function () {
    const sales = Number(input.value);

    if (sales > 5000) {
      result.textContent = "Bonus: $500";
    } else if (sales >= 3000) {
      result.textContent = "Bonus: $200";
    } else {
      result.textContent = "Bonus: $0";
    }
  });

});
