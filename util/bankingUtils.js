import C from './../constants';

let depositId = 0;

export default {
   makeDeposit:(amount, currentBalance) => {
      amount = parseFloat(amount);
      return {
         type: C.DEPOSIT,
         transaction: {
            id: depositId++,
            amount: amount,
            balance: amount + currentBalance,
            date: new Date().toDateString()
         }
      };
   }
}