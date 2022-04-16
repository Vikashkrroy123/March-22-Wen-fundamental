const students = [

    {name: "deepak", score:45},
    {name: "vikash", score:33},
    {name: "beauty", score:55},
    {name: "ranjan", score:65},
    {name: "komal", score:85,}
]

function vikas(arr){
    const bea =[]
    for(let i=0; i<arr.length; i++){
        if(arr[i].score < 50){
            const obj = {
                name:arr[i].name,
                score:arr[i].score+15,
            }
            bea.push(obj)
        } else{
            bea.push(arr[i])
        }
        
        }
        for(let i=0; i<arr.length; i++){
            if(bea[i].score > 50){
            console.log(arr[i])
            }
    }
}
vikas(students)