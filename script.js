function submitForm(formId, type) {
  const form = document.getElementById(formId);
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(form);
    const json = {};
    formData.forEach((v, k) => json[k] = v);

    const email = json.email;
    const otp = json.otp;

    verifyOTP(email, otp, () => {
      fetch("https://script.google.com/macros/s/AKfycbxLBNeKJgaseTYlctme7jqoHtzueRpGjZTE1EvboQJryZif9JsTTJEM65S464HfZ-OT/exec?type=" + type, {
        method: 'POST',
        body: JSON.stringify(json)
      }).then(res => res.text()).then(alert);
    });
  });
}

window.onload = function () {
  if (document.getElementById('donorForm')) submitForm('donorForm', 'donor');
  if (document.getElementById('orgForm')) submitForm('orgForm', 'org');
  if (document.getElementById('donationForm')) submitForm('donationForm', 'donation');
};
