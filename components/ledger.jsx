import React from 'react';
import { connect } from 'react-redux';


const ledger = ({
   rows
}) => {
   const ledgerRows = rows.map((row)=>{
      return (
         <tr key={row.id}>
            <td>{row.amount}</td>
            <td>{row.balance}</td>
            <td>{row.date}</td>
         </tr>
      );
   });

   return (
      <div className="ui container">
         <table className="ui celled table">
            <thead>
               <tr><th>Amount</th>
               <th>Balance</th>
               <th>Date</th>
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