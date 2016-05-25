import React from 'react';
import { connect } from 'react-redux';
import C from './../constants';
import Utils from './../util/bankingUtils';


const Ledger = React.createClass({
   formatLargeNumber: function(num, deficit) {
      num = parseFloat(num);
      if (num < 0 || deficit) {
         return "( " + Math.abs(parseFloat(num)).toLocaleString("us", {style: "currency", currency: "USD", minimumFractionDigits: 2}) + " )";  
      }
      return Math.abs(parseFloat(num)).toLocaleString("us", {style: "currency", currency: "USD", minimumFractionDigits: 2});
   },

   formatRows: function () {
      const rows = this.props.rows;

      let ledgerRows = rows.map((row)=>{
         let typeClass = row.type === C.WITHDRAWAL ? "deficit":"surplus";
         let balanceClass = row.balance <= 0 ? "deficit":"surplus";
         
         const amount = this.formatLargeNumber(row.amount, typeClass);
         const balance = this.formatLargeNumber(row.balance)

         return (
            <tr className="ledger-row" key={row.id}>
               <td className={"ui right aligned "+ typeClass}>{row.type}</td>
               <td className={"ui right aligned "+ typeClass}>{amount}</td>
               <td className={"ui right aligned "+ balanceClass}>{balance}</td>
               <td className="ui right aligned">{row.date}</td>
            </tr>
         );
      }).reverse();

      if (rows.length === 0) {
         ledgerRows = (
            <tr key="0">
               <td className="ui right aligned">None</td>
               <td className="ui right aligned">None</td>
               <td className="ui right aligned">None</td>
               <td className="ui right aligned">None</td>
            </tr>
         );
      }
      return ledgerRows;
   },

   render: function () {
      return (
         <div className="ui container">
            <table className="ui celled table">
               <thead>
                  <tr><th className="ui right aligned">Type</th>
                  <th className="ui right aligned">Amount</th>
                  <th className="ui right aligned">Balance</th>
                  <th className="ui right aligned">Date</th>
               </tr></thead>
               <tbody>
                  {this.formatRows()}
               </tbody>
               <tfoot>
                  <tr>
                     <th colSpan="4"></th>
                  </tr>
               </tfoot>
            </table>
         </div>
      );   
   }
});

const select = (state) => {
   return {
      rows: Utils.getVisibleRows(state.ledger, state.filter)
   };
}

export default connect(select)(Ledger);