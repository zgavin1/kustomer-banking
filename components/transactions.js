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
                  if (!transAmount.value || transAmount.value === "0") rer
                  dispatch(actions.deposit(transAmount.value, account.balance));
                  transAmount.value = "";
               }} >
                DEPOSIT
            </button>
            <button className="ui teal labeled icon button"
               onClick={e=>{
                  e.preventDefault();
                  if (!transAmount.value || transAmount.value === "0") return;
                  dispatch(actions.withdraw(transAmount.value, account.balance));
                  transAmount.value = "";
               }} >
                WITHDRAW
            </button>
            <div className="ui right labeled input">
               <div className="ui label">$</div>
               <input
                  type="number"
                  min="0"
                  placeholder="0"
                  onKeyPress={key=>{
                     if (key.charCode === 45 || key.charCode === 43 || key.charCode === 69 || key.charCode === 101) {
                        key.preventDefault();
                     }
                  }}
                  ref={node=>{
                     transAmount=node;
                  }} />

               <div className="ui basic label">.</div>
            </div>
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
