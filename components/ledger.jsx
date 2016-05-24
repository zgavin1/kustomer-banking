import React from 'react';
import { connect } from 'react-redux';


const Ledger = ({
   rows
}) => {
   let ledgerRows = rows.map((row)=>{
      return (
         <tr key={row.id}>
            <td className="ui right aligned">${row.amount}</td>
            <td className="ui right aligned">${row.balance}</td>
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
         </tr>
      );
   }

   return (
      <div className="ui container">
         <table className="ui celled table">
            <thead>
               <tr><th className="ui right aligned">Amount</th>
               <th className="ui right aligned">Balance</th>
               <th className="ui right aligned">Date</th>
            </tr></thead>
            <tbody>
               {ledgerRows}
            </tbody>
            <tfoot>
               <tr>
                  <th colSpan="3"></th>
               </tr>
            </tfoot>
         </table>
      </div>
   );
};

const select = (state) => {
   return {
      rows: state.ledger
   };
}

export default connect(select)(Ledger);