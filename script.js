var animals = ['dog', 'cat', 'rabbit', 'hamster', 'flea', 'elephant', 'mouse'];

var i;

for (i = 0; i < animals.length; i = i + 1) {
  var animal = animals[i];
  console.log(animal);
}

function sortNumbersAscending(a, b) {
  return a - b ;
}

var nums = [1, 5, 3, 19, 2, 10];

nums.sort(sortNumbersAscending);

console.log(nums);

var nums2 = [1, 5, 3, 19, 10, 11];

function sortNumbersDescending(a, b) {
  return b - a ;
}

nums2.sort(sortNumbersDescending);

console.log(nums2)
