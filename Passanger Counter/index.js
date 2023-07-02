// Change the Inner Text
    
/* 
    document.getElementById('count-el').innerText = "<h1>Hi my name is Aman</h1>";
    Output => <h1>Hi my name is Aman</h1>
*/

/*
    document.getElementById('count-el').innerHTML = "<h1>Hi my name is Aman</h1>";
    Output => Hi my name is Aman
*/

let count = 0;

function increment()
{
    count = count + 1;
    // console.log(count);
    count = document.getElementById('count-el').innerHTML = count;
    // console.log(count);
}