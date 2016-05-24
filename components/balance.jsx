import React from 'react';
import { connect } from 'react-redux';

const Balance = React.createClass({
   formatBalance: function(balance) {
      if (balance < 0) {
         return <span className="deficit"><em>( $ {Math.abs(balance)} )</em></span>
      } else if (balance > 0) {
         return <span className="surplus">$ {balance}</span>
      } else {
         return <span>$ {balance}</span>
      }
   },

   render: function () {
      const balance = this.formatBalance(this.props.account.balance);
      return (
         <h1 className="ui balance-display ">{balance}</h1>
      );
   }
});

const select = (state) => {
   return {
      account: state.account
   }
}

export default connect(select)(Balance);