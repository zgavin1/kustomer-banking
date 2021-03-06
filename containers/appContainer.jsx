import React from 'react';
import { connect } from 'react-redux';
import Balance from './../components/balance';
import Transactions from './../components/transactions';
import Ledger from './../components/ledger';
import Footer from './footerContainer';

const myApp = () => {
   return (
    <div className="ui container center aligned">
      <div className="ui container center aligned">
        <h1 className="ui masthead">
           Banking App
        </h1>
      </div>
      <Balance />
      <Transactions />
      <Ledger />
      <Footer />
    </div>
   );
};

export default connect()(myApp);