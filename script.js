const firebaseConfig = {
  apiKey: "AIzaSyCuP6VscPxkQS5D5z7bCYWXijzaYCdbF2s",
  authDomain: "starkoscript.firebaseapp.com",
  databaseURL: "https://starkoscript-default-rtdb.firebaseio.com",
  projectId: "starkoscript",
  storageBucket: "starkoscript.appspot.com",
  messagingSenderId: "381525854892",
  appId: "1:381525854892:web:50ba5daa1cffae8faa2d09"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.database();

function login() {
  const email = document.getElementById('email').value;
  const pass = document.getElementById('password').value;
  auth.signInWithEmailAndPassword(email, pass)
    .then(() => window.location = "home.html")
    .catch(err => document.getElementById('msg').innerText = err.message);
}

function register() {
  const email = document.getElementById('email').value;
  const pass = document.getElementById('password').value;
  auth.createUserWithEmailAndPassword(email, pass)
    .then(() => document.getElementById('msg').innerText = "تم إنشاء الحساب!")
    .catch(err => document.getElementById('msg').innerText = err.message);
}

function sendRequest(pkg, mobile, password) {
  const username = auth.currentUser.email;
  db.ref('requests').push({ username, mobile, password, package: pkg, status: "pending" })
    .then(() => alert("✅ تم إرسال الطلب"))
    .catch(err => alert(err.message));
}

function sendBalanceRequest() {
  const username = auth.currentUser.email;
  const mobile = document.getElementById('mobile5').value;
  const password = document.getElementById('pass5').value;
  const balance = document.getElementById('balance').value;
  db.ref('balanceRequests').push({ username, mobile, password, balance, status: "pending" })
    .then(() => alert("✅ تم إرسال طلب الرصيد"))
    .catch(err => alert(err.message));
}

function calcNet() {
  const val = document.getElementById('balance').value;
  document.getElementById('calc').innerText = `ستحتاج: ${val * 1.23} جنيه`;
}

function logout() {
  auth.signOut().then(() => window.location = "index.html");
}
