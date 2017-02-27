// Takes a multi-dimentional array and returns a single array of all the elements
// [1,[2,3], [4,[5]]].my_controlled_flatten(1) => [1,2,3,4,5]
Array.prototype.myFlatten = function () {

};

// Write a version of flatten that only flattens n levels of an array.
// E.g. If you have an array with 3 levels of nested arrays, and run
// my_flatten(1), you should return an array with 2 levels of nested
// arrays
//
// [1,[2,3], [4,[5]]].my_controlled_flatten(1) => [1,2,3,4,[5]]
Array.prototype.myControlledFlatten = function (n) {

};

Array.prototype.myZip = function (...arrs){

};

Array.prototype.myRotate = function (num = 1) {

};

Array.prototype.myJoin = function (j = ""){

};

Array.prototype.myReverse = function () {

};

// Write a method that returns the median of elements in an array
// If the length is even, return the average of the middle two elements

//dont forget to sort before running median mid -1 , not mid + 1
Array.prototype.median = function () {

};

Array.prototype.myTranspose = function () {

};

Array.prototype.myUniq = function () {

};

//Write a method that squares each element in the array
Array.prototype.square = function () {

};

// Write an Array#dups method that will return a hash containing the indices of all
// duplicate elements. The keys are the duplicate elements; the values are
// arrays of their indices in ascending order, e.g.
// [1, 3, 4, 3, 0, 3, 0].dups => { 3 => [1, 3, 5], 0 => [4, 6] }
Array.prototype.dups = function () {

};

///////ENUMERABLES///////////

Array.prototype.myEach = function (callback) {

};

Array.prototype.myEachWithIndex = function (callback) {

};

Array.prototype.mySelect = function (callback){

};

Array.prototype.myReject = function (callback){

};

Array.prototype.myAny = function (callback){

};

Array.prototype.myAll = function (callback){

};

Array.prototype.myInject = function (callback){

};

/////////SORTS AND SEARCHES/////////

Array.prototype.bubbleSort = function () {

};
//Write a monkey patch of quick sort that accepts a callback
Array.prototype.myQuickSort = function (callback) {

};

// Write a monkey patch of binary search that accepts a comparison block:
// E.g. [1, 2, 3, 4, 5, 7].my_bsearch(6) {|el, targ| el+1 <=> targ} => 4
Array.prototype.myBsearch = function (target, callback){

};

Array.prototype.myMergeSort = function (callback) {

};

///////RECURSION///////
Array.prototype.subsets = function () {

};

//Write a method that returns the sum of all elements in the array
Array.prototype.sum = function () {

};
