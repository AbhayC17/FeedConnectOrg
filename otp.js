function sendOTP(userType) {
  let email, name;

  if (userType === 'donor') {
    email = document.getElementById('donorEmail').value;
    name = document.getElementById('donorName').value;
  } else if (userType === 'org') {
    email = document.getElementById('orgEmail').value;
    name = document.getElementById('orgPersonName').value;
  }

  fetch("https://script.google.com/macros/s/AKfycbxLBNeKJgaseTYlctme7jqoHtzueRpGjZTE1EvboQJryZif9JsTTJEM65S464HfZ-OT/exec", {
    method: "POST",
    body: JSON.stringify({
      type: "sendOTP",
      email: email,
      name: name
    }),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.text()).then(alert);
}

function verifyOTP(email, otp, callback) {
  fetch("https://script.google.com/macros/s/AKfycbxLBNeKJgaseTYlctme7jqoHtzueRpGjZTE1EvboQJryZif9JsTTJEM65S464HfZ-OT/exec", {
    method: "POST",
    body: JSON.stringify({
      type: "verifyOTP",
      email: email,
      otp: otp
    }),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.text()).then(response => {
    if (response === "success") {
      alert("OTP Verified!");
      callback();
    } else {
      alert("Invalid OTP.");
    }
  });
}


