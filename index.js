// console.log('***** Arrays *****');

// ******************************

// ! 1. Write a simple JavaScript program to join all elements of the following array into a string.
// ? Example: input =  ['Red', 'Green', 'White', 'Black']   => output= "Red,Green,White,Black"
const input = ['Red', 'Green', 'White', 'Black'];
const join = (arr) => arr.join(',');
console.log(join(input));

// ******************************

// ! 2. Write a JavaScript program to sort the items of an array.
// ? Example: input = [-3, 8, 7, 6, 5, -4, 3, 2, 1]  => output = [-4, -3, 1, 2, 3, 5, 6, 7, 8]
const numbers = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
const sort = (arr) => arr.sort((a, b) => a - b);
console.log(sort(numbers));
// ******************************

// ! 3. Write a JavaScript program to find the most frequent item of an array.
// ? Example: input = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3] => output = "a is repeated most"
var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var mf = 1;
var m = 0;
var item;

for (var i = 0; i < arr1.length; i++) {
    for (var j = i; j < arr1.length; j++) {
        if (arr1[i] == arr1[j]) m++;
        if (mf < m) {
            mf = m;
            item = arr1[i];
        }
    }

    m = 0;
}

console.log(item + " is repeated most , it is repeated " + mf + " times");

// ******************************

// ! 4. Given a list of numbers and a number k, return whether any two numbers from the list add up to k
// ? Example: input = [10, 15, 3, 7], k = 17 => output = true
const sum = (arr, k) => arr.reduce((a, b) => a + b, 0) === k;
console.log(sum([10, 15, 3, 7], 17));

// ******************************

// ! 5. Write a JavaScript function to find the difference of two arrays
// ? Example: input = difference([1, 2, 3], [100, 2, 1, 10]) => output = ["3", "10", "100"]
const difference = (arr1, arr2) => {
    return arr1.filter((x) => !arr2.includes(x));
}
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ******************************

// ! 6. Write a JavaScript program that square the value of every element in the array.
// ? Example: input = [1, 2, 3, 4, 5] => output = [1, 4, 9, 16, 25]
const square = (arr) => arr.map((x) => x * x);
console.log(square([1, 2, 3, 4, 5]));
// ******************************

// ! 7. he given input is a string of multiple words with a single space between each of them. Abbreviate the name and return the name initials.
// ? Example: input = "George Raymond Richard Martin" => output = "GRRM"
const abbreviate = (str) => {
    return str
        .split(" ")
        .map((x) => x[0])
        .join("");
}
console.log(abbreviate("George Raymond Richard Martin"));
