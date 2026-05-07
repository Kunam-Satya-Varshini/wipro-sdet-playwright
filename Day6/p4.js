const employees = [
  { id: 101, name: "Alice", salary: 6000 },
  { id: 102, name: "Bob", salary: 3500 },
  { id: 103, name: "Charlie", salary: 5200 }
];

const taxLogic = (salary) => {return salary > 5000 ? 0.2 : 0.1;};

function calculatePayroll(employees, taxCallback) {
  let totalNetPayout = 0;

  const processedEmployees = (employees || []).map((employee) => {
    const taxRate = taxCallback(employee.salary);
    const taxAmount = employee.salary * taxRate;
    const netSalary = employee.salary - taxAmount;

    totalNetPayout += netSalary;
return {employee,netSalary,status: netSalary > 4000 ? "Premium" : "Standard"};
  });

  console.log(`Payroll Processed: Total Net Payout is $${totalNetPayout.toFixed( 2)} for ${processedEmployees.length} employees.`
  );

  setTimeout(() => {console.log(processedEmployees);}, 2000);
}
calculatePayroll(employees, taxLogic);