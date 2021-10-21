//hello.ts
class Greeter {
    greeting: string;
    constructor() {
        this.greeting = "Hi Sumita u there";
    }
    greet() {
        return "Hello All People, " + this.greeting;
    }
}

let greeter = new Greeter();
console.log(greeter.greet());
