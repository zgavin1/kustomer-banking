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
      case C.WITHDRAWAL:
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
      case C.WITHDRAWAL:
         return [
            ...state,
            action.transaction
         ];
      default:
         return state;
   }
}

const filter = (
  state = "SHOW_ALL",
  action
) => {
   switch (action.type) {
   case 'SET_VISIBILITY_FILTER':
      return action.filter;
   default:
      return state
   };
};


export default combineReducers({
   account,
   ledger,
   filter
});