// Define the environment
const numStates = 6;
const numActions = 2;
const rewards = [
  [0, -Infinity, -Infinity, -Infinity, 0, -Infinity],
  [-Infinity, 0, -Infinity, 0, -Infinity, 100],
  [-Infinity, -Infinity, 0, 0, -Infinity, -Infinity],
  [-Infinity, -Infinity, 0, 0, -Infinity, -Infinity],
  [0, -Infinity, -Infinity, -Infinity, 0, 100],
  [-Infinity, 0, -Infinity, -Infinity, -Infinity, 100],
];

// Initialize the Q-values
const qValues = [];
for (let i = 0; i < numStates; i++) {
  qValues[i] = new Array(numActions).fill(0);
}

// Q-learning parameters
const learningRate = 0.8;
const discountFactor = 0.95;
const numEpisodes = 1000;

// Q-learning algorithm
for (let episode = 0; episode < numEpisodes; episode++) {
  let currentState = Math.floor(Math.random() * numStates);

  while (currentState !== 5) {
    const possibleActions = [];
    for (let action = 0; action < numActions; action++) {
      if (rewards[currentState][action] !== -Infinity) {
        possibleActions.push(action);
      }
    }

    const randomIndex = Math.floor(Math.random() * possibleActions.length);
    const chosenAction = possibleActions[randomIndex];

    const nextState = chosenAction;
    const maxQValue = Math.max(...qValues[nextState]);
    const currentQValue = qValues[currentState][chosenAction];

    const reward = rewards[currentState][chosenAction];
    const update = reward + discountFactor * maxQValue - currentQValue;
    qValues[currentState][chosenAction] += learningRate * update;

    currentState = nextState;
  }
}

// Evaluate the learned policy
let currentState = 0;
const optimalPath = [currentState];
while (currentState !== 5) {
  const nextAction = qValues[currentState].indexOf(Math.max(...qValues[currentState]));
  currentState = nextAction;
  optimalPath.push(currentState);
}

console.log('Learned Q-values:');
console.log(qValues);
console.log('Optimal path:');
console.log(optimalPath);