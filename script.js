// Write a JavaScript program which prints the elements of the following array.

var a = [27,16,83,3,90,45,11,92,34]
console.log(a);


// js program to print all negative Element in array
 
var nArray = [4, -5, 0, 2, -67, 8, 10, -34 ];
var negative=[]
for(let x=0;x<nArray.length;x++){
    if (nArray[x]<0) {
        negative.push(nArray[x])
    }
}
console.log("Negative Element In An Array Is",negative);


//Write a js program to find sum of all array elements

var sArray = [1, 2, 3, 4];
let sum = 0;

for (let a = 0; a < sArray.length; a++) {
    sum += sArray[a];
}
console.log("Sum of Array Element",sum);

//Write a js program to find maximum and minimum element in an array.

var num = [1,15, 6, 2,0, 3];

var max=num[0]
for(let x=0;x<num.length;x++){
    if (max<num[x+1]) {
        max=num[x+1]
    }
}
console.log("Maximum Number Is ",max);
var min=num[0]
for(let x=0;x<num.length;x++){
    if (min>num[x+1]) {
        min=num[x+1]
    }
}
console.log("Minimum Number Is ",min);

// a js program to find Second largest number in array
var array=[89,2,5,8,0,1,7,26,31,87,11,86,90,100]
var greater=array[0]
var first=array[0]
var second
for(let x=1;x<=array.length;x++){
    if (greater<array[x] ) {
        second=greater
        greater=array[x]
    
    }
    if (second<array[x+1]) {
        second=array[x+1]
     }


}
console.log("Second largest number is ",second);

//total number of even and odd number in array

var oddarray=[1,2,3,4,5,6,7,8,9,10]
var odd=0
var even=0
for(let x=0;x<oddarray.length;x++){
    if (oddarray[x] % 2 == 0) {
        even++
    }
    if (oddarray[x]%2!=0) {
        odd++
    }

}
console.log("Total number of Even",even);
console.log("Total number of Odd",odd);

//total number of negative element in array

var negArray=[8,0,-1,5,-8,-4,1,2,3,-90]
var negElement=0
for(let x=0;x<negArray.length;x++){
        if (negArray[x]<0) {
            negElement++ 
                }
}
console.log("Total Number Of Negative Element In Array Is",negElement);