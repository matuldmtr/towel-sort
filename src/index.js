
// You should implement your task here.

module.exports = function towelSort (matrix) {

  if (!matrix) return [];

  let res = [];

  matrix.map((item) => {
    matrix.indexOf(item) % 2 == 0 ? res.push(item) : res.push(item.reverse());
  });

  let newRes = res.concat.apply([], res);
  return newRes;
}
