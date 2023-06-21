// Define the environment
// The number of states in the environment
const numStates = 6;

// The number of possible actions in the environment
const numActions = 2;

// The rewards matrix defines the immediate rewards for transitioning between states.
// It is a 2D array where each row represents a state, and each column represents an action.
// The value at rewards[state][action] represents the reward for taking 'action' in 'state'.
// -Infinity represents invalid state-action pairs.
const rewards = [
  [0, -Infinity, -Infinity, -Infinity, 0, -Infinity],
  [-Infinity, 0, -Infinity, 0, -Infinity, 100],
  [-Infinity, -Infinity, 0, 0, -Infinity, -Infinity],
  [-Infinity, -Infinity, 0, 0, -Infinity, -Infinity],
  [0, -Infinity, -Infinity, -Infinity, 0, 100],
  [-Infinity, 0, -Infinity, -Infinity, -Infinity, 100],
];

// Initialize the Q-values

// The Q-values matrix is a 2D array where each row represents a state, and each column represents an action.
// The value at qValues[state][action] represents the learned Q-value for taking 'action' in 'state'.
// Initially, all Q-values are set to 0.
const qValues = [];
for (let i = 0; i < numStates; i++) {
  qValues[i] = new Array(numActions).fill(0);
}

// Q-learning parameters

// The learning rate determines how much the agent updates the Q-values based on new information.
const learningRate = 0.8;

// The discount factor determines the importance of future rewards compared to immediate rewards.
const discountFactor = 0.95;

// The number of episodes determines how many times the agent interacts with the environment to learn.
const numEpisodes = 1000;

// Q-learning algorithm

// Iterate over a number of episodes
for (let episode = 0; episode < numEpisodes; episode++) {
  // Randomly initialize the current state
  let currentState = Math.floor(Math.random() * numStates);

  // Keep interacting with the environment until the goal state is reached (state 5)
  while (currentState !== 5) {
    // Get the possible actions in the current state
    const possibleActions = [];
    for (let action = 0; action < numActions; action++) {
      if (rewards[currentState][action] !== -Infinity) {
        possibleActions.push(action);
      }
    }

    // Choose a random action from the possible actions
    const randomIndex = Math.floor(Math.random() * possibleActions.length);
    const chosenAction = possibleActions[randomIndex];

    // Simulate the next state based on the chosen action
    const nextState = chosenAction;

    // Find the maximum Q-value in the next state
    const maxQValue = Math.max(...qValues[nextState]);

    // Get the current Q-value for the chosen action in the current state
    const currentQValue = qValues[currentState][chosenAction];

    // Get the immediate reward for the chosen action in the current state
    const reward = rewards[currentState][chosenAction];

    // Update the Q-value for the chosen action in the current state
    const update = reward + discountFactor * maxQValue - currentQValue;
    qValues[currentState][chosenAction] += learningRate * update;

    // Transition to the next state
    currentState = nextState;
  }
}

// Evaluate the learned policy

// Start from the initial state (state 0)
let currentState = 0;

// Store the optimal path from state 0 to state 5
const optimalPath = [currentState];

// Keep transitioning to the next state until the goal state (state 5) is reached
while (currentState !== 5) {
  // Choose the action with the highest Q-value in the current state
  const nextAction = qValues[currentState].indexOf(Math.max(...qValues[currentState]));

  // Transition to the next state
  currentState = nextAction;

  // Record the optimal path
  optimalPath.push(currentState);
}

// Print the learned Q-values
console.log('Learned Q-values:');
console.log(qValues);

// Print the optimal path
console.log('Optimal path:');
console.log(optimalPath);
