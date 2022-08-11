function input(array){
    let sum = 0;
    for(i = 0; i < array.length; i++){
        sum = sum + array[i];
        var average = sum / array.length;
    }
    return average;
}
var numbers = [15, 200, 39, 69, 75, 121, 212, 333, -50, -550, -1, 0];
var result = input(numbers);
console.log(result);