document.addEventListener("DOMContentLoaded", function () {

  const input = document.getElementById("salesInput");
  const result = document.getElementById("result");
  const calcBtn = document.getElementById("calcBtn");
  const clearBtn = document.getElementById("clearBtn");

  function calculateBonus(sales) {
    if (sales > 5000) {
      return 500;
    } else if (sales >= 3000) {
      return 200;
    } else {
      return 0;
    }
  }

  calcBtn.addEventListener("click", function () {
    const sales = Number(input.value);

    if (sales <= 0 || isNaN(sales)) {
      result.textContent = "Please enter a valid sales amount.";
      return;
    }

    const bonus = calculateBonus(sales);
    result.textContent = `Bonus: $${bonus}`;
  });

  clearBtn.addEventListener("click", function () {
    input.value = "";
    result.textContent = "";
  });

});

