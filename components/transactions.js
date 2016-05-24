import React from 'react';
import { connect } from 'react-redux';
import actions from './../actions/actionCreators.js'
import Input from './input';

const Transactions = ({
   account,
   dispatch
}) => {
   let transAmount;

   return (
      <div className="ui container">
         <div className="ui left action input">
            <div className="ui left labeled input">
               <div className="ui label">$</div>
               <Input cents={false} />
               <strong className="ui label">.</strong>
               <Input cents={true} />
            </div>
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
