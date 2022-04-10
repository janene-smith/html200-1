//Displays the dialog element.
dialog.show()

//Displays dialog element and makes it the top-most modal dialog. Honors autofocus attribute.
dialog.showModal()

//Closes the dialog element. Provides a return value.
dialog.close([ result ])

//Returns the dialog's return value.
//Can be set, to update the return value.
dialog.returnValue [ = result ]
//
// Bank withdraw transaction
const myWithdraw = true;

if (myWithdraw) {
  console.log('Enter amount of funds to withdraw today');
} else {
  console.log('Transaction not valid');
}

// Bankd deposit Transaction
const myDeposit = true;
let depAmt;

if (myDeposit) {
  console.log('Enter amount of funds to deposit today');
}  else {
  console.log('Transaction not valid');
}

// Bank balance request
const myBalance = true;

if (myBalance) {
  console.log('Your balance is: ${numb}');
} else {
  console.log('Transaction not valid');
}
//

const initialBalance = 2000;
let x = wdwNum;
let y = depNum;

if (x >= 1 and < 50000) {
  alert(x);
  console.log(x);
}
if (y >= 1 and < 50000) {
  alert(y);
  console.log(y);
} else

function myDeposit() {
  let input = prompt('Enter amount to deposit');
  let depAmt = 0;
  if (depAmt >= 1 and < 50000) {
    alert('Deposit amount of ${depAmt} has been received.');
    console.log('Deposit amount of ${depAmt} has been received.');
  } else {
    alert('')
  }

}
