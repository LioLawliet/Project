window.onload = () => {
    checkpassword();
};

const gambar = [
    'assets/benjamin-voros-phIFdC6lA4E-unsplash.jpg',
    'assets/bg.jpg',
    'assets/kalen-emsley-Bkci_8qcdvQ-unsplash.jpg',
    'assets/luca-micheli-ruWkmt3nU58-unsplash.jpg',
    'assets/paul-pastourmatzis-KT3WlrL_bsg-unsplash.jpg'
];

function changebg() {
    const random = Math.floor(Math.random() * gambar.length);
    document.body.style.backgroundImage = `url('${gambar[random]}')`;
};

function changetopw(event) {
    if (event.key == 'Enter') {
        event.preventDefault();
        document.querySelector('.input-password').focus();
    }
}

function changetouser(event) {
    const password = document.querySelector('.input-password').value;

    if (password.trim() === '' && event.key === 'Backspace') {
        event.preventDefault();
        document.querySelector('.input-username').focus();
    }
}

function data() {
    const username = document.querySelector('.input-username').value;
    const password = document.querySelector('.input-password').value;

    console.log('username: ',username);
    console.log('password: ',password);
    console.log(' ');

}

function checkpassword() {
    const valuepassword = document.getElementsByClassName('input-password')[0];
    const toogleicon = document.getElementsByClassName('toogle-password')[0];

    if (valuepassword.value.length >0) {
        toogleicon.style.display = 'flex'; 
    } else {
        toogleicon.style.display = 'none'
    }

}

document.querySelector('.toogle-password').addEventListener('mousedown',function(e) {
    e.preventDefault()
    const input = document.querySelector('.input-password')
    input.focus();
})

function tooglepassword() {
    const pwinput = document.querySelector('.input-password');
    const icon = document.querySelector('.toogle-password');

    if (pwinput.type === 'password') {
        pwinput.type = 'text';
        icon.classList.remove('fa-eye')
        icon.classList.add('fa-eye-slash')

    } else {
        pwinput.type = 'password'
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }

    pwinput.focus();

    setTimeout(() => {
        pwinput.setSelectionRange(pwinput.value.length, pwinput.value.length);
    }, 0);

}
