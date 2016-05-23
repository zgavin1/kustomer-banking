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

   it('should update from the default', () => {
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
});