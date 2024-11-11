const birthday = document.getElementById("birthday");
const button = document.querySelector("button");
const result = document.getElementById("result");

// Function to calculate age and display it in the result element
function calculateAge() {
  const birthdayValue = birthday.value; // Gets the input value
  if (birthdayValue === "") {
    alert("Please Enter Your Birth Date");
  } else {
    const age = getAge(birthdayValue);
    if (alert) {
      result.innerHTML = "";
    } else {
      result.innerHTML = `Your are <span class= "age">${age}</span> `;
    }
  }
}

// Function to calculate age based on the birth date value
function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue); // Convert the birthday string to a Date Object
  if (birthdayDate > currentDate) {
    alert("A future date! Please enter a valid birth date.");
  } else {
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    let month = currentDate.getMonth() - birthdayDate.getMonth();
    let day = currentDate.getDate() - birthdayDate.getDate();

    // if current date is less than birthdayDate then month is less than 0
    // if current month and birthday month is equal month is ===  0
    if (
      month < 0 ||
      (month === 0 && currentDate.getDate() < birthdayDate.getDate())
    ) {
      age--;
    }
    if (age > 0) {
      return `${age} ${age > 1 ? "years" : "year"} old`;
    } else if (month > 0) {
      return `${month} ${month > 1 ? "months" : "month"} and ${day} ${
        day > 1 ? "days" : "day"
      } old`;
    } else {
      return `${day} ${day > 1 ? "days" : "day"} old`;
    }
  }
}

button.addEventListener("click", calculateAge);

/** Summary
 * DOM Manipulation: Accessing and updating HTML elements to display dynamic content.
 * Date Handling: Leveraging JavaScript's DATE object to precisely calculate age by discerning differences in years, months, and days, ensuring an accurate reflection of elapsed time
 * Conditional Logic: Implementing validation to preclude future dates, alert improbable results, and adapt values contextually, thereby enhancing the reliability and coherence of outputs.
 * String Interpretation:  Using template literals for flexible, readable string formatting.
 * Event Handling: Attaching event listeners to trigger functions on user actions.
 * Reuseable Function: Separating logic into functions for modular, organized code.
 */
