// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // immediately invoed function doesn't have the capabilty to stop its execution so ; is needed

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

