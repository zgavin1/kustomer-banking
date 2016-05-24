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
      const testAction = {
         type: C.DEPOSIT,
         transaction: {
            amount: 10,
            balance: 10,
            id: 10,
            date: "Monday"
         }
      };

      expect(reducer(undefined, testAction))
         .toEqual({
            account: {balance: 10},
            ledger: [
               {
                  amount: 10,
                  balance: 10,
                  id: 10,
                  date: "Monday"
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