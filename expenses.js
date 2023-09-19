
// const LIMIT = 10000;

// const expenses = [] ;

// const addExpenseNode = document.getElementById('addExpense');
// const btnAddExpenseNode = document.getElementById('btnAddExpense');
// const historyNode = document.querySelector('.expenses-history');
// const sumNode = document.querySelector('.expenses-sum');
// const limitNode = document.querySelector('.expenses-limit');
// const statusNode = document.querySelector('.expenses-status');

// limitNode.innerText = LIMIT;

// btnAddExpenseNode.addEventListener('click', function () {
//     if  (!addExpenseNode.value) {
//         return;
//     }

//    const expense = parseFloat(addExpenseNode.value) ;

//    addExpenseNode.value = '';

//    expenses.push(expense);


//     let expensesListHTML = ''; 
//    expenses.forEach(element => {
//     expensesListHTML += `<li>${element} руб.</li>`;
//    })
   
//    historyNode.innerHTML = `<ol>${expensesListHTML}</ol>`;
 
//    let sum = 0;

//    expenses.forEach(element => {
//     sum += element;
//    });

//    sumNode.innerText = sum;

//    if (sum <= LIMIT) {
//     statusNode.innerText = 'все хорошо';
//    } else {
//     statusNode.innerText = 'все плохо';
//     statusNode.classList.add('status_red');
//    }

// });
