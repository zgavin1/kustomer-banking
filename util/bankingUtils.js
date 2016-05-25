import C from './../constants';

let depositId = 0;

const utils = {
   makeTransaction: (dollars, cents, currentBalance, type) => {
      dollars = dollars || 0;
      cents = cents || 0;
      const amount = (parseInt(dollars) + parseInt(cents) / 100);
      let balance;
      if (type === C.WITHDRAWAL) {
         balance = parseFloat(currentBalance) - amount;
      } else {
         balance = parseFloat(currentBalance) + amount
      }
      return {
         type: type,
         transaction: {
            id: depositId++,
            amount: amount.toFixed(2),
            balance: balance.toFixed(2),
            date: new Date().toString(),
            type: type
         }
      };
   },

   makeDeposit: (dollars, cents, currentBalance) => {
      return utils.makeTransaction(dollars, cents, currentBalance, C.DEPOSIT);
   },

   makeWithdrawal: (dollars, cents, currentBalance) => {
      return utils.makeTransaction(dollars, cents, currentBalance, C.WITHDRAWAL);
   } 
}

export default utils