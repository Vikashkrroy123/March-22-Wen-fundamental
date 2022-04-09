const vikash = document.createElement('p')
vikash.innerHTML=`<img src="download.jfif" alt="bb" height="250px" width="300px"></img>`
const viku = document.querySelector('h1')
viku.appendChild(vikash)

const beauty=document.querySelector('img')
beauty.addEventListener('click', print)

function print(){
    const vu =document.querySelector('h1')
    vu.innerHTML=`<img src="download.jfif" alt="u" height="10px" width="80px">`
    
}

