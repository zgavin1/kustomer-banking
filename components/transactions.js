import React from 'react';
import { connect } from 'react-redux';
import actions from './../actions/actionCreators.js'

// // SHOULD GO IN UTIL DIRECTORY
// let depositId = 0;
// const makeDeposit = (amount, balance) => {
//    amount = parseFloat(amount);
//    return {
//       type: "DEPOSIT",
//       id: depositId++,
//       amount: amount,
//       newBalance: amount + balance,
//       date: new Date().toDateString()
//    };
// }

const Transactions = ({
   account,
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
               dispatch(actions.deposit(depositAmount.value, account.balance));
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
   // STILL NEED WITHDRAW
         // <button>Withdraw</button>
}

const select = (state) => {
   return {
      account: state.account
   };
};

export default connect(select)(Transactions);
