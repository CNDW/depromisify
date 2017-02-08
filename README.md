# Depromisify

A light wrapper for synchronously resolving promises when you just can't do async in node

## Motivation

The vast majority of the time, async is better. However you may find yourself in a situation where you are working with 3rd party libraries that are incompatable. One runs everything in sync, and the other only supports async actions. This is intended to bridge the gap.

## Usage

```javascript
var depromisify = require('depromisify').depromisify

function someAsyncAction() {
  return new Promise(function(resolve, reject) {
    apiCall().then(function(response) {
      resolve(response);
    });
  })
}

var response = depromisify(someAsyncAction());
```

## Installation

```sh
npm install --save-dev depromisify
```
