var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(function(obj) {
  var objX = obj["x"]
  var objY = obj["y"]
  console.log(objX, objY)
  var mathResult = Math.sqrt((objX * objX) + (objY * objY))
  return mathResult
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);