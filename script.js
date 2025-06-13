// Replace with your own Google Apps Script Web App URL
const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbx3pii2dHroK7A1WX9dOoNZrwvsfte_GIETCnBzgtOIjWVvMe_RxulHVHIPExyXA85e/exec';

function sendOTP(userType) {
  const form = userType === 'donor' ? document.getElementById('donorForm') : document.getElementById('orgForm');
  const formData = new FormData(form);
  const email = formData.get('email');
  const name = formData.get('name') || formData.get('personName');

  fetch(https://script.google.com/macros/s/AKfycbx3pii2dHroK7A1WX9dOoNZrwvsfte_GIETCnBzgtOIjWVvMe_RxulHVHIPExyXA85e/exec, {
    method: 'POST',
    body: JSON.stringify({ email, name, action: 'send_otp' })
  })
  .then(res => res.text())
  .then(data => alert("OTP sent to your email!"))
  .catch(err => alert("Error sending OTP: " + err));
}

document.addEventListener('DOMContentLoaded', () => {
  const donorForm = document.getElementById('donorForm');
  const orgForm = document.getElementById('orgForm');
  const donorLogin = document.getElementById('donorLoginForm');
  const orgLogin = document.getElementById('orgLoginForm');

  if (donorForm) {
    donorForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const otpInput = document.getElementById('otpInput').value;
      const data = Object.fromEntries(new FormData(donorForm));
      data.otp = otpInput;
      data.action = 'register_donor';

      fetch(https://script.google.com/macros/s/AKfycbx3pii2dHroK7A1WX9dOoNZrwvsfte_GIETCnBzgtOIjWVvMe_RxulHVHIPExyXA85e/exec, {
        method: 'POST',
        body: JSON.stringify(data)
      })
        .then(res => res.text())
        .then(msg => {
          alert(msg);
          window.location.href = "donor-login.html";
        });
    });
  }

  if (orgForm) {
    orgForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const otpInput = document.getElementById('otpInput').value;
      const data = Object.fromEntries(new FormData(orgForm));
      data.otp = otpInput;
      data.action = 'register_org';

      fetch(https://script.google.com/macros/s/AKfycbx3pii2dHroK7A1WX9dOoNZrwvsfte_GIETCnBzgtOIjWVvMe_RxulHVHIPExyXA85e/exec, {
        method: 'POST',
        body: JSON.stringify(data)
      })
        .then(res => res.text())
        .then(msg => {
          alert(msg);
          window.location.href = "org-login.html";
        });
    });
  }

  if (donorLogin) {
    donorLogin.addEventListener('submit', function (e) {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(donorLogin));
      data.action = 'login_donor';

      fetch(WEB_APP_URL, {
        method: 'POST',
        body: JSON.stringify(data)
      })
        .then(res => res.text())
        .then(msg => {
          if (msg === 'success') {
            window.location.href = 'donor-dashboard.html';
          } else {
            alert('Invalid login!');
          }
        });
    });
  }

  if (orgLogin) {
    orgLogin.addEventListener('submit', function (e) {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(orgLogin));
      data.action = 'login_org';

      fetch(https://script.google.com/macros/s/AKfycbx3pii2dHroK7A1WX9dOoNZrwvsfte_GIETCnBzgtOIjWVvMe_RxulHVHIPExyXA85e/exec, {
        method: 'POST',
        body: JSON.stringify(data)
      })
        .then(res => res.text())
        .then(msg => {
          if (msg === 'success') {
            window.location.href = 'org-dashboard.html';
          } else {
            alert('Invalid login!');
          }
        });
    });
  }
});

// For donation form submission
function submitForm(formId, actionType) {
  document.getElementById(formId).addEventListener('submit', function (e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(this));
    data.action = actionType;

    fetch(https://script.google.com/macros/s/AKfycbx3pii2dHroK7A1WX9dOoNZrwvsfte_GIETCnBzgtOIjWVvMe_RxulHVHIPExyXA85e/exec, {
      method: 'POST',
      body: JSON.stringify(data)
    })
      .then(res => res.text())
      .then(msg => {
        alert(msg);
        this.reset();
      });
  });
}
