import React, { useState } from "react";

function App() {
  // set time hook
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // update time hook
  function myTime() {
    setTime(new Date().toLocaleTimeString());
  }

  // make it work like a clock
  setInterval(myTime, 1000);

  // return render content
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={myTime}>Get Time</button>
    </div>
  );
}

// export the app return
export default App;

//Challenge:
//1. Given that you can get the current time using:

//Show the latest time in the <h1> when the Get Time button
//is pressed.

//2. Given that you can get code to be called every second
//using the setInterval method.
//Can you get the time in your <h1> to update every second?

//e.g. uncomment the code below to see Hey printed every second.
// function sayHi() {
//   console.log("Hey");
// }
// setInterval(sayHi, 1000);
