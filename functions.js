function calculateCommission(sales, rate) {return sales * rate;}
function calculateTotalPay(baseSalary, commission) {return baseSalary + commission;}

const sales = 4000;
const rate = 0.1;

const commission = calculateCommission(sales, rate);
const totalPay = calculateTotalPay(3000, commission);

console.log("Commission:", commission);
console.log("TotalPay:", totalPay);