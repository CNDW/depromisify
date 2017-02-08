var depromisify = require('../lib').depromisify;
var Promise = require('es6-promise').Promise;

const test = require('tape');

test('it should resolve a promise syncronously', t => {
  let callOrder = [];
  function asyncThing() {
    return new Promise((resolve) => {
      callOrder.push(2);
      resolve();
    }).then(() => {
      callOrder.push(3);
      return;
    });
  }

  callOrder.push(1);
  let thing = depromisify(asyncThing());
  t.is(thing, 'done', 'the variable should be the result of the promise');

  callOrder.push(4);

  t.is(callOrder[0], 1, 'call number 1 should be first');
  t.is(callOrder[1], 2, 'call number 2 should be second');
  t.is(callOrder[2], 3, 'call number 3 should be third');
  t.is(callOrder[3], 4, 'call number 4 should be fourth');
  t.end();
});

test('it should raise an error if the promise barfs', t => {
  let callOrder = [];
  function asyncThing() {
    return new Promise((resolve) => {
      callOrder.push(2);
      resolve();
    }).then(() => {
      callOrder.push(3);
      throw Error("Oops");
    });
  }

  callOrder.push(1);
  try {
    let thing = depromisify(asyncThing());
  } catch (e) {
    t.is(e.message, 'Oops', 'the depromisify should throw an error with the message "Oops"');
  }

  callOrder.push(4);

  t.is(callOrder[0], 1, 'call number 1 should be first');
  t.is(callOrder[1], 2, 'call number 2 should be second');
  t.is(callOrder[2], 3, 'call number 3 should be third');
  t.is(callOrder[3], 4, 'call number 4 should be fourth');
  t.end();
});

