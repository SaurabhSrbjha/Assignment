export const Utils = {

// Function to calculate mean
 calculateMean :(values)=> {
    var sum = String(values.reduce((acc, val) => acc + val, 0));
 const parts = sum.split(".");
const finalVal = Number(parts[0] + "." + parts[1]);
    return finalVal / values.length;
  },
  
  // Function to calculate median
 calculateMedian :(values)=> {
    const sortedValues = values.sort((a, b) => a - b);
    const mid = Math.floor(sortedValues.length / 2);
    if (sortedValues.length % 2 === 0) {
      return (sortedValues[mid - 1] + sortedValues[mid]) / 2;
    } else {
      return sortedValues[mid];
    }
  },
  
  // Function to calculate mode
   calculateMode :(values)=> {
    const frequencyMap = {};
    values.forEach(val => {
      frequencyMap[val] = (frequencyMap[val] || 0) + 1;
    });
    let mode;
    let maxFrequency = -1;
    for (const val in frequencyMap) {
      if (frequencyMap[val] > maxFrequency) {
        mode = val;
        maxFrequency = frequencyMap[val];
      }
    }
    return mode;
  }
}