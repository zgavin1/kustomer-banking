import C from './../constants';

let depositId = 0;

const utils = {
   makeTransaction: (amount, newBalance, type) => {
      amount = parseFloat(amount);
      return {
         type: type,
         transaction: {
            id: depositId++,
            amount: amount,
            balance: newBalance,
            date: new Date().toDateString()
         }
      };
   },

   makeDeposit: (amount, currentBalance) => {
      debugger
      return utils.makeTransaction(amount, currentBalance + amount, C.DEPOSIT);
   },

   makeWithdrawal: (amount, currentBalance) => {
      return utils.makeTransaction(amount, currentBalance - amount, C.WITHDRAW);
   } 
}

export default utils