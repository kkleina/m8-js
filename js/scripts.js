var a = prompt('a:'),
    b = prompt('b:'),
    value = (a * a) - (2 * a * b) + (b * b);

console.log('(' + a +' - ' + b + ')^2 = ' + value);

if ( value > 0 ) {
    console.log('Wynik dodatni!');
} else if ( value < 0 ) {
    console.log('Wynik ujemny!'); // z tego równania nigdy nie wyjdzie ujemny wynik xD
} else {
    console.log('0!!!');
}