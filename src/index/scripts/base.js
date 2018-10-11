const button = document.querySelector('#btnToggleModal');
const output = document.querySelector('#output');
const nameInput = document.querySelector('#nameInput');
const label = document.querySelector('.name-row');

button.onclick = greeting;

function greeting() {
  const name = nameInput.value;
  if (name) {
    nameInput.value = '';
    print(`Hello, ${name}!`);
  } else {
    label.classList.add('not-valid');
  }
}

function print(text) {
  output.innerHTML = text;
}

const employees = [{
    name: 'John',
    salary: 2000
  },
  {
    name: 'Jack',
    salary: 3000
  },
  {
    name: 'Adam',
    salary: 2200
  }
];

employees.push({
  name: 'Jim',
  salary: 2550
});

function totalSalaries(employeesArray) {
  let totalCount = 0;

  employeesArray.forEach(function (item) {
    if (typeof item.salary === 'number') {
      totalCount += item.salary;
    }
  });
  return totalCount;
}

const totalResult = totalSalaries(employees);
console.log(totalResult);