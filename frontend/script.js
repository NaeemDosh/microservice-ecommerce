const apiGateway = 'http://localhost:3000';

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('registerForm')) {
    document.getElementById('registerForm').addEventListener('submit', registerUser);
  }
  if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', loginUser);
  }
  if (document.getElementById('productForm')) {
    document.getElementById('productForm').addEventListener('submit', addProduct);
  }

  const user = localStorage.getItem('user');
  if (user) {
    showMain(user);
  } else {
    showAuth();
  }
});

function showMain(email) {
  document.getElementById('authSection').style.display = 'none';
  document.getElementById('mainSection').style.display = 'block';
  document.getElementById('userEmail').innerText = `Logged in as: ${email}`;
}

function showAuth() {
  document.getElementById('authSection').style.display = 'block';
  document.getElementById('mainSection').style.display = 'none';
}

function registerUser(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  fetch(`${apiGateway}/signup`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password })
  }).then(() => {
    alert('Registered! Please log in.');
  });
}

function loginUser(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  fetch(`${apiGateway}/signin`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  }).then(res => {
    if (res.status === 200) {
      localStorage.setItem('user', email);
      showMain(email);
    } else {
      alert('Invalid credentials');
    }
  });
}

function addProduct(e) {
  e.preventDefault();
  const name = document.getElementById('productName').value;
  const price = document.getElementById('productPrice').value;
  fetch(`${apiGateway}/products`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, price })
  }).then(() => alert('Product added!'));
}

function logout() {
  localStorage.removeItem('user');
  showAuth();
}
