// Test File for JS
const num = [1, 2, 3, 4, 5, 6];

const squared = num.map((el) => {
  return el * el;
});
console.log(squared);

// Array.Map function to map a lower case string array to Capitalized Case
const lowerName = ['franklin', 'anna', 'dominic', 'maria', 'dominica'];
const upperName = lowerName.map((el) => {
  const word = el.split('');
  el = word.map((item, i) => {
    if (i === 0) {
      return item.toUpperCase();
    } else {
      return item;
    }
  });
  el = el.join('');
  return el;
});
console.log(upperName);
 

// Simple Method using index and Slice Method to Achieve the above
const names = lowerName.map((name) => {
    return name[0].toUpperCase() + name.slice(1)
})
console.log(names)

