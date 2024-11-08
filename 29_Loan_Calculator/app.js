function calculateLoan() {
  loanAmountValue = document.getElementById("loanAmount").value;
  interestRateValue = document.getElementById("interest").value;
  monthsToPayValue = document.getElementById("month-to-pay").value;

  // Calculate the interest per month
  const interest =
    (loanAmountValue * (interestRateValue * 0.01)) / monthsToPayValue;

  // Calculate the monthly payment including interest
  const monthlyPayment = Math.floor(
    loanAmountValue / monthsToPayValue + interest
  );

  // Display the result
  document.getElementById(
    "payment"
  ).innerHTML = `Monthly Payment: ${monthlyPayment}`;
}
