// With a Proxy object, we get more control over the interactions with certain objects. 
// A proxy object can determine the behavior whenever we're interacting with the object, for example when we're getting a value, or setting a value.

/*
Generally speaking, a proxy means a stand-in for someone else. Instead of speaking to that person directly, 
you'll speak to the proxy person who will represent the person you were trying to reach. 
The same happens in JavaScript: instead of interacting with the target object directly, we'll interact with the Proxy object  

*/
const target = {
    message1: "hello",
    message2: "everyone",
  };
  
  const handler2 = {
    get(target, prop, receiver) {
        console.log(target);
        console.log(receiver);
        console.log(target[prop]);
      return `${target.prop}`;
    },
  };
  
  const proxy2 = new Proxy(target, handler2);

  proxy2.message1;

  const person = {
    name: "John Doe",
    age: 42,
    nationality: "American"
  };
  
  const personProxy = new Proxy(person, {
    get: (obj, prop) => {
      console.log(`The value of ${prop} is ${obj[prop]}`);
    },
    set: (obj, prop, value) => {
      console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
      obj[prop] = value;
      return true;
    }
  });

//   A proxy can be useful to add validation. A user shouldn't be able to change person's age to a string value, or give them an empty name. Or if the user is trying to access a property on the object that doesn't exist, we should let the user know.\
  personProxy.name

  const personProxy1 = new Proxy(person, {
    get: (obj, prop) => {
      if (!obj[prop]) {
        console.log(
          `Hmm.. this property doesn't seem to exist on the target object`
        );
      } else {
        console.log(`The value of ${prop} is ${obj[prop]}`);
      }
    },
    set: (obj, prop, value) => {
      if (prop === "age" && typeof value !== "number") {
        console.log(`Sorry, you can only pass numeric values for age.`);
      } else if (prop === "name" && value.length < 2) {
        console.log(`You need to provide a valid name.`);
      } else {
        console.log(`Changed ${prop} from ${obj[prop]} to ${value}.`);
        obj[prop] = value;
      }
    },
  });
  

  /*
  Reflect
  
  */