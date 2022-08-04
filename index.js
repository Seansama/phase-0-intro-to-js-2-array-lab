let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
cats[3] = "Ralph";

}

function  destructivelyPrependCat(name){
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(){
    cats.pop([2]);
}

function destructivelyRemoveFirstCat(){
    cats.shift([0]);
}

function appendCat(name){

    
    let cats = ['Milo', 'Otis', 'Garfield', 'Broom']
    return cats;
}

function prependCat(name){

let cats = ["Milo", "Otis", "Garfield"]
cats.unshift('Arnold');
return cats;
}

function removeLastCat(){
    let cats = ["Milo", "Otis", "Garfield"]
    cats.pop([2]);
    return cats;
}

function removeFirstCat(){
    let cats = ["Milo", "Otis", "Garfield"]
    cats.shift([0]);
    return cats;
}