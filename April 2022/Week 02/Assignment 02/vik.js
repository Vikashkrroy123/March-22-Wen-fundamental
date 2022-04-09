const names = ['virat', 'ronaldo', 'messi', 'dhoni', 'rohit']
const color = ['one', 'two', 'three', 'four', 'five']
for(let i=0; i<names.length; i++){
    const vikash =document.createElement('h3')
    vikash.innerText=names[i]
    vikash.classList.add(color[i])
    const vijay =document.querySelector('p')
    vijay.appendChild(vikash)
}