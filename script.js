// Write a JavaScript program which prints the elements of the following array.

var a = [
    [1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]
];
   
console.log(a);


// js program to print all negative Element in array
 
var Array = [4, -5, 0, 2, -67, 8, 10, -34 ];

function getNegativeNumbers(array) {

    var negatives = [];

    for (var e = 0; e < array.length; e++) {
        if (array[e] < 0) {
            negatives.push(array[e]);
        }
    }
    return negatives;

}
console.log(getNegativeNumbers(Array));


//Write a js program to find sum of all array elements

var numbers = [1, 2, 3, 4];
let sum = 0;

for (let a = 0; a < numbers.length; a++) {
    sum += numbers[a];
}
console.log(sum);

//Write a js program to find maximum and minimum element in an array.

var num = [
    1, 5, 6, 2, 3
];
var m = Math.min(...num);
console.log(m)

var n = Math.max(...num)
console.log(n);

// a js program to find Second largest number in array
var array=[2,5,8,0,1,7,26,31,87,11,86]
var greater=array[0]
var first=array[0]
var second
for(let x=1;x<=array.length;x++){
    if (greater<array[x]) {
        if (second<array[x]) {
            
            first=array[x]
        }
        second=first
    }
    greater=array[x]

}
console.log("Second largest number is ",second);