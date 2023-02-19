// loop from 1000 to 0
for(let i = 1000; i >=0; i -=2) {
    console.log(i);
}

//loop from 0 to 10000
 for(let i = 0; i<=10000; i +=2) {
    if(i===2500) {
        alert("A quarter of the way there!");
    } else if(i===5000){
        alert("Halfway there!");
    } else if(i===10000){
        alert("The loop is done!");
    }
 }


// favorite shows
const favShow=["Teen Titans","New Girl","Community","The Amazing World of Gumball","Big Time Rush"]
for(let i = 0; i < favShow.length; i++) {
    console.log("My", i ,"favorite show is", favShow[i]);
}