import React from 'react';
import { connect } from 'react-redux';
import actions from './../actions/actionCreators.js'
import Input from './input';

const Transactions = React.createClass({
   getInitialState: function () {
      return {
         dollarAmount: "",
         centAmount: ""
      }
   },

   onInputChange: function (input, cents) {
      if (cents) {
         this.setState({centAmount: input});
      } else {
         this.setState({dollarAmount: input});
      }
   },

   render: function () {
      return (
         <div className="ui container">
            <div className="ui left action input">
               <div className="ui left labeled input">
                  <div className="ui label">$</div>
                  <Input cents={false} onChange={this.onInputChange}/>
                  <strong className="ui label">.</strong>
                  <Input cents={true} onChange={this.onInputChange}/>
               </div>
            </div>
            <div className="ui container">
               <button className="ui teal button"
                  onClick={e=>{
                     e.preventDefault();
                     if (!this.state.dollarAmount && !this.state.centAmount) return;
                     // this.props.dispatch(actions.deposit(transAmount.value, this.props.account.balance));
                     this.props.dispatch(actions.deposit(this.state.dollarAmount, this.state.centAmount, this.props.account.balance));

                     this.setState({dollarAmount: "", centAmount: ""})
                  }} >
                   DEPOSIT
               </button>
               <button className="ui teal button"
                  onClick={e=>{
                     e.preventDefault();
                     if (!this.state.dollarAmount && !this.state.centAmount) return;
                     this.props.dispatch(actions.withdraw(this.state.dollarAmount, this.state.centAmount, this.props.account.balance));

                     this.setState({dollarAmount: "", centAmount: ""})
                     // this.props.dispatch(actions.withdraw(dollarAmount.value + , this.props.account.balance));
                     // transAmount.value = "";
                  }} >
                   WITHDRAW
               </button>
            </div>
         </div>
      );
   }
});

const select = (state) => {
   return {
      account: state.account
   };
};

export default connect(select)(Transactions);
