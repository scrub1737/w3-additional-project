/* Even Number Range

    Write a function that accepts two numbers. 
    The function should return an array of all even numbers between the two
    arguments inclusively.

    console.log(evenNumberRange(-3, 2)); // prints [-2, 0, 2]
    console.log(evenNumberRange(22, 25)); // prints [22, 24]
    console.log(evenNumberRange(2, 0)); // prints []
*/

function evenNumberRange(num1, num2) {
    // if (num1 >= num2) {
    //     return [];
    // }
    // if (num1 % 2 === 0) {
    //     return [num1, ...evenNumberRange(num1 + 2, num2)];
    // } else {
    //     num1 = num1 + 1
    //     return [num1, ...evenNumberRange(num1 + 1, num2)];
    // }

    const result = [];
    for (let i = num1; i <= num2; i++) {
        if (i % 2 === 0){
            result.push(i)
        }
    }
    return result;
}

// function evenNumberRange(num1, num2) {
//     const result = [];
//     for (let i = num1; i <= num2; i++) {
//         if (i % 2 === 0) {
//             result.push(i);
//         }
//     }
//     return result;
// }

// console.log(evenNumberRange(-3, 2)); // prints [-2, 0, 2]
// console.log(evenNumberRange(22, 25)); // prints [22, 24]
// console.log(evenNumberRange(2, 0)); // prints []

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = evenNumberRange;
} catch (e) {
    module.exports = null;
}