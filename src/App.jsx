import wineData from '../wine-data.json';
import { Flavanoids } from './Flavanoids';
import { GammaStatistics } from './Gamma';
 
const data = wineData;
// Function to calculate mean
function calculateMean(values) {
  const sum = values.reduce((acc, val) => acc + val, 0);
  return sum / values.length;
}

// Function to calculate median
function calculateMedian(values) {
  const sortedValues = values.sort((a, b) => a - b);
  const mid = Math.floor(sortedValues.length / 2);
  if (sortedValues.length % 2 === 0) {
    return (sortedValues[mid - 1] + sortedValues[mid]) / 2;
  } else {
    return sortedValues[mid];
  }
}

// Function to calculate mode
function calculateMode(values) {
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

// Function to calculate class-wise mean, median, and mode of Flavanoids
function calculateFlavanoidsStats(data) {
  const classes = {};
  data.forEach(checkSaurabh => {
    const alcoholClass = checkSaurabh["Alcohol"];
    const flavanoids = checkSaurabh["Flavanoids"];
    if (!classes[alcoholClass]) {
      classes[alcoholClass] = [];
    }
    classes[alcoholClass].push(flavanoids);
  });

  const results = [];
  for (const alcoholClass in classes) {
    const flavanoidsData = classes[alcoholClass];
    const mean = calculateMean(flavanoidsData);
    const median = calculateMedian(flavanoidsData);
    const mode = calculateMode(flavanoidsData);
    results.push({
      alcoholClass,
      mean,
      median,
      mode
    });
  }
  return results;
}
const flavanoidsStats = calculateFlavanoidsStats(wineData); 

// Function to calculate Gamma property for each point in the dataset
function calculateGamma(data) {
  return data.map(entry => {
    const gamma = (entry["Ash"] * entry["Hue"]) / entry["Magnesium"];
    return { ...entry, Gamma: gamma };
  });
}

// Function to calculate class-wise mean, median, and mode of Gamma
function calculateGammaStats(data) {
  const classes = {};
  data.forEach(entry => {
    const alcoholClass = entry["Alcohol"];
    const gamma = entry["Gamma"];
    if (!classes[alcoholClass]) {
      classes[alcoholClass] = [];
    }
    classes[alcoholClass].push(gamma);
  });

  const results = [];
  for (const alcoholClass in classes) {
    const gammaData = classes[alcoholClass];
    const mean = calculateMean(gammaData);
    const median = calculateMedian(gammaData);
    const mode = calculateMode(gammaData);
    results.push({
      alcoholClass,
      mean,
      median,
      mode
    });
  }
  return results;
}

// Calculate Gamma for each point in the dataset
const wineDataWithGamma = calculateGamma(wineData);

// Calculate class-wise mean, median, and mode of Gamma for the entire dataset
const gammaStats = calculateGammaStats(wineDataWithGamma);
 

function App() {
  return (
     <>
     <Flavanoids data={flavanoidsStats} />
     <GammaStatistics data={gammaStats} />
     </>
  );
}

export default App;
