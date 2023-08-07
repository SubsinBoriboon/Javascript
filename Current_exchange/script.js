const currency_1 = document.getElementById('currency-1');
const currency_2 = document.getElementById('currency-2');
const amount_1 = document.getElementById('amount-1');
const amount_2 = document.getElementById('amount-2');
const rate = document.getElementById('rate');
const btn = document.getElementById('swap');

// .addEventListener คือ ใช้กับรูปแบบของการเปลี่ยน choice ตัวเลือก แล้วมีcallbacl
currency_1.addEventListener('change', calculate);
currency_2.addEventListener('change', calculate);
amount_1.addEventListener('input', calculate);
amount_2.addEventListener('input', calculate);

function calculate() {
  const one = currency_1.value;
  const two = currency_2.value;
  let URL = `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_MYQbHKemjJEjKo9bXxtqTZsW0Q8YFL0W7pBiBT9Q&currencies=&base_currency=${one}`;

  //fetch จะ return promise มาเพื่อให้ใช้งานต่อคำสั่งได้เรื่อยๆ
  fetch(URL)
    .then((res) => res.json()) //แปลงค่ารูปแแบบpromiseกลายเป็นjson โดยเลือกเอาข้อมูลที่เป็นjsonมา
    .then((res) => {
      const ratetwo = res.data[two];
      rate.innerText = `1 ${one}=${ratetwo}${two}`;
      amount_2.value = amount_1.value * ratetwo;
    });
}
btn.addEventListener('click', () => {
  const tempcurrent = currency_1.value;
  currency_1.value = currency_2.value;
  currency_2.value = tempcurrent;
  calculate();
});
calculate();
