console.log("inicio");

setTimeout(function() {
    console.log("p1");
}, 3000);

setTimeout(function() {
    console.log("p2");
}, 0);

setTimeout(function() {
    console.log("p3");
}, 0);

console.log("fin");