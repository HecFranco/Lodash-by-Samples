# Commands Summary

## ["Util" Methods](#“util”-methods)
* [noop](#noop)
* [nthArg](#nthArg)

## [“Lang” Methods](#“lang”-methods)
* [isArrayLike](#isarraylike)
* [isArrayLikeObject](#isarraylikeobject)
* [isBoolean](#isboolean)
* [isNumber](#isnumber)
* [isFunction](#isfunction)
* [isString](#isstring)
* [isDate](#isdate)
* [isEmpty](#isempty)
* [isEqual](#isequal)
* [isEqualWith](#isequalwith)
* [isFunction](#isfunction)
* [toArray](#toarray)
* [gte](#gte)
* [lte](#lte)
* [clone](#clone)
* [cloneDeep](#clonedeep)

## [“String” Methods](#“string”-methods) 
* [camelCase](#camelcase)
* [capitalize](#capitalize)
* [deburr](#deburr)
* [kebabCase](#kebapcase)
* [pad](#pad)
* [words](#words)

## [“Array” Methods](#“array”-methods) 
* [chunk](#chunk)
* [difference](#difference)
* [differenceBy](#differenceby)
* [differenceWith](#differencewith)
* [pullAll](#pullall)
* [pullAllBy](#pullAllby)
* [union](#union)
* [unionBy](#unionby)
* [unionWith](#unionwith)
* [interstionBy](#interstionby)
* [intersectionWith](#intersectionwith)

## ["Colletion" Methods](#“colletion”-methods) 
* [countBy](#countBy)
* [orderBy](#orderBy)
* [filter](#filter)
* [map](#map)
* [sample](#sample)
* [sampleBy](#sampleBy)
* [shuffle](#shuffle)
* [defaults](#defaults)
* [forIn](#forIn)
* [forOwn](#forOwn)
* [ary](#ary)
* [map](#map)
* [unary](#unary)
* [curry](#curry)
* [curryRight](#curryRight)
* [partial](#partial)
* [memorize](#memorize)

# Sources 

* [https://lodash.com/](https://lodash.com/))
* [http://devdocs.io/lodash~4/](http://devdocs.io/lodash~4/)
* [file:///C:/Users/Creativos6_/Downloads/lodashcookbook-sample.pdf](file:///C:/Users/Creativos6_/Downloads/lodashcookbook-sample.pdf)

# Notes and Examples

## "Util" Methods

* `_.noop`, This method returns undefined.

```js
_.times(2, _.noop);   // => [undefined, undefined]
```

[return to “Util” Methods](#"util"-methods)

* `_.nthArg([n=0])`, Creates a function that gets the argument at index `n`. If `n` is negative, the nth argument from the end is returned.

```js
var func = _.nthArg(1);
func('a', 'b', 'c', 'd');   // => 'b'
var func = _.nthArg(-2);
func('a', 'b', 'c', 'd');   // => 'c'
```

[return to “Util” Methods](#"util"-methods)

----------------------------------------------------------------------------------------------------------

**[⬆ return to commands summary](#commands-summary)**

----------------------------------------------------------------------------------------------------------

## “Lang” Methods

### isArrayLike
* `_.isArrayLike(value)`, A value is considered array-like if it's not a function and has a `value.length` that's an integer greater than or equal to 0 and less than or equal to `Number.MAX_SAFE_INTEGER`.

```js
_.isArrayLike([1, 2, 3]);               // => true
_.isArrayLike(document.body.children);  // => true
_.isArrayLike('abc');                   // => true
_.isArrayLike(_.noop);                  // => false
```

[return to “Lang” Methods](#“lang”-methods)

### isArrayLikeObject
* `_.isArrayLikeObject(value)`, This method is like `_.isArrayLike` except that it also checks if `value` is an object.

```js
_.isArrayLikeObject([1, 2, 3]);                 // => true
_.isArrayLikeObject(document.body.children);    // => true
_.isArrayLikeObject('abc');                     // => false
_.isArrayLikeObject(_.noop);                    // => false
```

[return to “Lang” Methods](#“lang”-methods)

### isBoolean
* `_.isBoolean(value)`, Checks if `value` is classified as a boolean primitive or object.

```js
_.isBoolean(false);     // => true
_.isBoolean(null);      // => false
```

[return to “Lang” Methods](#“lang”-methods)

### isNumber
* `_.isNumber(value)`, Checks if `value` is classified as a `Number` primitive or object.
```js
_.isNumber(3);                  // => true
_.isNumber(Number.MIN_VALUE);   // => true
_.isNumber(Infinity);           // => true
_.isNumber('3');                // => false
```

[return to “Lang” Methods](#“lang”-methods)

### isString
* `_.isString(value)`, Checks if `value` is classified as a String primitive or object.

```js
_.isString('abc');      // => true
_.isString(1);          // => false
```

[return to “Lang” Methods](#“lang”-methods)

### isDate
* `_.isDate(value)`, Checks if `value` is classified as a Date object.

```js
_.isDate(new Date);             // => true
_.isDate('Mon April 23 2012');  // => false
```

[return to “Lang” Methods](#“lang”-methods)

### isEmpty
* `_.isEmpty(value)`, Checks if `value` is an empty object, collection, map, or set.

```js
_.isEmpty(null);        // => true
_.isEmpty(true);        // => true
_.isEmpty(1);           // => true
_.isEmpty([1, 2, 3]);   // => false
_.isEmpty({ 'a': 1 });  // => false
```

[return to “Lang” Methods](#“lang”-methods)

### isEqual
* `_.isEqual(value, other)`, Performs a deep comparison between two values to determine if they are equivalent.

Note: This method supports comparing arrays, array buffers, booleans, date objects, error objects, maps, numbers, Object objects, regexes, sets, strings, symbols, and typed arrays. Object objects are compared by their own, not inherited, enumerable properties. Functions and DOM nodes are compared by strict equality, i.e. ===.

```js
var object = { 'a': 1 };
var other = { 'a': 1 };
_.isEqual(object, other);   // => true
object === other;           // => false
```

[return to “Lang” Methods](#“lang”-methods)

### isEqualWith
* `_.isEqualWith(value, other, [customizer])`, This method is like `_.isEqual` except that it accepts `customizer` which is invoked to compare values. If `customizer` returns `undefined`, comparisons are handled by the method instead. The `customizer` is invoked with up to six arguments: (objValue, othValue [, index|key, object, other, stack]).

```js
function isGreeting(value) {
  return /^h(?:i|ello)$/.test(value);
}
function customizer(objValue, othValue) {
  if (isGreeting(objValue) && isGreeting(othValue)) {
    return true;
  }
}
var array = ['hello', 'goodbye'];
var other = ['hi', 'goodbye'];
_.isEqualWith(array, other, customizer);    // => true
```

[return to “Lang” Methods](#“lang”-methods)

### isFunction
* `_.isFunction(value)`, Checks if `value` is classified as a `Function` object.

```js
_.isFunction(_);      // => true
_.isFunction(/abc/);  // => false
```

[return to “Lang” Methods](#“lang”-methods)

### isFunction
* `_.toArray(value)`, Converts `value` to an array.

```js
_.toArray({ 'a': 1, 'b': 2 });    // => [1, 2]
_.toArray('abc');                 // => ['a', 'b', 'c']
_.toArray(1);                     // => []
_.toArray(null);                  // => []
```

[return to “Lang” Methods](#“lang”-methods)

### gte
* `_.gte(value, other)`, Checks if `value` is greater than or equal to `other`.

```js
_.gte(3, 1);    // => true
_.gte(3, 3);    // => true
_.gte(1, 3);    // => false
```

[return to “Lang” Methods](#“lang”-methods)

### lte
* `_.lte(value, other)`, Checks if `value` is less than or equal to `other`.

```js
_.lte(1, 3);    // => true
_.lte(3, 3);    // => true
_.lte(3, 1);    // => false
```

[return to “Lang” Methods](#“lang”-methods)

### clone
* `_.clone(value)`, Creates a shallow clone of `value`.

**Note:** This method is loosely based on the structured clone algorithm and supports cloning arrays, array buffers, booleans, date objects, maps, numbers, `Object` objects, regexes, sets, strings, symbols, and typed arrays. The own enumerable properties of `arguments` objects are cloned as plain objects. An empty object is returned for uncloneable values such as error objects, functions, DOM nodes, and WeakMaps.

```js
var objects = [{ 'a': 1 }, { 'b': 2 }];
var shallow = _.clone(objects);
console.log(shallow[0] === objects[0]);   // => true
```

[return to “Lang” Methods](#“lang”-methods)

### cloneDeep
* `_.cloneDeep(value)`, This method is like `_.clone` except that it recursively clones `value`.

```js
var objects = [{ 'a': 1 }, { 'b': 2 }];
var deep = _.cloneDeep(objects);
console.log(deep[0] === objects[0]);    // => false
```

[return to “Lang” Methods](#“lang”-methods)

----------------------------------------------------------------------------------------------------------

**[⬆ return to commands summary](#commands-summary)**

----------------------------------------------------------------------------------------------------------

## “String” Methods

### camelCase
* `_.camelCase([string=''])`, Converts `string` to camel case.

```js
_.camelCase('Foo Bar');       // => 'fooBar'
_.camelCase('--foo-bar--');   // => 'fooBar'
_.camelCase('__FOO_BAR__');   // => 'fooBar'
```

[return to “String” Methods](#“string”-methods)

### capitalize
* `_.capitalize([string=''])`, Converts the first character of `string` to upper case and the remaining to lower case.

```js
_.capitalize('FRED');   // => 'Fred'
```

[return to “String” Methods](#“string”-methods)

### deburr

* `_.deburr([string=''])`, Deburrs `string` by converting Latin-1 Supplement and Latin Extended-A letters to basic Latin letters and removing combining diacritical marks.

```js
_.deburr('déjà vu');  // => 'deja vu'
```

[return to “String” Methods](#“string”-methods)

### kebabCase

* `_.kebabCase([string=''])`, Converts `string` to kebab case.

```js
_.kebabCase('Foo Bar');     // => 'foo-bar'
_.kebabCase('fooBar');      // => 'foo-bar'
_.kebabCase('__FOO_BAR__'); // => 'foo-bar'
```

[return to “String” Methods](#“string”-methods)

### pad

* `_.pad([string=''], [length=0], [chars=' '])`, Pads `string` on the left and right sides if it's shorter than `length`. Padding characters are truncated if they can't be evenly divided by `length`.

#### arguments
1. `[string='']` _(string)_: The string to pad.
2. `[length=0]` _(number)_: The padding length.
3. `[chars=' ']` _(string)_: The string used as padding.

```js
_.pad('abc', 8);        // => '  abc   '
_.pad('abc', 8, '_-');  // => '_-abc_-_'
_.pad('abc', 3);        // => 'abc'
```

[return to “String” Methods](#“string”-methods)

### words

* `_.words([string=''], [pattern])`, Splits `string` into an array of its words. 

#### arguments
1. `[string='']` _(string)_: The string to inspect.
2. `[pattern]` _(RegExp|string)_: The pattern to match words.

```js
_.words('fred, barney, & pebbles');               // => ['fred', 'barney', 'pebbles']
_.words('fred, barney, & pebbles', /[^, ]+/g);    // => ['fred', 'barney', '&', 'pebbles']
```

[return to “String” Methods](#“string”-methods)

----------------------------------------------------------------------------------------------------------

**[⬆ return to commands summary](#commands-summary)**

----------------------------------------------------------------------------------------------------------

## “Array” Methods

### chunk

* `_.chunk(array, [size=1])`, Creates an array of elements split into groups the length of `size`. If `array` can't be split evenly, the final chunk will be the remaining elements.

#### arguments

1. `array` _(Array)_: The array to process.
2. `[size=1]` _(number)_: The length of each chunk

```js
_.chunk(['a', 'b', 'c', 'd'], 2);   // => [['a', 'b'], ['c', 'd']]
_.chunk(['a', 'b', 'c', 'd'], 3);   // => [['a', 'b', 'c'], ['d']]
```

[return to “Array” Methods](#“array”-methods)

### difference

* `_.difference(array, [values])`, Creates an array of `array` values not included in the other given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.

```js
_.difference([2, 1], [2, 3]);   // => [1]
```

[return to “Array” Methods](#“array”-methods)

### pull

* `_.pull(array, [values])`, Removes all given values from `array` using SameValueZero for equality comparisons.

Note: Unlike `_.without`, this method mutates array. Use `_.remove` to remove elements from an array by predicate.

```js
var array = ['a', 'b', 'c', 'a', 'b', 'c'];
_.pull(array, 'a', 'c');
console.log(array);   // => ['b', 'b']
```

[return to “Array” Methods](#“array”-methods)

### pullAll

* `_.pullAll(array, values)`, This method is like `_.pull` except that it accepts an array of values to remove.

```js
var array = ['a', 'b', 'c', 'a', 'b', 'c'];
_.pullAll(array, ['a', 'c']);
console.log(array);   // => ['b', 'b']
```

[return to “Array” Methods](#“array”-methods)

### differenceBy

* `_.differenceBy(array, [values], [iteratee=_.identity])`, This method is like `_.difference` except that it accepts iteratee which is invoked for each element of `array` and `values` to generate the criterion by which they're compared. The order and references of result values are determined by the first array. The iteratee is invoked with one argument:_(value)_.

#### Arguments

1. `array` _(Array)_: The array to inspect.
2. `[values]` _(...Array)_: The values to exclude.
3. `[iteratee=_.identity]` _(Function)_: The iteratee invoked per element.

```js
_.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);             // => [1.2]
// The `_.property` iteratee shorthand.
_.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');    // => [{ 'x': 2 }]
```

[return to “Array” Methods](#“array”-methods)

### pullAllBy

* `_.pullAllBy(array, values, [iteratee=_.identity])`, This method is like `_.pullAll` except that it accepts `iteratee` which is invoked for each element of `array` and `values` to generate the criterion by which they're compared. The iteratee is invoked with one argument: _(value)_.

#### arguments

1. `array` _(Array)_: The array to modify.
2. `values` _(Array)_: The values to remove.
3. `[iteratee=_.identity]` _(Function)_: The iteratee invoked per element.

```js
var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
_.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
console.log(array);   // => [{ 'x': 2 }]
```

[return to “Array” Methods](#“array”-methods)

### differenceWith

* `_.differenceWith(array, [values], [comparator])`, This method is like `_.difference` except that it accepts `comparator` which is invoked to compare elements of `array` to `values`. The order and references of result values are determined by the first array. The comparator is invoked with two arguments: _(arrVal, othVal)_.

#### arguments

1. `array` _(Array)_: The array to inspect.
2. `[values]` _(...Array)_: The values to exclude.
3. `[comparator` _(Function)_: The comparator invoked per element.

```js
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
_.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);   // => [{ 'x': 2, 'y': 1 }]
```

[return to “Array” Methods](#“array”-methods)

### pullAllWith

* `_.pullAllWith(array, values, [comparator])`, This method is like `_.pullAll` except that it accepts `comparator` which is invoked to compare elements of `array` to `values`. The comparator is invoked with two arguments: _(arrVal, othVal)_.

#### arguments

1. `array` _(Array)_: The array to modify.
2. `values` _(Array)_: The values to remove.
3. `[comparator]` _(Function)_: The comparator invoked per element.

```js
var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
_.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
console.log(array);     // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
```

[return to “Array” Methods](#“array”-methods)





### union

[return to “Array” Methods](#“array”-methods)

### unionBy

[return to “Array” Methods](#“array”-methods)

### unionWith

[return to “Array” Methods](#“array”-methods)

### interstionBy

[return to “Array” Methods](#“array”-methods)

### intersectionWith

[return to “Array” Methods](#“array”-methods)

----------------------------------------------------------------------------------------------------------

**[⬆ return to commands summary](#commands-summary)**

----------------------------------------------------------------------------------------------------------