import expect from 'expect';
import reducer from './../reducers/root';
import C from './../constants';

describe('account reducer', () => {
   it('should return the initial state', () => {
      expect(reducer(undefined, {}))
         .toEqual({
            account: {balance: 0},
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
            date: date
         }
      };

      expect(reducer(undefined, testAction))
         .toEqual({
            account: {balance: balance},
            ledger: [
               {
                  amount: amount,
                  balance: balance,
                  id: id,
                  date: date
               }
            ]
         });
   });

   it('can handle negatives', () => {
      const testWithdrawal = {
         type: C.WITHDRAW,
         transaction: {
            amount: 5,
            balance: -5,
            id: 10,
            date: "Monday"
         }
      };

      expect(reducer(undefined, testWithdrawal))
         .toEqual({
            account: {balance: -5},
            ledger: [
               {
                  amount: 5,
                  balance: -5,
                  id: 10,
                  date: "Monday"
               }
            ]
         });
   })
});