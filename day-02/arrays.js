const sales = [1200, 4500, 3200, 800, 5600];

let totalSales = 0;

for (let i = 0; i < sales.length; i++) {
  totalSales += sales[i];
}

console.log("Total Sales:", totalSales);
