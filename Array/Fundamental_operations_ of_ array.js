/* 
   We can do many operation with arrays. Below given some of the fundamental operation of 
   array. 
   1. Declaration and initialization;
    
   const myArray = [1, 2, 3, 4, 5];

   2. Accessing Element: 

   const firstElement = myArray[0];// 1
   const secondElement = myArray[1];// 2

   3. Updating Elements: 

   myArray[2] = 10;//  updated array myArray = [1, 2, 10, 4, 5]

   4. Array Length:

   const length = myArray.length;
    
   5. Adding element to End:
   
   myArray.push(6); // myArray = [1, 2, 10, 4, 5, 6]

   6. Removing last element:

   const lastElement = myArray.pop(); // myArray = [1, 2, 10, 4, 5]

   7. Adding element to the Beginning 

   myArray.unshift(0);// myArray = [0, 1, 2, 10, 4, 5]

   8. Removing First element:

   const firstElement = myArray.shift();// myArray = [1, 2, 10, 4, 5]

   9. Iterating over Element:

   for (const element of myArray) {

  // Do something with each element

      }


   10. Array Mapping: 
       
   const squaredArray = myArray.map(element => element * element);


   11. Array filtering (Sum):

    const evenNumbers = myArray.filter(element => element % 2 === 0);

   12. Array Reduction: 

    const sum = myArray.reduce((accumulator, element) => accumulator + element, 0);
   
   13. Finding Index of an Element:

   const index = myArray.indexOf(3);

   14. Checking if an Element Exists:
   
   const exists = myArray.includes(3);

   15. Sorting Elements:

   const sortedArray = myArray.slice().sort((a, b) => a - b);
   
   16. Reversing Elements:
   
   const reversedArray = myArray.slice().reverse();

   17. Copying arrays:

            const copyOfArray = myArray.slice();
            // or using spread operator
            const anotherCopy = [...myArray];

    18. Removing Elements by Index:

                const indexToRemove = 2;
            myArray.splice(indexToRemove, 1);


    19. Creating a range of numbers:

                    const start = 1;
                const end = 5;
                const rangeArray = Array.from({ length: end - start + 1 }, (_, index) => start + index);
                // Output: [1, 2, 3, 4, 5]


    20. Checking if All Elements Satisfy a Condition:

    const allPositive = myArray.every(element => element > 0);

    21. Checking if Any Element Satisfies a Condition:

    const hasNegative = myArray.some(element => element < 0);

    22. Finding the Maximum Element without Sorting:

    const maxElement = Math.max(...myArray);

    23. Finding the Minimum Element without Sorting:

    const minElement = Math.min(...myArray);


*/

/*
// array mapping 

const originalArray = [1, 2, 3, 4, 5];

const squaredArray = originalArray.map(element => element * element);

console.log(squaredArray);

// Output: [1, 4, 9, 16, 25]

*/

