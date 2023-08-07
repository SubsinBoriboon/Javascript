const balance = document.getElementById('balance');
const plus = document.getElementById('number-income');
const minus = document.getElementById('number-expense');
const list = document.getElementById('list');
const form = document.getElementById('add');
const text = document.getElementById('text');
const amount = document.getElementById('amount');
const btn = document.getElementsByClassName('delete');

const datatransaction = [
  { id: 1, text: 'Taxes', amount: -500 },
  { id: 2, text: 'Car payment', amount: -7000 },
  { id: 3, text: 'Salary', amount: +25000 },
  { id: 4, text: 'Medical cost', amount: -2000 },
];

let transaction = datatransaction;

function initial() {
  // ต้องเคลียร์ค่าา list ให้เป็นค่าว่างก่อน จึงจะอัปเดตข้อมูลล่าสุดได้
  list.innerHTML = '';
  transaction.forEach(addDataToList);
  calculate();
}

function addDataToList(transaction) {
  const symbol = transaction.amount > 0 ? '+' : '-';
  const status = transaction.amount > 0 ? 'income' : 'expense';
  const item = document.createElement('li');
  //classList.add เป็นการกำหนดคลาสลงไปใน li
  item.classList.add(status);
  item.innerHTML = `${transaction.text}<span>${symbol}${Math.abs(
    transaction.amount
  )}<button class="delete" onclick="removeData(${
    transaction.id
  })">x</button></span>`;
  list.appendChild(item);
}

function createId() {
  return Math.floor(Math.random() * 100000);
}

function calculate() {
  const amounts = transaction.map((transaction) => transaction.amount);
  //   item คือ ข้อมูลแต่ละตัวใน array amounts
  const total = amounts.reduce((result, item) => (result += item), 0);
  balance.innerText = `฿ ${total}`;
  const totalIncome = amounts
    .filter((item) => item > 0)
    .reduce((result, item) => (result += item), 0)
    .toFixed(2);
  plus.innerText = `฿ ${totalIncome}`;
  const totalExpense = (
    amounts
      .filter((item) => item < 0)
      .reduce((result, item) => (result += item), 0) * -1
  ).toFixed(2);
  minus.innerText = `฿ ${totalExpense}`;
}
form.addEventListener('submit', addTransaction);
function addTransaction(e) {
  e.preventDefault();
  if (text.value.trim() === '' || amount.value.trim() === '') {
    alert('Please text in the blank completely');
  } else {
    const data = {
      id: createId(),
      text: text.value,
      amount: Number(amount.value),
    };
    transaction.push(data);
    addDataToList(data);
    calculate();
    text.value = '';
    amount.value = '';
  }
}
function removeData(id) {
  // เป็นการเขียนบอกว่าจะเอา id ที่ไม่ใช่ id ที่ส่งมา มาเก็บไว้ใน transaction
  transaction = transaction.filter((trans) => trans.id !== id);
  initial();
}
initial();
