function sendDonorOTP() {
  const email = document.querySelector('#donorForm input[name="email"]').value;
  const name = document.querySelector('#donorForm input[name="name"]').value;

  fetch("https://script.google.com/macros/s/AKfycbxLBNeKJgaseTYlctme7jqoHtzueRpGjZTE1EvboQJryZif9JsTTJEM65S464HfZ-OT/exec", {
    method: "POST",
    body: JSON.stringify({
      type: "sendOTP",
      email: email,
      name: name
    }),
    headers: { "Content-Type": "application/json" }
  }).then(res => res.text()).then(alert);
}

function sendOrgOTP() {
  const email = document.querySelector('#orgForm input[name="email"]').value;
  const name = document.querySelector('#orgForm input[name="personName"]').value;

  fetch("https://script.google.com/macros/s/AKfycbxLBNeKJgaseTYlctme7jqoHtzueRpGjZTE1EvboQJryZif9JsTTJEM65S464HfZ-OT/exec", {
    method: "POST",
    body: JSON.stringify({
      type: "sendOTP",
      email: email,
      name: name
    }),
    headers: { "Content-Type": "application/json" }
  }).then(res => res.text()).then(alert);
}
