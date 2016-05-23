import React from 'react';
import { connect } from 'react-redux';

const Balance = ({
   balance
}) => {
   let colorClass;
   if (balance.balance < 0) {
      colorClass = "red";
   }

   return (
      <h1 className={"ui header " + colorClass}>$ {balance.balance}</h1>
   );
}

const select = (state) => {
   return {
      balance: state.transact
   }
}

export default connect(select)(Balance);