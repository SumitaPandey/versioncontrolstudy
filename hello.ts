//hello.ts
class Greeter {
    greeting: string;
    constructor() {
        this.greeting = "People";
    }
    greet() {
        return "Hello All, " + this.greeting;
    }
}

let greeter = new Greeter();
console.log(greeter.greet());