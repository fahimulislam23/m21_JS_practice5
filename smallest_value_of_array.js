
function smallest(input){
    let smallNumber = input[0];
    for(i = 0; i < input.length; i++){
        if(input[i] < smallNumber){
            smallNumber = input[i];
        }
    }
    return smallNumber;
}
var numbers = [2, 10, 35, -5, 46, 0, 38, -100];
var result = smallest(numbers);
console.log(result);