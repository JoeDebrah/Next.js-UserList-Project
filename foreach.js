let a = ["ant", "bat", "cat", 42];
a.forEach( function(element) {
    console.log(element);
} );

let solo = "To be or not to be, that is the question";
Array.from(solo).forEach( function(charactor) {
    console.log(charactor);
});