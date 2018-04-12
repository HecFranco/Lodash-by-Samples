console.log("_.isArrayLike");
console.log(
  _.isArrayLike([1, 2, 3]),               // => true
  _.isArrayLike(document.body.children),  // => true
  _.isArrayLike('abc'),                   // => true
  _.isArrayLike(_.noop),                  // => false
);
console.log("_.isArrayLikeObject");
console.log(
  _.isArrayLikeObject([1, 2, 3]),                 // => true
  _.isArrayLikeObject(document.body.children),    // => true
  _.isArrayLikeObject('abc'),                     // => false
  _.isArrayLikeObject(_.noop),                    // => false
);              
