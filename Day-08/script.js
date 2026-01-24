const sales = [1200, 4500, 3200, 800, 5600];

document.getElementById("calcBtn").addEventListener("click", () => {
  let bonus = 0;

  for (let i = 0; i < sales.length; i++) {
    if (sales[i] > 5000) {
      bonus += 500;
    } else if (sales[i] >= 3000) {
      bonus += 200;
    }
  }

  document.getElementById("result").textContent =
    "Total Bonus: $" + bonus;
});
