import React from 'react';
import { connect } from 'react-redux';


const ledger = ({
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
   });

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
   // return (
   //    <div className="ui container">
   //       <table className="ui celled table">
   //          <thead>
   //             <tr><th>Header</th>
   //             <th>Header</th>
   //             <th>Header</th>
   //          </tr></thead>
   //          <tbody>
   //             <tr>
   //                <td>
   //                   <div className="ui ribbon label">First</div>
   //                </td>
   //                <td>Cell</td>
   //                <td>Cell</td>
   //                </tr>
   //                <tr>
   //                <td>Cell</td>
   //                <td>Cell</td>
   //                <td>Cell</td>
   //                </tr>
   //                <tr>
   //                <td>Cell</td>
   //                <td>Cell</td>
   //                <td>Cell</td>
   //             </tr>
   //          </tbody>
   //          <tfoot>
   //             <tr><th colSpan="3">
   //                <div className="ui right floated pagination menu">
   //                   <a className="icon item">
   //                      <i className="left chevron icon"></i>
   //                   </a>
   //                   <a className="item">1</a>
   //                   <a className="item">2</a>
   //                   <a className="item">3</a>
   //                   <a className="item">4</a>
   //                   <a className="icon item">
   //                      <i className="right chevron icon"></i>
   //                   </a>
   //                </div>
   //             </th>
   //             </tr></tfoot>
   //       </table>
   //    </div>
   // );
};

const select = (state) => {
   return {
      rows: state.ledger
   }
}

export default connect(select)(ledger);