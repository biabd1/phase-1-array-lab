const cats = [
    "Milo", "Otis", "Garfield"
]
// use .push() to destructivelyAppend
function  destructivelyAppendCat(name) {
    return cats.push("Ralph");
}
// use .unshift() destructivelyPrepend
function destructivelyPrependCat(name){
    return cats.unshift("Bob");
}
// use .pop() to destructivelyRemoveLast value 
function destructivelyRemoveLastCat(){
    return cats.pop("");
}
// use .shift() to destructivelyRemoveFirst value
function  destructivelyRemoveFirstCat(){
    return cats.shift("");
}

// declare a new value and initial to exsisting value 
function appendCat(name){
    const NewCats= [...cats, name];
    return NewCats;
}
appendCat("Broom");
// declare a new value and initial it b4 to exsisting value 
function  prependCat(name) {
    const preNewCats= [name, ...cats];
    return preNewCats;
}
// use .slice() removeLast value
function removeLastCat(){
    return cats.slice(0, cats.length -1);
}
// use .slice() removeFirst value
function removeFirstCat(){
    return cats.slice(1);
}
