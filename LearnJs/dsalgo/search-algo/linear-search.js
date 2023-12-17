/*
How do we search?

- Given an array, the simplest way to search for a value is to look at every element in an array
    and check if it's the value we want
- javascript has many search methods on arrays
    - indexOf
    - find
    - findIndex
    - includes
*/

let state = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttarakhand",
  "Uttar Pradesh",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Lakshadweep",
  "Puducherry",
];

// Big O - O(n) as number of array grows the time increases
const linearSearch = function(arr, value){
    let index = -1
    if(arr.length){
        arr.forEach((element, i) => {
            if(element === value){
                 index = i;
            }
        });
    }
    return index
}

const index = linearSearch(state, 'Tripura');  

console.log(index);