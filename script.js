//program 1
// Write a JavaScript program which prints the elements of the following array.

var a = [27, 16, 83, 3, 90, 45, 11, 92, 34];
console.log(a);

//program 2
// js program to print all negative Element in array

var nArray = [4, -5, 0, 2, -67, 8, 10, -34];
var negative = [];
for (let x = 0; x < nArray.length; x++) {
  if (nArray[x] < 0) {
    negative.push(nArray[x]);
  }
}
console.log("Negative Element In An Array Is", negative);

//program 3
//Write a js program to find sum of all array elements

var sArray = [1, 2, 3, 4];
let sum = 0;

for (let a = 0; a < sArray.length; a++) {
  sum += sArray[a];
}
console.log("Sum of Array Element", sum);

//program 4
//Write a js program to find maximum and minimum element in an array.

var num = [1, 15, 6, 2, 0, 3];

var max = num[0];
for (let x = 0; x < num.length; x++) {
  if (max < num[x + 1]) {
    max = num[x + 1];
  }
}
console.log("Maximum Number Is ", max);
var min = num[0];
for (let x = 0; x < num.length; x++) {
  if (min > num[x + 1]) {
    min = num[x + 1];
  }
}
console.log("Minimum Number Is ", min);

//program 5
// a js program to find Second largest number in array
var array = [89, 2, 5, 8, 0, 1, 7, 26, 31, 87, 11, 86, 90, 100];
var greater = array[0];
var first = array[0];
var second;
for (let x = 1; x <= array.length; x++) {
  if (greater < array[x]) {
    second = greater;
    greater = array[x];
  }
  if (second < array[x + 1]) {
    second = array[x + 1];
  }
}
console.log("Second largest number is ", second);

//program 6
//total number of even and odd number in array

var oddarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var odd = 0;
var even = 0;
for (let x = 0; x < oddarray.length; x++) {
  if (oddarray[x] % 2 == 0) {
    even++;
  }
  if (oddarray[x] % 2 != 0) {
    odd++;
  }
}
console.log("Total number of Even", even);
console.log("Total number of Odd", odd);

//program 7
//total number of negative element in array

var negArray = [8, 0, -1, 5, -8, -4, 1, 2, 3, -90];
var negElement = 0;
for (let x = 0; x < negArray.length; x++) {
  if (negArray[x] < 0) {
    negElement++;
  }
}
console.log("Total Number Of Negative Element In Array Is", negElement);

//program 8
//copy element from one array to an other array

var coarray = [1, 0, 2, 3, 4, 5, 6, 7, 8, 9];
var copyarray = [];
for (let x = 0; x < coarray.length; x++) {
  copyarray.push(coarray[x]);
}
console.log("Copy Of Array Is ", copyarray);

//program 9
//insert an element in array

var inarray = [1, 2, 3, 4, 5, 6];
console.log("Before Insert", inarray);
inarray.push(3);
console.log("After Insert", inarray);

//program 10
//delete element from specific position
var delarray = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("before", delarray);
function deleteElement(x) {
  delarray.splice(x, 1);

  console.log("After", delarray);
}
deleteElement(5);

//program 11
//Find frequency of Array

var frearray = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 2, 3];
for (let x = 0; x < frearray.length; x++) {
  var frequency = 0;
  for (let y = 0; y < frearray.length; y++) {
    if (frearray[x] == frearray[y]) {
      frequency++;
      frearray.splice(y, 1);
    }
  }
  console.log(frearray[x], "is repeated ", frequency, " time");
}

//program 12
// print all unique element in array

var uniarray = [1, 2, 3, 4, 5, 1, 2, 3, 4, 1, 2, 3, 6, 7, 8, 9];
if (uniarray == 0) {
  console.log("There Is No Element In Array");
} else {
  for (let x = 0; x < uniarray.length; x++) {
    var unique = 0;
    for (let y = 0; y < uniarray.length; y++) {
      if (uniarray[x] == uniarray[y]) {
        unique++;
      }
    }

    if (unique == 1) {
      console.log(uniarray[x], " Is Unique Element In Array");
    }
  }
}

//program 13
//js program to count total number of duplicate elements in an array.
var duparray = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 2];
var duplication = 0;
for (let x = 0; x < duparray.length; x++) {
  for (let y = x + 1; y < duparray.length; y++) {
    if (duparray[x] == duparray[y]) {
      duplication++;
      duparray.splice(y, 1);
    }
  }
}
console.log("total number of duplicate elements in an array is ", duplication);

//program 14
//Write a js program to delete all duplicate elements from an array.
var dupliarray = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 2, 6, 7, 8, 7, 9, 8, 0, 0];
console.log("Before Deleting Duplicate Element ", dupliarray);

for (let x = 0; x < dupliarray.length; x++) {
  for (let y = x + 1; y < dupliarray.length; y++) {
    if (dupliarray[x] == dupliarray[y]) {
      dupliarray.splice(y, 1);
    }
  }
}
console.log("After Deleting Duplicate Element ", dupliarray);

//program 15
//Write a js program to merge two array to third array.

var merarray1 = [1, 2, 3, 4, 5];
var merarray2 = [6, 7, 8, 9, 10];
var third = [];
for (let x = 0; x < merarray1.length; x++) {
  third.push(merarray1[x]);
}
for (let x = 0; x < merarray2.length; x++) {
  third.push(merarray2[x]);
}
console.log("After Merge", third);

//program 16
//Write a js program to find reverse of an array
var revarray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Before Reverse The Array", revarray);
var reverse = [];
for (let x = revarray.length - 1; x >= 0; x--) {
  reverse.push(revarray[x]);
}
console.log("After Reverse The Array", reverse);

//program 17
//Write a js program to put even and odd elements of array in two separate array.
var mainarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var evenarray = [];
var oddarray = [];
for (let x = 0; x < mainarray.length; x++) {
  if (mainarray[x] % 2 == 0) {
    evenarray.push(mainarray[x]);
  } else {
    oddarray.push(mainarray[x]);
  }
}
console.log("Even array ", evenarray);
console.log("Odd array ", oddarray);

//program 18
//Write a js program to search an element in an array.

var serarray = [1, 2, 3, 4, 5, 6, 7, 8, 2, 9];

function search(y) {
  var incre = 0;
  for (let x = 0; x < serarray.length; x++) {
    if (y == serarray[x]) {
      incre++;
      console.log("Number is found at index number ", x);
    }
  }
  if (incre == 0) {
    console.log("Number is not found in Array");
  }
}
search(5);

//program 19
//Write a js program to sort array elements in ascending or descending order.

//Ascending Order
function ascend() {
  var sorarray = [2, 1, 37, 212, 0, 54, 65, 34, 432];
  var ascending = [];
  var z = sorarray.length;
  for (let y = 0; y < z; y++) {
    var min = sorarray[0];
    for (let x = 1; x < sorarray.length; x++) {
      if (sorarray[x] < min) {
        min = sorarray[x];
      }
    }
    for (let a = 0; a < sorarray.length; a++) {
      if (min == sorarray[a]) {
        sorarray.splice(a, 1);
      }
    }
    ascending.push(min);
  }
  console.log("In Ascending Order",ascending);
}

//Decending Order
function decend() {
  var sorarray = [2, 0, 1, 37, 212, 54, 65, 34, 432];
  var decending = [];
  var z = sorarray.length;
  for (let y = 0; y < z; y++) {
    var max = sorarray[0];
    for (let x = 1; x < sorarray.length; x++) {
      if (sorarray[x] > max) {
        max = sorarray[x];
      }
    }
    for (let a = 0; a < sorarray.length; a++) {
      if (max == sorarray[a]) {
        sorarray.splice(a, 1);
      }
    }
    decending.push(max);
  }
  console.log("In Decending Order",decending);
}

ascend();
decend();

//program 20
//Write a js program to sort even and odd elements of array separately.
function sortEvenOdd() {
    
    var mainarray = [1, 12, 5, 14, 3, 6, 7, 8, 9, 10];
    var even = [];
    var odd = [];
    for (let x = 0; x < mainarray.length; x++) {
      if (mainarray[x] % 2 == 0) {
        even.push(mainarray[x]);
      } else {
        odd.push(mainarray[x]);
      }
    }
    even.sort(function(a, b) {return a - b;});
    odd.sort(function(a, b) {return a - b;});
    mainarray=even.concat(odd)
    console.log("Sorted Even And Odd Number ",mainarray);
}
sortEvenOdd()


// program 21
// Write a js program to left rotate an array.
var rotarray=[1,2,3,4,5,6]
function rotateLeft(a) {
    var length=a.length
    var rotat=a[0]
    for(let x=0;x<a.length;x++){
        a[x]=a[x+1]
    }
    a[length-1]=rotat
    console.log("After Left Rotation",a);
    
}
rotateLeft(rotarray)
rotateLeft(rotarray)

// program 22
// Write a js program to right rotate an array.
var rigarray=[1,2,3,4,5,6]
function rotateRight(a) {
    var lengt=a.length
    var rotat=a[lengt-1]
    for(let x=lengt-1;x>=0;x--){
        a[x]=a[x-1]
    }
    a[0]=rotat
    console.log("After Right Rotation",a);
    
}
rotateRight(rigarray)
rotateRight(rigarray)


// program 23
// Write a js program to print day of week name using switch case.
let day=2
// switch(new Date().getDay())      to get current day
switch (day)
 {
    case 0:
        console.log("Today Is Sunday");
        break;
    case 1:
        console.log("Today Is Monday");
        break;
    case 2:
        console.log("Today Is Tuesday");
        break;
    case 3:
        console.log("Today Is Wednesday");
        break;
    case 4:
        console.log("Today Is Thursday");
        break;
    case 5:
        console.log("Today Is Friday");
        break;
    case 6:
        console.log("Today Is Saturday");
        break;

    default:
        console.log("Input Valid number from 1-7");
        break;
}


// program 24
// Write a js program print total number of days in a month using switch case.
 var month=11
switch (month) {
    case 1:
        console.log("There Is 31 Days In This Month");
        break;
    case 2:
        console.log("There Is 28 Days In This Month");
        break;
    case 3:
        console.log("There Is 31 Days In This Month");
        break;
    case 4:
        console.log("There Is 30 Days In This Month");
        break;
    case 5:
        console.log("There Is 31 Days In This Month");
        break;
    case 6:
        console.log("There Is 30 Days In This Month");
        break;
    case 7:
        console.log("There Is 30 Days In This Month");
        break;
    case 8:
        console.log("There Is 31 Days In This Month");
        break;
    case 9:
        console.log("There Is 30 Days In This Month");
        break;
    case 10:
        console.log("There Is 31 Days In This Month");
        break;
    case 11:
        console.log("There Is 30 Days In This Month");
        break;
    case 12:
        console.log("There Is 31 Days In This Month");
        break;

    default:
        console.log("Input Valid Month");
        break;
}


// program 25
// Write a js program to check whether an alphabet is vowel or consonant using switch case
var alpha='o'
if (alpha>='a' || alpha>='A') {
switch (alpha) {
    case 'a' :
        console.log(alpha," Is Vowel");
        break;
    case 'e':
        console.log(alpha," Is Vowel");
        break;
    case 'i':
        console.log(alpha," Is Vowel");
        break;
    case 'o':
        console.log(alpha," Is Vowel");
        break;
    case 'u':
        console.log(alpha," Is Vowel");
        break;
    case 'A' :
        console.log(alpha," Is Vowel");
        break;
    case 'E':
        console.log(alpha," Is Vowel");
        break;
    case 'I':
        console.log(alpha," Is Vowel");
        break;
    case 'O':
        console.log(alpha," Is Vowel");
        break;
    case 'U':
        console.log(alpha," Is Vowel");
        break;

    default:
        console.log(alpha," Is Consonent");
        break;
}
}
else{
    console.log("Please Input An Alphabat");
}


// program 26
// Write a js program to find maximum between two numbers using switch case.

var numb1=12
var numb2=120
switch (numb1>numb2) {
    case true:
        console.log(numb1," Is greater");
        break;
}
switch (numb1<numb2) {
    case true:
        console.log(numb2," Is greater");
        break;
}
switch (numb1==numb2) {
    case true:
        console.log(" Both Are Equal");
        break;
}


// program 27
// Write a js program to check whether a number is even or odd using switch case.
 var numbe=11
 switch (numbe%2==0) {
     case true:
         console.log(numbe," Is Even");
         break;
 
     default:
         console.log(numbe," Is Odd");
         break;
 }



//  program 28
// Write a js program to check whether a number is positive, negative or zero using switch case.
 var number1=8
 switch (number1>0) {
     case true:
         console.log(number1," Is Positive");
         break;
 }
 switch (number1<0) {
     case true:
         console.log(number1," Is Negative");
         break;
 }
 switch (number1==0) {
     case true:
         console.log(number1," Is Zero");
         break;
 }


//  program 29
// Write a js program to find roots of a quadratic equation using switch case

var A=1
var B=4
var C=4
var disc=B*B - 4*A*C
switch (disc>0) {
    case true:
        var root1=(-B+(B*B-4*A*C)^1/2)/2*A
        var root2=(-B-(B*B-4*A*C)^1/2)/2*A
        console.log("Roots Are ",root1," ",root2);
        break;
}
switch (disc<0) {
    case true:
        var root1=((-B/2*A)+(-B*B+4*A*C)^1/2)/2*A
        var root2=((-B/2*A)-(-B*B+4*A*C)^1/2)/2*A
        console.log("Roots Are ",root1," ",root2);
        break;
        case false:
            var root=-B/2*A
            console.log("Roots Is ",root);
}