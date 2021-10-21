//hello.ts
var Greeter = /** @class */ (function () {
    function Greeter() {
        this.greeting = "Hi All";
    }
    Greeter.prototype.greet = function () {
        return "Hello All People, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter();
console.log(greeter.greet());
