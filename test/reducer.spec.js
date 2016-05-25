import expect from 'expect';
import reducer from './../reducers/root';
import C from './../constants';

describe('account reducer', () => {
   it('should return the initial state', () => {
      expect(reducer(undefined, {}))
         .toEqual({
            account: {balance: "0.00"},
            ledger: []
         });
   });

   it('should update from the default on transactions', () => {
      const amount = Math.floor(Math.random() * 100),
         balance = Math.floor(Math.random() * 100),
         id = Math.floor(Math.random() * 10),
         date = new Date(Math.floor(Math.random() * Date.now()));

      const testAction = {
         type: C.DEPOSIT,
         transaction: {
            amount: amount,
            balance: balance,
            id: id,
            date: date,
            type: C.DEPOSIT
         }
      };

      expect(reducer(undefined, testAction))
         .toInclude({
            account: {balance: balance}
         });
   });

   it('can handle negatives', () => {
      const testWithdrawal = {
         type: C.WITHDRAWAL,
         transaction: {
            amount: 5,
            balance: -5,
            id: 10,
            date: "Monday",
            type: C.WITHDRAWAL
         }
      };

      expect(reducer(undefined, testWithdrawal))
         .toInclude({
            account: {balance: -5}
         });
   })
});

describe('ledger reducer', () => {
   it('should return the initial state', () => {
      expect(reducer(undefined, {}))
         .toEqual({
            account: {balance: "0.00"},
            ledger: []
         });
   });

   it('should push new transactions into the ledger', () => {
      const amount = Math.floor(Math.random() * 100),
         balance = Math.floor(Math.random() * 100),
         id = Math.floor(Math.random() * 10),
         date = new Date(Math.floor(Math.random() * Date.now()));

      const testAction = {
         type: C.DEPOSIT,
         transaction: {
            amount: amount,
            balance: balance,
            id: id,
            date: date,
            type: C.DEPOSIT
         }
      };

      expect(reducer(undefined, testAction))
         .toInclude({
            ledger: [
               {
                  amount: amount,
                  balance: balance,
                  id: id,
                  date: date,
                  type: C.DEPOSIT
               }
            ]
         });
   })

   it('should handle multiple transactions', () => {
      const amount = Math.floor(Math.random() * 100),
         balance = Math.floor(Math.random() * 100),
         id = Math.floor(Math.random() * 10),
         date = new Date(Math.floor(Math.random() * Date.now()));

      const testAction = {
         type: C.WITHDRAWAL,
         transaction: {
            amount: amount,
            balance: balance,
            id: id,
            date: date,
            type: C.WITHDRAWAL
         }
      };

      let testState;
      for (var i = 0; i < 5; i++) {
         testState = reducer(testState, testAction)
      }

      expect(testLedger.ledger.length)
         .toEqual(5);
   })

})