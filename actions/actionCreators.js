import utils from './../util/bankingUtils';
import C from './../constants';

export default {
   deposit: (dollars, cents, prevBalance) => {
      return utils.makeDeposit(dollars, cents, prevBalance);
   },
   withdraw: (dollars, cents, prevBalance) => {
      return utils.makeWithdrawal(dollars, cents, prevBalance);
   },
   setFilter: (filter) => {
      return {
         type: C.SET_VISIBILITY_FILTER,
         filter: filter
      }
   }
}