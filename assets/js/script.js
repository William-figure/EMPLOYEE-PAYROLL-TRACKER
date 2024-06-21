// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn")

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  let employeesArray = []
  let nextEntry = true
  while (nextEntry) {
    nextEntry = false
    employeesArray.push({
      firstName: window.prompt(`Enter first name:`),
      lastName: window.prompt(`Enter last name:`),
      salary: window.prompt(`Enter salary:`)
    })
    nextEntry = window.confirm(`Continue on a new employee's payroll?`)
  }
  return employeesArray
}

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  let total = 0
  for (let i = 0; i < employeesArray.length; i++) {
    total += parseInt(employeesArray[i].salary)
  }
  console.log(
    `The average employee salary between our ${
      employeesArray.length
    } employee(s) is $${(total / employeesArray.length).toFixed(2)}`
  )
  // return (total / employeesArray.length)
}

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  const employeeSelectedIndex = Math.round(Math.random()*(employeesArray.length-1));
  
  console.log(
    `Congratulations to ${employeesArray[employeeSelectedIndex].firstName + " " + employeesArray[employeeSelectedIndex].lastName}, our random drawing winner!`
  )
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table")

  // Clear the employee table
  employeeTable.innerHTML = ""

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i]

    const newTableRow = document.createElement("tr")

    const firstNameCell = document.createElement("td")
    firstNameCell.textContent = currentEmployee.firstName
    newTableRow.append(firstNameCell)

    const lastNameCell = document.createElement("td")
    lastNameCell.textContent = currentEmployee.lastName
    newTableRow.append(lastNameCell)

    const salaryCell = document.createElement("td")
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    })

    newTableRow.append(salaryCell)

    employeeTable.append(newTableRow)
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees()

  console.table(employees)

  displayAverageSalary(employees)

  console.log("==============================")

  getRandomEmployee(employees)

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1
    } else {
      return 1
    }
  })

  displayEmployees(employees)
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData)
