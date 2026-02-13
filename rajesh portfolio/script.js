const toggleBtn = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

toggleBtn.onclick = () => {
  nav.classList.toggle('open');
  toggleBtn.innerHTML = nav.classList.contains('open') ? '&times;' : '&#9776;';
};

function sendWhatsApp() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  const phoneNumber = "9779762489454"; // बिना +, नेपाल को नम्बर
  const text = `Name: ${name}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`;

  const url = `https://wa.me/${phoneNumber}?text=${text}`;
  window.open(url, '_blank');
}

