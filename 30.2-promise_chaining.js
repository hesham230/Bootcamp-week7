// Helper function to check if array elements are only Strings!
function check(arr) {
  for(let i=0; i<arr.length; i++){
    if(typeof arr[i] != "string") {
       return false;
     }
  }
  return true;
 }

// Sort the array
function sortWords(arr){
  return arr.sort();
}

// make all Capitalize
function makeAllCaps(arr) {
  return new Promise((resolve, reject) => {
    if(!check(arr)){
      reject('array must contains strings only!');
    }else{
      sortWords(arr);
      arr.forEach(e => {
        resolve(console.log(e.toUpperCase()));
      })
    } 

  });
}


const arr1 = ["ccc", "bbb", "aaa"];
const arr2 = ["ccc", 5,"bbb", "aaa"];

 // invoke with strings only
makeAllCaps(arr1)
  .then((value) => {
    console.log(value);
  })
  .catch((err) => console.log(err));

console.log('-------------------------');

// invoke with different data types only
  makeAllCaps(arr2)
  .then((value) => {
    console.log(value);
  })
  .catch((err) => console.log(err));

