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
let balance = 0;

function everything() {
  while(true)
  {
     const myTrans = prompt('What type of transaction would you like to make?');


      switch(myTrans) {
         case 'B':
            alert(balance);
            break;
         case 'D':
           let deposit = prompt("How much do you want to deposit?");
           balance += parseInt(deposit);
           if (deposit > 50000) {
             alert('Depoist cannot exceed $50,000.')
           } else if (deposit <= 50000) {
             alert(balance);
           }
           break;
         case 'W':
           let withdraw = prompt("How much do you want to withdraw?");
           balance -= parseInt(withdraw);
           alert(balance);
           break;
         case 'Q':
          system.exit(0);
            //const quit = () => {
              //return;
            //}
       }
    }
}
