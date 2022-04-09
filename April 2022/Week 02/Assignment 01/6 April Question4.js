<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
     var n = prompt("Enter the value of n")
     let s =0;
     for(let i=1; i<=n; i++){
         if(n%i==0)
            s=s+1
     }
         if(s==2){
             console.log(" prime number")
         }
         else{
            console.log(" Not Prime number its composite")
         }
        
    </script>
</head>
<body>
    
</body>
</html> Write a program to take an input from the user (number) and check whether it is a prime number or not.