var triangle1Area = getTriangleArea(10, 15),
    triangle2Area = getTriangleArea(5, 12),
    triangle3Area = getTriangleArea(4, 6);

function getTriangleArea(a, h) {
    if ((a && h) > 0) {
        return a +'*'+ h +'/2 = '+ a*h/2;
    } else {
        return 'Nieprawidłowe dane!';
    }
}

console.log(getTriangleArea(10, 6));
console.log(triangle1Area +'\n'+ triangle2Area +'\n'+ triangle3Area);


