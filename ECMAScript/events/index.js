//Create a custom eventing library out of the Events class
//Methods include "on", "trigger", "off"
//Events can be registered
//Multiple events can be registered then triggered, triggered multiple times
//Events can have different names
//Events can be toggled off

//Create a class function
//Use a constructor
//create methods (which may need if else statements)
//a method to turn off all events
//a way to register each event/method in an array

class Events {
  constructor() {
    //Data storage mechanism
    this.events = {};
  }
  
  //Register an event handler. Register multiple callback to this same event name. 
  on(eventName, callback) {


    //EventName key to the this.events object and an array including callback as the value
    //Check if eventName is already registered on this.events object
    if (this.events[eventName]) {

       //If eventName is registered and added to an array then push callback on to that array
       this.events[eventName].push(callback);
    } else {
      //Initiating "on" with a key of eventName set to one element array which is callback
      this.events[eventName] = [callback];
    }
  }

  //Trigger all callbacks associated with a given name
  trigger(eventName) {

    //If the event name is already registered do this
    if (this.events[eventName]) {

       //Loop through to execute every callback in the array of values
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