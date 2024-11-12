const counterElements = document.querySelectorAll(".counter");
counterElements.forEach((counterElement) => {
  counterElement.innerHTML = "0";
  incrementCounter();
  function incrementCounter() {
    let currentNumber = +counterElement.innerHTML; // It converted to number because of '+' sign [It wan a string]
    const dataCeil = counterElement.getAttribute("data-ceil");
    // console.log(currentNumber, dataCeil);
    const increment = dataCeil / 5;
    currentNumber = currentNumber + increment;

    if (currentNumber < dataCeil) {
      counterElement.innerHTML = Math.ceil(currentNumber);
      setTimeout(incrementCounter, 50); // Increase and decrease the speed
    } else {
      counterElement.innerHTML = dataCeil;
    }
  }
});

/**
 
 * 'Math.ceil()' function rounds up any decimal number to the nearest integer. Here, it ensures the counter value displayed is always an integer and progresses smoothly.
 * 'Speed Adjustment' Changing the '50' in setTimeout() can speed up or slow down the incrementing effect. A lower number means a faster counter.
 * 'setTimeout(); used within a function to create a recursive loop, which allows the function to call itself after a delay for animation effects
 
 */
/** NEW!!
 
 * 'Type Conversion' The '+' operator before a string converts it to a number.
 * 'Increment Logic' Divide the target value (data-ceil) to create an increment amount, making the  count increase by small steps
 
 */
