import React from 'react';
import { connect } from 'react-redux';

const Input = React.createClass({
   render: function() {
      let transAmount;
      const cents = this.props.cents;

      return (
         <input
            type="number"
            min="0"
            max={cents ? "99" : ""}
            placeholder={cents ? "00":"0"}
            onKeyPress={key=>{
               if (key.charCode === 45 || key.charCode === 43 || key.charCode === 69 || key.charCode === 101) {
                  key.preventDefault();
               } else if (key.charCode === 48 && transAmount.value.length === 0) {
                  key.preventDefault();
               }
               if (this.props.cents && key.target.value.length === 2) key.preventDefault();
            }}
            ref={node=>{
               transAmount=node;
            }} />
      );
   }
})

export default connect()(Input);
