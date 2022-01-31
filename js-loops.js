// while loop
// do while loop
// for loop
// if..else if..else

let a = 0;

// condition should always be boolean.
// true or false
// while (a > 0 && a < 20) {
//     a++;
    
//     if (a % 2 == 0) {
//         continue;
//     }
    
//     console.log(a);
    
//     if (a == 21) {
//         break;
//     }
// }

// do {
//     // console.log(a);
// } while (a > 0 && a < 20);

// // 0,1,2,3,4,5,..,11
// var months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// var monthsStr = ['Jan', 'Feb', '...', 'Nov', 'Dec'];

// // To add new element after the last element.
// var pushElem = months.push(13);
// console.log('pushElem = ' + pushElem);
// console.log(months);

// // To remove the element from last index.
// var popElem = months.pop();
// console.log('popElem = ' + popElem);
// console.log(months);

// // To fetch one or multiple elements from given range.
// var sliceElem = months.slice(5, 8);
// console.log('sliceElem = ' + sliceElem);
// console.log(months);

// var spliceElem = months.splice(5, 3);
// console.log('spliceElem = ' + spliceElem);
// console.log(months);

// 0,1,2,3,4,5,..,11
// var months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// var monthsStr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'
//                     , 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Mar'];

// var index = monthsStr.indexOf('Jul');
// var spliceElem = monthsStr.splice(index, 4);
// console.log(index);
// console.log('spliceElem = ', spliceElem);
// console.log(monthsStr);
// monthsStr.reverse();
// monthsStr.

// var index = monthsStr.indexOf('Mar');
// var lastIndex = monthsStr.lastIndexOf('Mar');

// console.log(index);             // 2
// console.log(lastIndex);         // 11,12?

// console.log(monthsStr.length);

// for (let index = 20; index > 0; index--) {
//     console.log(index);
// }

// console.log('loop finished.');


let months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let monthsStr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'
                    , 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Mar'];

let monthAtFive = months[5];
let monthStrAtSeven = monthsStr[7];

// console.log(monthAtFive);                       // 6
// console.log(monthStrAtSeven);                   // Aug

// monthsStr - print each element one by one.
// Jan
// Feb
// Mar

// for (let i = 0; i < monthsStr.length; i++) {
//     // console.log(i);
//     console.log(monthsStr[i]);
// }

let i = 0;

while (i < monthsStr.length) {
   console.log(monthsStr[i]);
   i++;
}