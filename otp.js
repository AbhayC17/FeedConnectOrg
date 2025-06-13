// Replace with your actual deployed Web App URL from Google Apps Script
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxLBNeKJgaseTYlctme7jqoHtzueRpGjZTE1EvboQJryZif9JsTTJEM65S464HfZ-OT/exec";

// ✅ Send OTP function for new donor or organisation
function sendOTP() {
  const email = document.getElementById("email").value;
  const name = document.getElementById("name").value;

  if (!email || !name) {
    alert("Please fill in both name and email to receive OTP.");
    return;
  }

  fetch(WEB_APP_URL, {
    method: "POST",
    body: JSON.stringify({
      type: "sendOTP",
      email: email,
      name: name
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.text())
    .then(response => {
      alert("OTP Sent to " + email);
      console.log("Send OTP Response:", response);
    })
    .catch(err => {
      alert("Error sending OTP.");
      console.error("Send OTP Error:", err);
    });
}

// ✅ Verify OTP function
function verifyOTP() {
  const email = document.getElementById("email").value;
  const otp = document.getElementById("otp").value;

  if (!otp || !email) {
    alert("Please enter both email and OTP.");
    return;
  }

  fetch(WEB_APP_URL, {
    method: "POST",
    body: JSON.stringify({
      type: "verifyOTP",
      email: email,
      otp: otp
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.text())
    .then(response => {
      if (response === "OTP Verified") {
        alert("✅ OTP Verified Successfully!");
        sessionStorage.setItem("otpVerified", "true");
      } else {
        alert("❌ Incorrect OTP. Please try again.");
      }
      console.log("Verify OTP Response:", response);
    })
    .catch(err => {
      alert("Error verifying OTP.");
      console.error("Verify OTP Error:", err);
    });
}
