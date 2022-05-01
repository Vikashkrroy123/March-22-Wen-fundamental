/*function vikash(){
    const y = [1,2,3,4,5,6,7,8,9]
    for(let i=0; i<y.length; i++){
console.log(y[i])
const v =document.querySelector('body')
const f =document.createElement('p')
f.innerText =y[i]
v.appendChild(f)
    }
    return y

}
console.log(vikash())
*/


/*const vikash =[20,3,4,5,6,7,8,15,5,9]
function maximum(array){
    let m = array[0]
    for(let i=1; i<vikash.length; i++){
        if(array[i] > m){
            m = array[i]
        } 
        console.log(m)
}

let v = array[0]
for(let i=0; i<array.length; i++){
    if( array[i] < v)
    v = array[i]
}
console.log(v)
console.log(m+v)
let s =0;
for(let i=0; i<array.length; i++){

    s = s+array[i]
    console.log(s)
}
console.log(s)
let sm =1
for(let i=0; i<array.length; i++){
    sm = sm*array[i]
    console.log(sm)
}
}

maximum(vikash)
*/

/*const vikash = document.querySelector('#h')
for(let i=0; i<5; i++){
const b = document.createElement('p')
b.innerText = 'how are you'
vikash.appendChild(b)
}

const d = document.querySelector('body')
const para =`<p>${delhi}<p>`
d.innerHTML = para


const delhi =` fdsghikodffhouihfuio`
*/

/*const vikash = ['Ranjan', 'Vikash', 'Beauty', 'Kamni', 'Vijay', 'Komal', 'Nagina']
const ran = ['m', 'n', 'p', 'q', 'r', 's', 't']
for(let i=0; i<vikash.length; i++){
    const vik = document.querySelector('body')
   const beauty = document.createElement('h1')
   beauty.innerText = vikash[i]
   vik.appendChild(beauty)
   beauty.classList.add(ran[i])
}
*/


/*const vikash = document.querySelector('#h1')
//vikash.innerHTML = ` <h2>Geekstar</h2>`
const beauty = ['Ranjan', 'Vikash', 'Beauty', 'Kamni', 'Vijay',]
//const home = `I am king of mechanival engineering of Asansol Engineering college`

/*for(let i=0; i<beauty.length; i++){
    //console.log("Hii how are you", beauty[i])
    console.log(`hllo ${beauty[i]}`)
    const vv =document.createElement('p')
    vv.innerText= beauty[i]
    vikash.appendChild(vv)
    //const v = `${beauty[0]},${beauty[1]} `
   // vikash.innerHTML = v
}
*/
/*for(let i=0; i<beauty.length; i++){
    //const vv =document.createElement('p')
    const v=`<h2>Geekstar</h2>
    <h5>${beauty[i]}</h5> ` 
    //vikash.innerHTML=v
    //vikash.appendChild(vv)
}
*/

//const button= document.querySelector('#button')
//button.addEventListener('mouseover', vikash)
/*let count =10
 function vikash(){
     const fakir =document.querySelector('#h1')
      fakir.innerText =`${count}-Thanku for form submitting`
      count=count*3
   fakir.classList.add('vik')
 }
 */
/*
function vikash(){
    const fakir =document.querySelector('#h1') 
    fakir.innerHTML=`You are beauty`
    button.style.color='red'
}
button.addEventListener('mouseout', vikash1)


function vikash1(){
    const fakirr =document.querySelector('#h1') 
    fakirr.innerHTML=`You are ranjan` 
}
*/

/*const vikash =  ['Ranjan', 'Vikash', 'Beauty', 'Kamni', 'Vijay']
//vikash.push('nagina')
//vikash.shift()
vikash.splice(0, 2)
console.log(vikash)
*/
/*const vikash =[1,2,3,4,5,6]
const beauty =[7,8,9,0]
const z= beauty.concat(vikash)
console.log(z)
*/
/*const ranjan = document.querySelector('#image') 
//const vik = document.querySelector('#image')
//ranjan.innerHTML=`<img src="12353.jpg">`

vikash.addEventListener('mouseover', beauty)
function beauty(){
    ranjan.classList.add('a')
}

vik.addEventListener('mouseout', beauty1)
function beauty1(){
    ranjan.classList.add('b')
}
*/
const todoitem = []

const beauty = document.querySelector('#mai')
const vikash = document.querySelector('#form')
vikash.addEventListener('submit', additem)
const input1 = document.querySelector('#input')

function additem(event){
    event.preventDefault()
    console.log("here")

    const item={
        id:todoitem.length,
        task:input1.value
    }

    todoitem.push(item)
console.log(todoitem)
   display()
   input1.value= ''
}
function display(){
    beauty.innerHTML =''
    for(let i=0; i<todoitem.length; i++){
        const x = todoitem[i];
         const kamni =`
         <div class="v">
         ${x.task} <button class="vk" onclick="delet(${x.id})"><img src="images.png" alt="" height="10px" width="10px" id="g"></button>
         </div>
         `
       
        beauty.innerHTML =beauty.innerHTML +kamni
    }
}
function delet(id){
    let index=-1
    for( let i=0; i<todoitem.length; i++){
        const x = todoitem[i];
        if(x.id === id){
            index=1
        }
    }
    todoitem.splice(index, 1)
    display()
}