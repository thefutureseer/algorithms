
// Here's a simple pseudocode representation 
// of the k-NN algorithm:

// function kNN(inputPoint, labeledData, k) {
//   let distances = [];

//   // Calculate the distance between the input point and every labeled data point
//   for (let i = 0; i < labeledData.length; i++) {
//     let labeledPoint = labeledData[i];
//     let distance = calculateDistance(inputPoint, labeledPoint);
//     distances.push({ point: labeledPoint, distance: distance });
//   }

//   // Sort the labeled data points by distance to the input point
//   distances.sort((a, b) => a.distance - b.distance);

//   // Select the k nearest neighbors
//   let neighbors = distances.slice(0, k);

//   // Assign the input point to the class that is most common among the k nearest neighbors
//   let classCounts = {};
//   for (let i = 0; i < neighbors.length; i++) {
//     let neighbor = neighbors[i];
//     let neighborClass = neighbor.point.class;
//     if (neighborClass in classCounts) {
//       classCounts[neighborClass]++;
//     } else {
//       classCounts[neighborClass] = 1;
//     }
//   }
//   let predictedClass = Object.keys(classCounts).reduce((a, b) => classCounts[a] > classCounts[b] ? a : b);

//   return predictedClass;
// }

// function calculateDistance(point1, point2) {
//   let sum = 0;
//   for (let i = 0; i < point1.length; i++) {
//     sum += Math.pow(point1[i] - point2[i], 2);
//   }
//   return Math.sqrt(sum);
// }



function kNN(inputPoint, labeledData, k) {
  let distances = [];

  // Calculate the distance between the input point and every labeled data point
  for (let i = 0; i < labeledData.length; i++) {
    let labeledPoint = labeledData[i];
    let distance = calculateDistance(inputPoint, labeledPoint);
    distances.push({ point: labeledPoint, distance: distance });
  }

  // Sort the labeled data points by distance to the input point
  distances.sort((a, b) => a.distance - b.distance);

  // Select the k nearest neighbors
  let neighbors = distances.slice(0, k);

  // Assign the input point to the class that is most common among the k nearest neighbors
  let classCounts = {};
  for (let i = 0; i < neighbors.length; i++) {
    let neighbor = neighbors[i];
    let neighborClass = neighbor.point.class;
    if (neighborClass in classCounts) {
      classCounts[neighborClass]++;
    } else {
      classCounts[neighborClass] = 1;
    }
  }
  let predictedClass = Object.keys(classCounts).reduce((a, b) => classCounts[a] > classCounts[b] ? a : b);

  return predictedClass;
}

function calculateDistance(point1, point2) {
  if (point1.features.length !== point2.features.length) {
    throw new Error('Point dimensions do not match');
  }

  let squaredSum = 0;
  for (let i = 0; i < point1.features.length; i++) {
    const diff = point1.features[i] - point2.features[i];
    squaredSum += diff * diff;
  }

  const distance = Math.sqrt(squaredSum);
  return distance;
};


// Example usage:
const labeledData = [
  { features: [1.0, 1.1], class: 'A' },
  { features: [1.0, 1.0], class: 'A' },
  { features: [0.0, 0.0], class: 'B' },
  { features: [0.0, 0.1], class: 'B' }
];
const inputPoint = [0.5, 0.5];
const k = 3;

const predictedClass = kNN(inputPoint, labeledData, k);
console.log(predictedClass); // Output: 'B'

module.exports = {kNN, calculateDistance};

// Example usage:
// let labeledData = [
//   { features: [1.0, 1.1], class: 'A' },
//   { features: [1.0, 1.0], class: 'A' },
//   { features: [0.0, 0.0], class: 'B' },
//   { features: [0.0, 0.1], class: 'B' }
// ];
// let inputPoint = [0.5, 0.5];
// let k = 3;
// let predictedClass = kNN(inputPoint, labeledData, k);
// console.log(predictedClass); // Output: "B"

// This implementation takes an 
// input point as an array of features, 
// a dataset of labeled data points 
// with features and classes, and a 
// value for k. It returns the predicted 
// class of the input point based on 
// the k-NN algorithm.

// Note that this implementation uses 
// Euclidean distance to calculate 
// the distance between points, but 
// other distance metrics can also be 
// used depending on the application.