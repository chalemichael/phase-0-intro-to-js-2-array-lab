const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(name){
    cats.push("Ralph")
}
function destructivelyPrependCat (name){
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat (name) {
    cats.pop()
}
function destructivelyRemoveFirstCat (name) {
cats.shift()
}
function appendCat (name) {
const allCats = [...cats, "Broom"];
return allCats
}
function prependCat (name) {
const allPussies = ["Arnold", ...cats]
return allPussies
}
function removeLastCat (name) {
const dirtyPussies = cats.slice(0, cats.length-1);
return dirtyPussies
}
function removeFirstCat (name) {
const megaCats = cats.slice(1)
return megaCats
}