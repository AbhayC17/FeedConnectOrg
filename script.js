function submitForm(formId, type) {
  const form = document.getElementById(formId);
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const json = {};
    formData.forEach((v, k) => json[k] = v);
    fetch("YOUR_WEB_APP_URL?type=" + type, {
      method: 'POST',
      body: JSON.stringify(json)
    }).then(res => res.text()).then(alert);
  });
}

window.onload = function () {
  if (document.getElementById('donorForm')) submitForm('donorForm', 'donor');
  if (document.getElementById('orgForm')) submitForm('orgForm', 'org');
  if (document.getElementById('donationForm')) submitForm('donationForm', 'donation');
};
