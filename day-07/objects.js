const employee = {
  name: "John Doe",
  role: "Sales Representative",
  department: "Sales",
  yearsAtCompany: function (currentYear) {
  return currentYear - this.hireYear;
},

  sales: [1200, 4500, 3200, 800, 5600],
  calculateBonus: function () {
    let bonus = 0;

    for (let i = 0; i < this.sales.length; i++) {
      if (this.sales[i] > 5000) {
        bonus += 500;
      } else if (this.sales[i] >= 3000) {
        bonus += 200;
      }
    }

    return bonus;
  }
};

console.log("Employee:", employee.name);
console.log("Role:", employee.role);
console.log("Bonus:", employee.calculateBonus());
console.log("Department:", employee.department);
console.log("Years at company:", employee.yearsAtCompany(2025));

