import React from 'react';
import { connect } from 'react-redux';

const Balance = React.createClass({
   formatLargeNumber: function(num) {
      return Math.abs(parseFloat(num)).toLocaleString("us", {style: "currency", currency: "USD", minimumFractionDigits: 2})
   },

   formatBalance: function(balance) {
      if (balance < 0) {
         return <span className="deficit"><em>( {this.formatLargeNumber(balance)} )</em></span>
      } else if (balance > 0) {
         return <span className="surplus">{this.formatLargeNumber(balance)}</span>
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