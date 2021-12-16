//program 1
// Write a JavaScript program which prints the elements of the following array.

var a = [27,16,83,3,90,45,11,92,34]
console.log(a);

//program 2
// js program to print all negative Element in array
 
var nArray = [4, -5, 0, 2, -67, 8, 10, -34 ];
var negative=[]
for(let x=0;x<nArray.length;x++){
    if (nArray[x]<0) {
        negative.push(nArray[x])
    }
}
console.log("Negative Element In An Array Is",negative);

//program 3
//Write a js program to find sum of all array elements

var sArray = [1, 2, 3, 4];
let sum = 0;

for (let a = 0; a < sArray.length; a++) {
    sum += sArray[a];
}
console.log("Sum of Array Element",sum);

//program 4
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


//program 5
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


//program 6
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


//program 7
//total number of negative element in array

var negArray=[8,0,-1,5,-8,-4,1,2,3,-90]
var negElement=0
for(let x=0;x<negArray.length;x++){
        if (negArray[x]<0) {
            negElement++ 
                }
}
console.log("Total Number Of Negative Element In Array Is",negElement);


//program 8
//copy element from one array to an other array

var coarray=[1,0,2,3,4,5,6,7,8,9]
var copyarray=[]
for(let x=0;x<coarray.length;x++){
    copyarray.push(coarray[x])
}
console.log("Copy Of Array Is ",copyarray);

//program 9
//insert an element in array

var inarray=[1,2,3,4,5,6]
console.log("Before Insert",inarray);
inarray.push(3)
console.log("After Insert",inarray);

//program 10
//delete element from specific position
var delarray=[1,2,3,4,5,6,7,8]
console.log("before",delarray);
function deleteElement(x) {
    

        delarray.splice(x,1)
    
console.log("After",delarray);

}
deleteElement(5)

//program 11
//Find frequency of Array

var frearray=[1,2,3,4,5,1,2,3,4,5,1,2,3,4,2,3]
for(let x=0;x<frearray.length;x++)
{
    var frequency=0
    for(let y=0;y<frearray.length;y++)
    {
        if (frearray[x]==frearray[y]) {
            frequency++
            frearray.splice(y,1)
            
        }
    }
    console.log(frearray[x],"is repeated ",frequency," time");
    
}

//program 12
// print all unique element in array



var uniarray=[1,2,3,4,5,1,2,3,4,1,2,3,6,7,8,9]
if (uniarray==0) {
    console.log("There Is No Element In Array");
    
}
else{
    for(let x=0;x<uniarray.length;x++)
{
    var unique=0
    for(let y=0;y<uniarray.length;y++)
    {
        if (uniarray[x]==uniarray[y]) {
            unique++
            
            
        }
    }
    
    if (unique==1) {
         console.log(uniarray[x]," Is Unique Element In Array");
    }
    
}
}


//program 13
//js program to count total number of duplicate elements in an array.
var duparray=[1,2,3,4,5,1,2,3,4,5,2]
var duplication=0
for(let x=0;x<duparray.length;x++)
{
    for(let y=x+1;y<duparray.length;y++)
    {
        if (duparray[x]==duparray[y]) {
            duplication++
            duparray.splice(y,1)
            
        }
    }
    
}
console.log("total number of duplicate elements in an array is ",duplication);


//program 14
//Write a js program to delete all duplicate elements from an array.
var dupliarray=[1,2,3,4,5,1,2,3,4,5,2,6,7,8,7,9,8,0,0]
console.log("Before Deleting Duplicate Element ", dupliarray);

for(let x=0;x<dupliarray.length;x++)
{
    for(let y=x+1;y<dupliarray.length;y++)
    {
        if (dupliarray[x]==dupliarray[y]) {
            dupliarray.splice(y,1)
            
        }
    }
    
}
console.log("After Deleting Duplicate Element ", dupliarray);


//program 15
//Write a js program to merge two array to third array.

var merarray1=[1,2,3,4,5]
var merarray2=[6,7,8,9,10]
var third=[]
for(let x=0;x<merarray1.length;x++){
    third.push(merarray1[x])
}
for(let x=0;x<merarray2.length;x++){
    third.push(merarray2[x])
}
console.log("After Merge",third);

//program 16
//Write a js program to find reverse of an array
var revarray=[1,2,3,4,5,6,7,8,9]
console.log("Before Reverse The Array",revarray);
var reverse=[]
for(let x=revarray.length-1;x>=0;x--){
    reverse.push(revarray[x])
}
console.log("After Reverse The Array",reverse);