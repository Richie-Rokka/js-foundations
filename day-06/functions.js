const calculateBonus = (sales) => {
  let totalBonus = 0;

  for (let i = 0; i < sales.length; i++) {
    if (sales[i] > 5000) {
      totalBonus += 500;
    } else if (sales[i] >= 3000) {
      totalBonus += 200;
    }
  }

  return totalBonus;
};
let company = "ACME Corp";

function printCompany() {
  let department = "Sales";
  console.log(company);
  console.log(department);
}

printCompany();
// console.log(department); // ← why does this fail?


const salesData = [1200, 4500, 3200, 800, 5600];

const result = calculateBonus(salesData);

console.log("Total Bonus:", result);

