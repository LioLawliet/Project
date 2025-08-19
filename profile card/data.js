const lefteye = document.getElementById('ineyeleft')
const righteye = document.getElementById('ineyeright')

document.addEventListener('mousemove',function(e){
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
  
    const x = (e.clientX - centerX) / 25;
    const y = (e.clientY - centerY) / 25;

    lefteye.style.transform = `translate(${x}px, ${y}px)`;
    righteye.style.transform = `translate(${x}px, ${y}px)`;
})