var list = document.getElementById('list'),
    add = document.getElementById('addElem');

add.addEventListener('click', function(e) {
    var element = document.createElement('li'),
        itemList = document.getElementsByTagName('li');
    element.innerHTML = 'item '+itemList.length;
    list.appendChild(element);
    console.log(itemList);
});