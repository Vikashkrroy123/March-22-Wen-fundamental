const home =document.querySelector('#home')
const books =document.querySelector('#books')
const names =document.querySelector('#kindle')

const h =document.querySelector('#h')
const b =document.querySelector('#b')
const k =document.querySelector('#k')

home.addEventListener('click', vikash)
books.addEventListener('click', vik)
names.addEventListener('click', vika)


function vikash(){
home.classList.add('btn')
//h.classList.add('active')
b.classList.add('incative')
k.classList.add('incative')
}

function vik(){
    books.classList.add('btn')
    //h.classList.add('active')
    h.classList.add('incative')
    k.classList.add('incative')
    }

    function vika(){
        names.classList.add('btn')
        //h.classList.add('active')
        b.classList.add('incative')
        h.classList.add('incative')
        
       
        }