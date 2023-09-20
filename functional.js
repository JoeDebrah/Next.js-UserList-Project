let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

//returns url-friendly versions of a string
//Example: "North Dakota" -> "north-dakota"
function urlify(string) {
    return string.toLowerCase().split(/\s+/).join("-");
}

//urls: imperative version
function imperativeUrls(elements) {
    let urls = [];
    elements.forEach( function(element) {
        urls.push(urlify(element));
    });
    return urls;
}
console.log(imperativeUrls(states));

//functional version
function functionalUrls(elements) {
    return elements.map( element => urlify(element));
}
console.log(functionalUrls(states));

//singles: imperative Version
function imperativeSingles(elements) {
    let singles = [];
    elements.forEach( function(element) {
        if(element.split(/\s+/).length === 1) {
            singles.push(element);
        }
    });
    return singles;
}
console.log(imperativeSingles(states));

//singles: Functional version
function functionalSingles(elements) {
    return elements.filter( element => element.split(/\s+/).length === 1);
}
console.log(functionalSingles(states));


let numbers = [1,2,3,4,5,6,7,8,9,10];

//Sum: Imperative solution
function imperativeSum(elements) {
    let total = 0;
    elements.forEach( function (n) {
        total += n;
    });
    return total;
}
console.log(imperativeSum(numbers));

//Sum: functional solution
function functionalSum(elements) {
    return elements.reduce((total, n) => { return total += n;});
}
console.log(functionalSum(numbers));

//length: Imperative solution
//Diff between {}->key-value and []->array
function imperativeLength(elements) {
    let length = {};
    elements.forEach( function(element) {
        length[element] = element.length;
    });
    return length;
}
console.log(imperativeLength(states));

//length: functional solution
function functionalLength(elements) {
    return elements.reduce((length, element) => {
        length[element] = element.length;
        return length;
    }, {});
}
console.log(functionalLength(states));

//exercise
function reduceProduct(elements) {
    return elements.reduce((product, element) => {
        product[element] = element*=element;
        return product;
    }, []);
}
console.log(reduceProduct(numbers));

