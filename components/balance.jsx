import React from 'react';
import { connect } from 'react-redux';

const Balance = React.createClass ({

   determineColor: function () {
      if (this.props.account.balance < 0) {
         return "red";
      }
   },

   render: function () {
      return (
         <h1 className={"ui header " + this.determineColor()}>$ {this.props.account.balance}</h1>
      );
   }
});

const select = (state) => {
   return {
      account: state.account
   }
}

export default connect(select)(Balance);