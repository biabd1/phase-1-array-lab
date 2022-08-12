const cats = [
    "Milo", "Otis", "Garfield"
]

function  destructivelyAppendCat(name) {
    return cats.push("Ralph");
}

function destructivelyPrependCat(name){
    return cats.unshift("Bob");
}

function destructivelyRemoveLastCat(){
    return cats.pop("");
}

function  destructivelyRemoveFirstCat(){
    return cats.shift("");
}


function appendCat(name){
    const NewCats= [...cats, name];
    return NewCats;
}
appendCat("Broom");

function  prependCat(name) {
    const preNewCats= [name, ...cats];
    return preNewCats;
}

function removeLastCat(){
    return cats.slice(0, cats.length -1);
}

function removeFirstCat(){
    return cats.slice(1);
}
