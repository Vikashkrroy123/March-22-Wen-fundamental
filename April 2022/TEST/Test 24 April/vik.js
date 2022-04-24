const vikash = fetch(' https://reqres.in/api/users?page=2')


vikash

.then(data => data.json())
.then(result =>{
    const beauty = result.data
    for(let i=0; i<beauty.length; i++) {
        console.log(beauty[i])
        const creat = document.createElement('p')
        creat.innerText = `${beauty[i].first_name}, ${beauty[i].last_name}, ${beauty[i].email},`
        const ranjan = document.createElement('img')
        ranjan.src='${beauty[i].avatar}'
        ranjan.style.height="100px"
        ranjan.style.width="100px"
        ranjan.style.backgroundColor="red"
       // ranjan.width="100px"


        document.querySelector('body').appendChild(creat)
        document.querySelector('body').appendChild(ranjan)
        
      
    }
})
.catch(error => console.log("get some error", error))
