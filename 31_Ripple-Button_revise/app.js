const button = document.querySelector(".btn");

/**
 * addEventListener to Track the mouse mouse event when we move the mouse inside the button
 * event -> TO get the position of the X, Y and anything inside related to this mouseover event
 *
 * Mouse Event's Property - pageX
 * To Set Values of the x, y here, instead of Center we just get any point that the mouse is entering by (left and Top property)
 * Unfortunately we don't have direct access to the ::before pseudo element/class
 * Because ::before and ::after pseudo elements are not part of the DOM
 * The thing we can do is to set variable to the left and top properties
 * 
 * 
 * event.pageX gives the X-coordinate of the mouse on the entire page, not just within the button.
 * button.offsetLeft is the distance between the left edge of the button and the left edge of the page.  
 * The subtraction event.pageX - button.offsetLeft is done to get the mouse's position relative to the button itself, rather than the whole page.
 * 

Here's the breakdown:

event.pageX gives the X-coordinate of the mouse on the entire page, not just within the button.
button.offsetLeft is the distance between the left edge of the button and the left edge of the page.
By subtracting button.offsetLeft from event.pageX, we get the mouse’s horizontal position relative to the button's left edge.
*/
button.addEventListener("mouseover", (event) => {
  console.log(event.pageX - button.offsetLeft); // horizontal
  const xPosition = event.pageX - button.offsetLeft; //to get the mouse's position relative to the button itself, rather than the whole page.
  const yPosition = event.pageY - button.offsetTop;
  button.style.setProperty("--xPosition", xPosition + "px"); // --xPosition === xPosition
  button.style.setProperty("--yPosition", yPosition + "px"); // --yPosition === yPosition
});
