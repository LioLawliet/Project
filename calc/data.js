const toggledark = document.getElementById('togglebtn');

toggledark.addEventListener("change",() => {
    document.body.classList.toggle('dark')
})

const screen = document.querySelector('.screen');
const number = document.querySelectorAll('button');

let input = ''

number.forEach(button=> {
    button.addEventListener('click',()=> {
        const value = button.textContent;

        if (value === '=') {
            try {
                input = eval(input)
            } catch {
                input = 'error'
            }
        }
        else if (value === 'Clear') {
            input = '';
        } 
        else if (value === "x") {
            input += "*";

        }
        else if (value === "÷") {
            input += "/";
        }
        else if (value === '•') {
            input += '.'
        }
        else {
            input += value
        }

        screen.textContent = input || "0";
    })
});

const toggletheme = document.getElementById('togglebtn');
const runtext = document.getElementById('run-text');

toggletheme.addEventListener("change", () => {

    if (document.body.classList.contains('dark')) {
        runtext.textContent = "You Are in Dark Mode";
    } else {
        runtext.textContent = "You Are in Light Mode";
    }
});