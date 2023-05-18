// Import the kNN function and calculateDistance function
const { kNN, calculateDistance } = require('./KNN'); // Assuming the functions are in a separate file called kNN.js

describe('kNN Algorithm', () => {
  const labeledData = [
    { features: [1.0, 1.1], class: 'A' },
    { features: [1.0, 1.0], class: 'A' },
    { features: [0.0, 0.0], class: 'B' },
    { features: [0.0, 0.1], class: 'B' }
  ];
  const inputPoint = [0.5, 0.5];
  const k = 3;

  it('should classify the input point correctly', () => {
    const predictedClass = kNN(inputPoint, labeledData, k);
    expect(predictedClass).to.equal('B');
  });

  it('should calculate the distance between two points correctly', () => {
    const point1 = { features: [1.0, 1.0] };
    const point2 = { features: [2.0, 2.0] };
    const distance = calculateDistance(point1, point2);
    expect(distance).to.be.closeTo(1.414, 0.001); // Assuming a tolerance of 0.001
  });

  it('should calculate the distance between two points correctly', () => {
    const point1 = { features: [1.0, 1.0] };
    const point2 = { features: [2.0, 2.0] };
    const distance = calculateDistance(point1, point2);
    expect(distance).toBeCloseTo(1.414, 3); // Assuming a tolerance of 0.001 and 3 decimal places
  });
});




////////////CODIUM TESTS///////////////////////
// const kNN = require("./KNN");

// it("test_kNN_valid_input", () => {
//   // Arrange
//   const inputPoint = [1, 2, 3];
//   const labeledData = [
//       { point: [1, 2, 3], class: "A" },
//       { point: [4, 5, 6], class: "B" },
//       { point: [7, 8, 9], class: "A" }
//   ];
//   const k = 2;

//   // Act
//   const result = kNN(inputPoint, labeledData, k);

//   // Assert
//   expect(result).toBe("A");
// });

// it("test_kNN_no_modification", () => {
//     // Arrange
//     const inputPoint = [1, 2, 3];
//     const labeledData = [
//         { point: [1, 2, 3], class: "A" },
//         { point: [4, 5, 6], class: "B" },
//         { point: [7, 8, 9], class: "A" }
//     ];
//     const k = 2;
//     const originalLabeledData = JSON.parse(JSON.stringify(labeledData));

//     // Act
//     kNN(inputPoint, labeledData, k);

//     // Assert
//     expect(labeledData).toEqual(originalLabeledData);
// });

// it("test_kNN_empty_labeledData", () => {
//   // Arrange
//   const inputPoint = [1, 2, 3];
//   const labeledData = [];
//   const k = 2;

//   // Act
//   const result = kNN(inputPoint, labeledData, k);

//   // Assert
//   expect(result).toBeNull();
// });

// it("test_kNN_different_lengths", () => {
//   // Arrange
//   const inputPoint = [1, 2, 3];
//   const labeledData = [
//       { point: [1, 2], class: "A" },
//       { point: [4, 5], class: "B" },
//       { point: [7, 8], class: "A" }
//   ];
//   const k = 2;

//   // Act
//   const result = kNN(inputPoint, labeledData, k);

//   // Assert
//   expect(result).toBeNull();
// });

// it("test_kNN_ties", () => {
//   // Arrange
//   const inputPoint = [1, 2, 3];
//   const labeledData = [
//       { point: [1, 2, 3], class: "A" },
//       { point: [4, 5, 6], class: "B" },
//       { point: [7, 8, 9], class: "B" }
//   ];
//   const k = 2;

//   // Act
//   const result = kNN(inputPoint, labeledData, k);

//   // Assert
//   expect(result).toBe("B");
// });

// it("test_kNN_invalid_k", () => {
//   // Arrange
//   const inputPoint = [1, 2, 3];
//   const labeledData = [
//       { point: [1, 2, 3], class: "A" },
//       { point: [4, 5, 6], class: "B" },
//       { point: [7, 8, 9], class: "A" }
//   ];
//   const k1 = 0;
//   const k2 = labeledData.length + 1;

//   // Act
//   const result1 = kNN(inputPoint, labeledData, k1);
//   const result2 = kNN(inputPoint, labeledData, k2);

//   // Assert
//   expect(result1).toBeNull();
//   expect(result2).toBeNull();
// });