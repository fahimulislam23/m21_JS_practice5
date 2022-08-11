function secondLargest(array){
    let first = -1, second = -1;

    for(let i = 0; i <= array.length - 1; i++){

        if(array[i] > first){
            second = first;
            first = array[i];
        }
        else if(array[i] > second && array[i] != first){
            second = array[i];            
        }
    }
    console.log(second);
}
let array = [5, 10, -15, 11, -3, 5, 0, -16, 69];
secondLargest(array);