//hello.ts
var Greeter = /** @class */ (function () {
    function Greeter() {
        this.greeting = "People";
    }
    Greeter.prototype.greet = function () {
        return "Hello All, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter();
console.log(greeter.greet());
