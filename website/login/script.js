$('form').on('submit', function() {
  let user = {
    user: document.getElementById('user').value,
    email: document.getElementById('email').value,
    password: document.getElementById('pass').value
  }
  
  if (user.password !== document.getElementById('cpass').value) {
    alert('Password does not match!');
    return;
  }
  
  alert(`You've signed up!`);
});
