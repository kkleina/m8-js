function drawTree(heightTree) {
    for (var i = 0 ; i < heightTree ; i++) {
        var star = '*';
        var space = '';
        for (var k = heightTree ; k > i ; k--) {
            space += ' ';
        }
        for (var j = 0 ; j < i ; j++) {
            star += '**';
        }
        console.log(space + star);
    }
}

drawTree(7);