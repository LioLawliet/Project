const nameElement = document.querySelector('.text');
const nameText = "Kiyokata Lio";
let index = 0;
let isDeleting = false;

function typingEffect() {
    if (!isDeleting) {
        nameElement.textContent += nameText.charAt(index);
        index++;
        if (index === nameText.length) {
            setTimeout(() => {
                isDeleting = true;
                typingEffect();
            }, 2000);
        } else {
            setTimeout(typingEffect, 150);
        }
    } else {
        nameElement.textContent = nameText.substring(0, index - 1);
        index--;
        if (index === 0) {
            isDeleting = false;
        }
        setTimeout(typingEffect, 60);
    }
}

typingEffect();

const carrer = document.getElementById('career');
const texts = ['Web-Developer','UI/UX Designer','Backend-Developer','AI-Engineer']
let num = 0

function changeText() {
  carrer.style.opacity = '0';

  setTimeout(() => {
    carrer.textContent = texts[num];
    carrer.style.opacity = '1';
    num = (num + 1) % texts.length;
  }, 500); // waktu delay sebelum teks baru muncul
}

setInterval(changeText, 3000); // tiap 3 detik ganti


const inputtext = document.getElementById('ip-text');
const inputemail = document.getElementById('ip-email');
const inputmsg = document.getElementById('ip-msg');
const send = document.getElementById('send');

const btnok = document.getElementById('box-ok')

send.addEventListener('click', (e) => {
    e.preventDefault();

    // Validasi input
    if (!inputtext.checkValidity()) {
        inputtext.reportValidity();
        return;
    }
    if (!inputemail.checkValidity()) {
        inputemail.reportValidity();
        return;
    }
    if (!inputmsg.checkValidity()) {
        inputmsg.reportValidity();
        return;
    }

    // Validasi email harus Gmail
    const emailValue = inputemail.value.trim().toLowerCase();
    if (!emailValue.endsWith('@gmail.com')) {
        alert('Email harus menggunakan @gmail.com');
        inputemail.focus();
        return;
    }

    let startTime = Date.now()

    setTimeout(() => {
      document.querySelector('.popup-overlay').classList.add('active2');
      
      inputtext.value = '';
      inputemail.value = '';
      inputmsg.value = '';
    }, 500);



    // Kirim data ke Google Apps Script
    fetch("https://script.google.com/macros/s/AKfycbwAphSneksdL1Z3Nwo50kFcGCqYpxtAyIy2qgcrXnJrS7Y0EFQd5_aBb3oVaowFIN-V/exec", {
        method: "POST",
        body: new URLSearchParams({
            "Name": inputtext.value.trim(),
            "Email": inputemail.value.trim(),
            "Message": inputmsg.value.trim()
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log("Server Response:", data);
        if (data.result === "success") {
          let endTime = Date.now()
          console.log(`Message has been succesfuly delivered in ${(endTime - startTime)/1000} seconds`)
        } else {
            alert("Server error: " + data.error);
        }
    })
    .catch(err => {
        console.error("Request failed:", err);
        alert("Request gagal: " + err.message);
    });

    btnok.addEventListener('click', () => {
      document.querySelector('.popup-overlay').classList.remove('active2');
  });
});





var layerCount = 5;
var starCount = 1600;
var maxTime = 30;
var universe = document.getElementById("universe");
var w = window;
var d = document;
var e = d.documentElement;
var g = d.getElementsByTagName("body")[0];
var width = w.innerWidth || e.clientWidth || g.clientWidth;
var height = Math.max(
  document.body.scrollHeight,
  document.documentElement.scrollHeight
);


for (var i = 0; i < starCount; ++i) {
  var ypos = Math.round(Math.random() * height);
  var star = document.createElement("div");
  var speed = 1000 * (Math.random() * maxTime + 1);
  star.setAttribute("class", "star" + (3 - Math.floor(speed / 1000 / 8)));
  star.style.backgroundColor = "white";

  universe.appendChild(star);
  star.animate(
    [
      {
        transform: "translate3d(" + width + "px, " + ypos + "px, 0)"
      },
      {
        transform:
          "translate3d(-" + Math.random() * 256 + "px, " + ypos + "px, 0)"
      }
    ],
    {
      delay: Math.random() * -speed,
      duration: speed,
      iterations: 1000
    }
  );
}

var elem = document.querySelector(".pulse");
var animation = elem.animate(
  {
    opacity: [0.5, 1],
    transform: ["scale(0.5)", "scale(1)"]
  },
  {
    direction: "alternate",
    duration: 500,
    iterations: Infinity
  }
);


function setUniverseHeight() {
  const body = document.body;
  const html = document.documentElement;

  const pageHeight = Math.max(
    body.scrollHeight, body.offsetHeight,
    html.clientHeight, html.scrollHeight, html.offsetHeight
  );

  const universe = document.getElementById("universe");
  universe.style.height = pageHeight + "px";

  height = pageHeight;
}

setUniverseHeight();
window.addEventListener('resize', setUniverseHeight);
window.addEventListener('scroll', setUniverseHeight);


