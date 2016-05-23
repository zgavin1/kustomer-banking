import React from 'react';
import { connect } from 'react-redux';

// SHOULD GO IN ACTIONS DIRECTORY
let depositId = 0;
const makeDeposit = (amount, balance) => {
   amount = parseFloat(amount);
   return {
      type: "DEPOSIT",
      id: depositId++,
      amount: amount,
      newBalance: amount + balance,
      date: new Date().toDateString()
   };
}

const transactions = ({
   transact,
   dispatch
}) => {
   let depositAmount;

   return (
      <div className="ui container">
         <div className="ui left action input">
         <button className="ui teal labeled icon button"
            onClick={e=>{
               e.preventDefault();
               if (!depositAmount.value) return;
               dispatch(makeDeposit(depositAmount.value, transact.balance));
               depositAmount.value = "";
            }} >
             DEPOSIT
         </button>
         <input type="text"
            ref={node=>{
               depositAmount=node;
            }} />
         </div>
      </div>
   );
         // <button>Withdraw</button>
}

const select = (state) => {
   return {
      transact: state.transact
   };
};

// const makeDeposit = (prevBalance, amt) => {
//    return prevBalance + amt;
// }

// const mapDispatchToTransactionsProps = (dispatch) => {
//    return {
//       dispatch: (action) => {
//          dispatch(action)
//       }
//    };  
// };



export default connect(select)(transactions);
