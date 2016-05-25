import utils from './../util/bankingUtils';

export default {
   deposit: (dollars, cents, prevBalance) => {
      return utils.makeDeposit(dollars, cents, prevBalance);
   },
   withdraw: (dollars, cents, prevBalance) => {
      return utils.makeWithdrawal(dollars, cents, prevBalance);
   },
   setFilter: (type, filter) => {
      return {
         type: type,
         filter: filter
      }
   }
}