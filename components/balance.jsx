import React from 'react';
import { connect } from 'react-redux';

const Balance = ({
   account
}) => {
   let colorClass;
   if (account.balance < 0) {
      colorClass = "red";
   }
   return (
      <h1 className={"ui header " + colorClass}>$ {account.balance}</h1>
   );
}

const select = (state) => {
   return {
      account: state.account
   }
}

export default connect(select)(Balance);