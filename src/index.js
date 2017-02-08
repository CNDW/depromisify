import deasync from 'deasync';

export function depromisify(promise) {
  let thing;
  let error;
  promise.then((result='done') => {
    thing = result;
  }).catch(err => {
    thing = error = err;
  });
  while(typeof thing === 'undefined') {
    deasync.sleep(5);
  }

  if (error) {
    throw error;
  }

  return thing;
}
