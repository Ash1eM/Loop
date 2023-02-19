// loop from 1000 to 0
for(let i = 1000; i >=0; i -=2) {
    console.log(i);
}

//loop from 0 to 10000
 for(let i = 0; i<=10000; i +=2) {
    if(i===2500) {
        alert("Quarter of the way there!");
    } else if(i===5000){
        alert("Halfway there!");
    } else if(i===10000){
        alert("Looping is done!");
    }
 }


// favorite shows
const favShow=["Teen Titans","New Girl","Community","The Amazing World of Gumball","Big Time Rush"]
const firstShow= favShow[0]
const secShow= favShow[1]
const thirdShow= favShow[2]
const fourthShow= favShow[3]
const fifthShow= favShow[4]
console.log("My #1 favorite tv show is", firstShow)
console.log("My #2 favorite tv show is", secShow)
console.log("My #3 favorite tv show is", thirdShow)
console.log("My #4 favorite tv show is", fourthShow)
console.log("My #5 favorite tv show is", fifthShow)