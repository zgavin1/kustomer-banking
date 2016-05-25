import expect from 'expect';
import actions from './../actions/actionCreators';
import C from './../constants';

describe('action creator', () => {

   describe('deposit', () => {
      const dollars = Math.floor(Math.random() * 10);
      const cents = Math.floor(Math.random() * 10);
      const total = dollars + (cents / 100);
      const prevBalance = Math.floor(Math.random() * 10);
      const balance = prevBalance + total;
      const amount = total.toFixed(2);

      it('should create an action to make a deposit', () => {

         expect(actions.deposit(dollars.toString(), cents.toString(), prevBalance).type)
            .toEqual(C.DEPOSIT);

         expect(actions.deposit(dollars, cents, prevBalance).transaction)
            .toInclude({amount: amount})
            .toInclude({balance: balance})
            .toIncludeKeys(['id', 'date'])
      });

      it('action should have valid date and id attributes', () => {
         expect(actions.deposit(amount, prevBalance).transaction.date)
            .toInclude('2016')

         expect(actions.deposit(amount, prevBalance).transaction.id)
            .toBeA('number')
      })
   });

   describe('withdraw', () => {
      const dollars = Math.floor(Math.random() * 10);
      const cents = Math.floor(Math.random() * 10);
      const total = dollars + (cents / 100);
      const prevBalance = Math.floor(Math.random() * 10);
      const balance = prevBalance - total;
      const amount = total.toFixed(2);

      it('should create an action to make a withdrawal', () => {

         expect(actions.withdraw(dollars, cents, prevBalance).type)
            .toEqual(C.WITHDRAWAL);

         expect(actions.withdraw(dollars, cents, prevBalance).transaction)
            .toInclude({amount: amount})
            .toInclude({balance: balance.toFixed(2)})
            .toIncludeKeys(['id', 'date'])
      });

      it('action should have valid date and id attributes', () => {
         expect(actions.withdraw(dollars, cents, prevBalance).transaction.date)
            .toInclude('2016')

         expect(actions.withdraw(dollars, cents, prevBalance).transaction.id)
            .toBeA('number')
      });
   });
});