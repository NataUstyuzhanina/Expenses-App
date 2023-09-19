
const LIMIT = 10000;

const expenses = [] ;

const addExpenseNode = document.getElementById('addExpense');
const btnAddExpenseNode = document.getElementById('btnAddExpense');
const historyNode = document.querySelector('.expenses-history');
const sumNode = document.querySelector('.expenses-sum');
const limitNode = document.querySelector('.expenses-limit');
const statusNode = document.querySelector('.expenses-status');

limitNode.innerText = LIMIT;

btnAddExpenseNode.addEventListener('click', function () {
    // Получаем значение поля ввода
    if  (!addExpenseNode.value) {
        return;
    }

   const expense = parseFloat(addExpenseNode.value) ;

   addExpenseNode.value = '';

   // Сохраняем трату в список
   expenses.push(expense);

    // Выводим новый список трат
    let expensesListHTML = ''; 
   expenses.forEach(element => {
    expensesListHTML += `<li>${element} руб.</li>`;
   })
   
   historyNode.innerHTML = `<ol>${expensesListHTML}</ol>`;
 
   // Считаем сумму и выводим ее
   let sum = 0;

   expenses.forEach(element => {
    sum += element;
   });

   sumNode.innerText = sum;

   // Сравниваем сумму трат с лимитом и выводим статус
   if (sum <= LIMIT) {
    statusNode.innerText = 'все хорошо';
   } else {
    statusNode.innerText = 'все плохо';
    statusNode.classList.add('status_red');
   }

});
