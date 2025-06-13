function submitForm(formId, type) {
  const form = document.getElementById(formId);
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    const json = {};
    formData.forEach((v, k) => json[k] = v);

    // Verify OTP before final submission
    fetch('YOUR_WEB_APP_URL', {
      method: 'POST',
      body: JSON.stringify({
        type: "verifyOTP",
        email: json.email,
        otp: json.otp
      }),
      headers: { "Content-Type": "application/json" }
    }).then(res => res.text()).then(result => {
      if (result === "Verified") {
        fetch("YOUR_WEB_APP_URL?type=" + type, {
          method: 'POST',
          body: JSON.stringify(json)
        }).then(res => res.text()).then(alert);
      } else {
        alert("OTP Verification Failed.");
      }
    });
  });
}

window.onload = function () {
  if (document.getElementById('donorForm')) submitForm('donorForm', 'donor');
  if (document.getElementById('orgForm')) submitForm('orgForm', 'org');
};
