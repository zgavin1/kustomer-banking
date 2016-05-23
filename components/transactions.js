import React from 'react';
import { connect } from 'react-redux';

const transactions = ({
   transact,
   onClick
}) => {
   let depositAmount;

   return (
      <div className="ui container">
         <div className="ui left action input">
         <button className="ui teal labeled icon button"
            onClick={e=>{
               if (!depositAmount.value) return;
               e.preventDefault();
               onClick(parseFloat(depositAmount.value) + transact.balance);
               depositAmount.value = "";
            }} >
             DEPOSIT
         </button>
         <input type="text"
            ref={node=>{
               depositAmount=node;
            }} />
         </div>
      </div>
   );
         // <button>Withdraw</button>
}

const mapStateToTransactionsProps = (state) => {
   return {
      transact: state.transact
   };
};

// const makeDeposit = (prevBalance, amt) => {
//    return prevBalance + amt;
// }

const mapDispatchToTransactionsProps = (dispatch) => {
   return {
      onClick: (amt) => {
         dispatch({type: "DEPOSIT", newBalance: amt})
      }
   };  
};



export default connect(mapStateToTransactionsProps, mapDispatchToTransactionsProps)(transactions);
