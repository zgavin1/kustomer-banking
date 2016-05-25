#Banking App
To run: 
- in your browser, navigate to http://zach-gavin.com/kustomer-banking

OR

- in your terminal, git clone the repo
- run `npm install` to load dependencies like react, redux, semantic-ui
- navigate to the "semantic" subdirectory, run gulp build
- navigate back to the home directory, run `webpack` to transpile the es6 syntax and build the code in a bundle.js file

- open the file "index.js" in your browser
- to run tests, run `npm test`


##Known Issues

table formatting. columns change size. I'm not super familiar with semantic, and I know that tables in general are typically quite the headache to make changes to. I thought my time would be better spent on other features, but I'll try to figure this out when I have more time.

Withdraw and Deposit buttons stay in a darkened "pressed" state after submission. This probably has to do with my calls to preventDefault to handle the restraints on characters allowed in the input.

Instead of constraints, I could (and probably should) have some alerts on bad input (decimals, dashes, e, E).

Filter buttons resize. Just ran out of time.

Date could be formatted better. Could implement MomentJS for this easily.