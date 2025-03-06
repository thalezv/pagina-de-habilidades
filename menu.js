var menu = document.querySelectorAll('.item')

function selectF(){
    menu.forEach((item)=>
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menu.forEach((item)=>
    item.addEventListener('click', selectF)
)

let expan = document.getElementById('expandir')
let nav = document.getElementById('menu')

expan.addEventListener('click', ()=>{
    //cria uma classe, chamadar abrir
    nav.classList.toggle('expandiu')
})

const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const relogio = setInterval(function time(){
    let dateToday = new Date();
    let h = dateToday.getHours();
    let m = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (h < 10) h = '0' + h;
    if (m < 10) m = '0' + m;
    if (s < 10) s = '0' + s;

    horas.textContent = h;
    minutos.textContent = m;
    segundos.textContent = s;
})