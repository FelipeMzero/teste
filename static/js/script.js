const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jumper = () =>{
    mario.classList.add('jumper')
    setTimeout(()=>{
        mario.classList.remove('jumper')

    },500)
}

const loop = setInterval(()=>{  
    const pipePostion = pipe.offsetLeft;



},10)

document.addEventListener('keydown', jumper)