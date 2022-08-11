function rectangle(length, height){
    var area = length * height;
    return area;
}
let length = 8.1;
let height = 4.35;
var result = rectangle(length, height);
console.log(result);
console.log(result.toFixed(2));