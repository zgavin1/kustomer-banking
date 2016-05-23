import React from 'react';
import { connect } from 'react-redux';

const Balance = ({
   balance
}) => {
  return (
    <h1>{balance.balance}</h1>
  );
}

const select = (state) => {
   return {
      balance: state.transact
   }
}

export default connect(select)(Balance);