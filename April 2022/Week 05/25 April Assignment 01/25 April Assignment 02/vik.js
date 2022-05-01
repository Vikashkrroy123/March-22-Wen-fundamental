const homebtn =document.querySelector('#home')
const booksbtn =document.querySelector('#books')
const namesbtn =document.querySelector('#kindle')

homebtn.addEventListener('click', vikash)
booksbtn.addEventListener('click', vik)
namesbtn.addEventListener('click', vika)

 function vikash(){
homebtn.classList.add('btn')
const body =document.querySelector('#h2')
const para = `<p>${home}</p>`
body.innerHTML= para

 }
 
 function vik(){
    booksbtn.classList.add('btn')
    const body =document.querySelector('#h2')
    const para = `<p>${books1}</p>`
    body.innerHTML= para
    
     }

     function vika(){
        namesbtn.classList.add('btn')
        const body =document.querySelector('#h2')
        const para = `<p>${knidle1}</p>`
        body.innerHTML= para
        
         }

         const home = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur officia iure rerum rem cum recusandae unde culpa quasi, autem ipsum enim aspernatur ex possimus sapiente voluptatem expedita, et consequuntur perspiciatis`

   const books1 = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis quas omnis perspiciatis error dolorem quasi commodi nesciunt soluta accusantium voluptatum`

   const knidle1 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, harum! Temporibus harum ipsam cupiditate asperiores ullam dolorum quos.`