const names = document.getElementById('names')
const emails = document.getElementById('emails')
const password = document.getElementById('am')
const cpassword = document.getElementById('aam')

const all = document.querySelector('form')

all.addEventListener('submit', vikashroy)

function vikashroy(e){
    e.preventDefault()
    if(password.value.includes("@") || password.value.includes("#") || password.value.includes("$") ){
        alert("Password is correct")

    }
    else{
        alert("atleast contains one special character @#$ ")
    }
}




    