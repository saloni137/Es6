let m = new Map();
m.set("Name","Saloni");
console.log(m.get("Name"));

var roles = new Map([
    [1,"Admin"],
    [2,"User"]
]);

console.log("before " + roles.get(1));
roles.set(1,"Super User");
console.log("after " +roles.get(1));
