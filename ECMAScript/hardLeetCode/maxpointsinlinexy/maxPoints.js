// /**
//  * @param {number[][]} points
//  * @return {number}
//  */

function maxPoints(points) {
  let max = 0;

  for (let i = 0; i < points.length; i++) {
    let samePoints = 1;
    let slope = {};

    for (let j = i + 1; j < points.length; j++) {
      let m = points[j][0] - points[i][0] === 0 ? "inf" : (points[j][1] - points[i][1]) / (points[j][0] - points[i][0]);
      if (slope[m]) {
        slope[m]++;
      } else {
        slope[m] = 1;
      }
    }

    for (let m in slope) {
      samePoints = Math.max(samePoints, slope[m] + 1);
    }

    max = Math.max(max, samePoints);
  }

  return max;
}

module.exports = maxPoints;