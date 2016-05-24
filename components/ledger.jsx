import React from 'react';
import { connect } from 'react-redux';


const Ledger = ({
   rows
}) => {
   const ledgerRows = rows.map((row)=>{
      return (
         <tr key={row.id}>
            <td className="ui right aligned">{row.amount}</td>
            <td className="ui right aligned">{row.balance}</td>
            <td className="ui right aligned">{row.date}</td>
         </tr>
      );
   }).reverse();

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
   }
}

export default connect(select)(Ledger);