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

function transType() {
  const q = prompt('Enter Q to quit (immediately quits the program).');
  const w = prompt('Enter W to make a withdrawal.');
  const d = prompt('Enter D to deposit funds.');
  const b = prompt('Enter B to view balance.');
  alert(transType);
  console.log(transType);
}

//Using SWITCH
const myTransaction = "W";
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
  }

}
console.log(
  transType(myTransaction)
);

//try-catch-finally
try {
    const dogToParse = '{"dog": "Husky", "name": "Dubs}';
    const parsedDog = JSON.parse(dogToParse);
    console.log(parsedDog.name);
} catch (error) {
    console.log('invalid dog object');
} finally {
    console.log('Program finished');
}
