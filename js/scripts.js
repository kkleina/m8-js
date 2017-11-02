var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.',
    dinosaur = 'triceratops',
    dinosaur = dinosaur.toUpperCase(),
    textReplace = text.replace('Velociraptor', dinosaur);

console.log(textReplace.substr(0, textReplace.length/2));