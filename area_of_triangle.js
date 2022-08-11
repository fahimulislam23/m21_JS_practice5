function areaOfTriangle([a, b, c]){
    [a,b,c] = [a,b,c].map(Number)
    let s = ((a+b+c)/2);
    let area = Math.sqrt(s * (s-a)(s-b)(s-c));
    
}
console.log(areaOfTriangle(['2', '4', '5']));