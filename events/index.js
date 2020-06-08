//Create a custom eventing library out of the events class
//Methods include "on", "trigger", "off"
//Events can be registered
//Multiple events can be registered then triggered, triggered multiple times
//Events can have different names
//Events can be toggled off

class Events {
  constructor() {
    //Data storage mechanism
    this.events = {};
  }
  //Register an event handler. Register multiple callback to this same event name. 
  on(eventName, callback) {
    //Add eventName as a key to the this.events object and an array including callback as the value
    //Check if eventName is already registered on this.events object
    if (this.events[eventName]) {
       //If eventName is registered then there must be an array so we can push this callback on to that array
       this.events[eventName].push(callback);
    } else {
      //If there is no event yet, initiate on with a key of eventName set to one element array which is callback
      this.events[eventName] = [callback];
    }
  }

  //Trigger all callbacks associated with a given name
  trigger(eventName) {
    //If the event name is already registered do this
    if (this.events[eventName]) {
       //Loop through and execute every callback in the array of values
       for (let cb of this.events[eventName]) {
           cb();
       }
    }
  }

  //Toggle off events, remove all event handlers asociated with the given event name
  off(eventName) {
    //this.events[eventName] = []; but it leaves an empty array we arn't making any use of..
    //Better way is to use delete
    delete this.events[eventName]
  }

}

module.exports = Events;