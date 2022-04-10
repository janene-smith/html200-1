/* The user will have a list of 4 actions to choose from.
Enter Q to quit (immediately quits the program).
Enter W to withdraw.
The user will be prompted again to enter an amount to withdraw. After withdrawing money, they should be able to type another option.
Enter D to deposit.
The user will be prompted again to enter an amount to deposit. After depositing money, they should be able to type another option.
Enter B to view balance.
The user will see their balance. Afterwards, they should be able to type another option.
The balance should update after any Withdrawal or Deposit transactions.
The program will loop asking for input until the user enters Q.
*/

//Using SWITCH
function bankAppFunction() {

let myTrans = document.getElementById("What type of transaction would you like to make?").value;
myTrans = parseInt(myTrans);
const balance = true;
let deposit = 0;
let withdraw = 0;

switch (true) {

  case userinput <= 10:
    alert("Less than 10");
    break;
  case userinput > 10:
}
    switch (myTrans) {
        case balance  {
          if (myBalance) {
            console.log('Your balance is: ${numb}');
          } else {
            console.log('Transaction not valid');
          }
            alert(balance);
            break;
        }
        case 'D': {
          function myDeposit() {
            let myTrans = prompt('Enter amount to deposit');
            let depAmt = 0;
            if (depAmt >= 1 and < 50000) {
              alert('Deposit amount of ${depAmt} has been received.');
              console.log('Deposit amount of ${depAmt} has been received.');
            } else {
              alert(deposit)
            }

          }
            return 'Enter an amount to deposit.';
        }
        case 'withdraw': {
            return 'Enter an amount to withdraw.';
        }
        case 'quit': {
          const Q = true;

          if (Q) {
            console.log('Program has been terminated.')
          } else {
            console.log('Transaction not valid.');
          }
            return 'Quit the program immediately.';
        }
        default: {
            return 'transaction type not found';
        }
    }
}

console.log(
  transType(transaction)
);
*/

// Alerts and Prompts - Lesson 5

// Ask for input using a dialog box
const myTrans = prompt('What type of transaction would you like to make?');

// Display input in a dialog box
alert(myTrans);

// Ask for input with no default value
const w = prompt('How much would you like to withdraw from your account today?');
const d = prompt('How much would you like to deposit into your account today?');
const b = ('Your balance is: ');

// Display input in a dialog box
alert (w);
alert (d);
alert (b);
console.log(w);
console.log(d);
console.log(b);
