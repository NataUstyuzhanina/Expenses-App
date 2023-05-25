const expenses = [] ;

const addExpense = document.getElementById('addExpense');
const btnAddExpense = document.getElementById('btnAddExpense');

btnAddExpense.addEventListener('click', function () {
    if  (!addExpense.value) {
        return;
    }

   const expense = parseInt(addExpense.value) ;

   expenses.push(expense);

   addExpense.value = '';
   console.log (expenses);
})