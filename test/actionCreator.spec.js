import expect from 'expect';
import actions from './../actions/actionCreators';
import C from './../constants';

describe('action creator', () => {

   describe('deposit', () => {
      const amount = 2;
      const prevBalance = 2;

      it('should create an action to make a deposit', () => {

         expect(actions.deposit(amount, prevBalance).type)
            .toEqual(C.DEPOSIT);

         expect(actions.deposit(amount, prevBalance).transaction)
            .toInclude({amount: amount})
            .toInclude({balance: prevBalance + amount})
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
      const amount = 2;
      const prevBalance = 2;

      it('should create an action to make a withdrawal', () => {

         expect(actions.withdraw(amount, prevBalance).type)
            .toEqual(C.WITHDRAW);

         expect(actions.withdraw(amount, prevBalance).transaction)
            .toInclude({amount: amount})
            .toInclude({balance: prevBalance - amount})
            .toIncludeKeys(['id', 'date'])
      });

      it('action should have valid date and id attributes', () => {
         expect(actions.withdraw(amount, prevBalance).transaction.date)
            .toInclude('2016')

         expect(actions.withdraw(amount, prevBalance).transaction.id)
            .toBeA('number')
      });
   });
});