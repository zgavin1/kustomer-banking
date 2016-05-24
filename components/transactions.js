import React from 'react';
import { connect } from 'react-redux';
import actions from './../actions/actionCreators.js'

const Transactions = ({
   account,
   dispatch
}) => {
   let transAmount;

   return (
      <div className="ui container">
         <div className="ui left action input">
         <button className="ui teal labeled icon button"
            onClick={e=>{
               e.preventDefault();
               if (!transAmount.value) return;
               dispatch(actions.deposit(transAmount.value, account.balance));
               transAmount.value = "";
            }} >
             DEPOSIT
         </button>
         <button className="ui teal labeled icon button"
            onClick={e=>{
               e.preventDefault();
               if (!transAmount.value) return;
               dispatch(actions.withdraw(transAmount.value, account.balance));
               transAmount.value = "";
            }} >
             WITHDRAW
         </button>
         <input type="text"
            ref={node=>{
               transAmount=node;
            }} />
         </div>
      </div>
   );
}

const select = (state) => {
   return {
      account: state.account
   };
};

export default connect(select)(Transactions);
