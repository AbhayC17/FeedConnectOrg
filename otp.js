function sendOTP(email, name) {
  fetch("YOUR_WEB_APP_URL", {
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
  fetch("YOUR_WEB_APP_URL", {
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

