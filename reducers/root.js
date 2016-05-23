import { combineReducers } from 'redux';

const defaultBalance = {
   balance: 0
}

const transact = (
   state = defaultBalance,
   action
) => {
   switch (action.type) {
      case "DEPOSIT":
         return {
            balance: action.newBalance
         }
      default:
         return state;
   }
}

const reducer = (action, state = []) => {
   return state;
}


export default combineReducers({
   transact
});