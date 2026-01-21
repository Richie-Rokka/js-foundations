const baseSalary = 3000;
const commissionRate = 0.1;
const salesAmount = 12000;

const commission = salesAmount * commissionRate;
const totalPay = baseSalary + commission;

console.log("Commission:", commission);
console.log("Total Pay:", totalPay);
