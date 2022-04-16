

const password = document.getElementById('a')
const cpassword = document.getElementById('aa')

const all = document.querySelector('form')

all.addEventListener('submit', vikashroy)

function vikashroy(e){
    e.preventDefault()
    //console.log(emails.value)
    if(password.value !== cpassword.value){
        alert("password din't match")
        password.classList.add("d")
        cpassword.classList.add("d")
        }
        else{
            alert("password  match") 
            password.classList.add("e")
            cpassword.classList.add("e")
           
         }
}
