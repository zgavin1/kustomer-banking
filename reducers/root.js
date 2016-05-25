import { combineReducers } from 'redux';
import C from './../constants';

const defaultBalance = {
   balance: "0.00"
}

const account = (
   state = defaultBalance,
   action
) => {
   switch (action.type) {
      case C.DEPOSIT:
         return {
            ...state,
            balance: action.transaction.balance
         }
      case C.WITHDRAW:
         return {
            ...state,
            balance: action.transaction.balance
         }
      default:
         return state;
   }
}

const ledger = (
   state = [],
   action
) => {
   switch (action.type) {
      case C.DEPOSIT:
         return [
            ...state,
            action.transaction
         ];
      case C.WITHDRAW:
         return [
            ...state,
            action.transaction
         ];
      default:
         return state;
   }
}


export default combineReducers({
   account,
   ledger
});