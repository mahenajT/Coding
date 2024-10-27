/**
 * Local Storage is used to store data in your browser for particular domain
 * It is different from cookie
 * localStorage is a url storage object which are not sent to server with each request. 
    This data survives a full page refresh and even a full browser restart
    It is a Key Value Pairs
    localStorage.setItem("KEY", "VALUE");
 * These are the methods provided by LocalStorage
    - setItem(KEY, VALUE) 
    - getItem(KEY) => Get the value by KEY
    - removeItem(KEY) => Remove the KEY with its VALUE
    - clear() => Remove all items from localStorage

 * But you you set cookie then browser will send your cookie with every request
 * 
    */

let key = prompt("Enter Key You Want to Set: ");
let value = prompt("Enter Value You Want to Set: ");
console.log(`The Value at ${key} is ${localStorage.getItem(key)}`);

localStorage.setItem(key, value);
if (key === "red" || key === "blue") {
  localStorage.removeItem(key);
}
