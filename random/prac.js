class toyota {
    start() {
        console.log("car started");
    }
    stop() {
        console.log("car stopped");
    }
    constructor(model, color, year) {
        this.model = model;
        this.color = color;
        this.year = year;
    }
}
let car1 = new toyota("innova", "white", 2020);
console.log(car1);
car1.start();
car1.stop();
console.log(car1.model);