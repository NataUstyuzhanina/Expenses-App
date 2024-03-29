const LIMIT = 10000;
const CURRENCY = 'руб.';
const STATUS_IN_LIMIT = 'все хорошо';
const STATUS_OUT_OF_LIMIT = 'все плохо';
const STATUS_OUT_OF_LIMIT_CLASSNAME = 'limit_red';

const addExpenseNode = document.getElementById('addExpense');
const btnAddExpenseNode = document.getElementById('btnAddExpense');
const historyNode = document.querySelector('.expenses-history');
const sumNode = document.querySelector('.expenses-sum');
const limitNode = document.querySelector('.expenses-limit');
const statusNode = document.querySelector('.expenses-status');

const expenses = [];

init (expenses);

btnAddExpenseNode.addEventListener('click', function() {
    const expense = getExpenseFromUser();
    if (!expense) {
        return;
    }

    trackExpense(expense);
    render(expenses);
});

function init(expenses) {
    limitNode.innerText = LIMIT;
    statusNode.innerText = STATUS_IN_LIMIT;
    sumNode.innerText = calculateExpenses(expenses);
};

function trackExpense(expense) {
    expenses.push(expense);
};

function getExpenseFromUser () {
    if (!addExpenseNode.value){
        return null;
    }

    const expense = parseFloat(addExpenseNode.value);

   clearInput();

    return expense;
};

function clearInput () {
    addExpenseNode.value = '';
};

function calculateExpenses(expenses) {
    let sum = 0;

    expenses.forEach (element => {
        sum += element;
    });

    return sum;
};

function render(expense) {
    const sum = calculateExpenses(expenses);
    renderHistory(expense);
    renderSum(sum);
    renderStatus(sum);
};

function renderHistory(expenses) {
    let expensesListHTML = " ";

    expenses.forEach (element => {
        expensesListHTML += `<li>${element} ${CURRENCY}</li>`;
    });

    historyNode.innerHTML = `<ol>${expensesListHTML}</ol>`;
};

function renderSum(sum) {
    sumNode.innerText = sum;
};

function renderStatus(sum) {
    if(sum <= LIMIT) {
        statusNode.innerText = STATUS_IN_LIMIT;
    } else {
        statusNode.innerText = STATUS_OUT_OF_LIMIT;
        statusNode.classList.add(STATUS_OUT_OF_LIMIT_CLASSNAME);
    }
};