import C from './../constants';
import utils from './../util/bankingUtils';

export default {
   deposit: (amount, prevBalance) => {
      return utils.makeDeposit(amount, prevBalance)
   },
}