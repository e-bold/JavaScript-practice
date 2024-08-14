let i = 1;

while (i < 2) {

    console.log(i);
    i++
};



//fizzBuzz

let output = [];

let count = 1;

function fizzBuzz () {

    while(count <= 100) {


        if (count % 3 === 0 && count % 5 === 0) {

            output.push("FizzBuzz");

        } else if ( count % 3 === 0) {
            output.push("Fizz");
        } else if ( count % 5 === 0) {
            output.push ("Buzz");
        } else {
            output.push(count);
        }
        count++;
    }
    console.log(output);
}


fizzBuzz();

//99 bottles of beer

var numberOfBottles = 99
while (numberOfBottles >= 0) {
    if ( numberOfBottles === 1 ) {
        console.log(numberOfBottles + " " + ' bottle' + " of beer on the wall" + ", " + numberOfBottles + " bottle of beer.");
        console.log("Take one down, pass it around, no more bottles of beer on the wall.");
        break;
    } else if ( numberOfBottles === 0) {
        console.log("No more bottles of beer on the wall, no more bottles of beer.");
        console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
        break;
    }




    console.log(numberOfBottles + " bottles of beer on the wall" + ", " + numberOfBottles + " bottles of beer.");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
    console.log(numberOfBottles + " bottles of beer on the wall.");

    console.log("------------------------");
}
