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
const myTransaction = "Q";

function transType(transaction) {
    switch (transaction) {
        case 'Q': {
            return 'Quit the program immediately.';
            break;
        }
        case 'W': {
            return 'Enter an amount to withdraw.';
        }
        case 'D': {
            return 'Enter an amount to deposit.';
        }
        case 'B': {
            return 'Your balance is: ';
        }
        default: {
            return 'transaction type not found';
        }
    }
}

console.log(
  transType(myTransaction)
);

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
