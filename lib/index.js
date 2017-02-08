'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.depromisify = depromisify;

var _deasync = require('deasync');

var _deasync2 = _interopRequireDefault(_deasync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function depromisify(promise) {
  var thing = void 0;
  var error = void 0;
  promise.then(function () {
    var result = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'done';

    thing = result;
  }).catch(function (err) {
    thing = error = err;
  });
  while (typeof thing === 'undefined') {
    _deasync2.default.sleep(5);
  }

  if (error) {
    throw error;
  }

  return thing;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJkZXByb21pc2lmeSIsInByb21pc2UiLCJ0aGluZyIsImVycm9yIiwidGhlbiIsInJlc3VsdCIsImNhdGNoIiwiZXJyIiwic2xlZXAiXSwibWFwcGluZ3MiOiI7Ozs7O1FBRWdCQSxXLEdBQUFBLFc7O0FBRmhCOzs7Ozs7QUFFTyxTQUFTQSxXQUFULENBQXFCQyxPQUFyQixFQUE4QjtBQUNuQyxNQUFJQyxjQUFKO0FBQ0EsTUFBSUMsY0FBSjtBQUNBRixVQUFRRyxJQUFSLENBQWEsWUFBbUI7QUFBQSxRQUFsQkMsTUFBa0IsdUVBQVgsTUFBVzs7QUFDOUJILFlBQVFHLE1BQVI7QUFDRCxHQUZELEVBRUdDLEtBRkgsQ0FFUyxlQUFPO0FBQ2RKLFlBQVFDLFFBQVFJLEdBQWhCO0FBQ0QsR0FKRDtBQUtBLFNBQU0sT0FBT0wsS0FBUCxLQUFpQixXQUF2QixFQUFvQztBQUNsQyxzQkFBUU0sS0FBUixDQUFjLENBQWQ7QUFDRDs7QUFFRCxNQUFJTCxLQUFKLEVBQVc7QUFDVCxVQUFNQSxLQUFOO0FBQ0Q7O0FBRUQsU0FBT0QsS0FBUDtBQUNEIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGRlYXN5bmMgZnJvbSAnZGVhc3luYyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXByb21pc2lmeShwcm9taXNlKSB7XG4gIGxldCB0aGluZztcbiAgbGV0IGVycm9yO1xuICBwcm9taXNlLnRoZW4oKHJlc3VsdD0nZG9uZScpID0+IHtcbiAgICB0aGluZyA9IHJlc3VsdDtcbiAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICB0aGluZyA9IGVycm9yID0gZXJyO1xuICB9KTtcbiAgd2hpbGUodHlwZW9mIHRoaW5nID09PSAndW5kZWZpbmVkJykge1xuICAgIGRlYXN5bmMuc2xlZXAoNSk7XG4gIH1cblxuICBpZiAoZXJyb3IpIHtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxuXG4gIHJldHVybiB0aGluZztcbn1cbiJdfQ==