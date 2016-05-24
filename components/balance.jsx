import React from 'react';
import { connect } from 'react-redux';

const Balance = React.createClass ({

   determineColor: function() {
      return this.props.account.balance < 0 ? "red":"";
   },

   render: function () {
      return (
         <h1 className={"ui balance-display " + this.determineColor()}>$ {this.props.account.balance}</h1>
      );
   }
});

const select = (state) => {
   return {
      account: state.account
   }
}

export default connect(select)(Balance);