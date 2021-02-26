(function () {
  'use strict';

  var _a$b;

  var arr1 = [1, 2, 3];
  var arr2 = [4, 5, 6];
  var result = arr1.concat( arr2);
  console.log(result);
  var a = {
    b: '1',
    c: {
      d: 1
    }
  };
  console.log(a === null || a === void 0 ? void 0 : (_a$b = a.b) === null || _a$b === void 0 ? void 0 : _a$b.c);

}());
