import { combineReducers } from 'redux';

const defaultBalance = {
   balance: 0
}

const transact = (
   state = defaultBalance,
   action
) => {
   debugger
   switch (action.type) {
      case "DEPOSIT":
         return {
            ...state,
            balance: action.newBalance
         }
      default:
         return state;
   }
}

const addRow = (action) => {
   return {
      id: action.id,
      amount: action.amount,
      balance: action.newBalance,
      date: action.date
   };
}

const ledger = (
   state = [],
   action
) => {
   switch (action.type) {
      // case "ADD_ROW":
      case "DEPOSIT":
         return [
            ...state,
            addRow(action)
         ];
      default:
         return state;
   }
}


export default combineReducers({
   transact,
   ledger
});