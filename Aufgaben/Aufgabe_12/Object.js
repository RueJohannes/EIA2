var A12;
(function (A12) {
    class Object {
        constructor() {
            this.x = Math.random() * A12.canvas.width;
            this.y = Math.random() * A12.canvas.height;
        }
        draw() {
        }
        move() {
        }
        update() {
            this.move();
            this.draw();
        }
    }
    A12.Object = Object;
})(A12 || (A12 = {}));
//# sourceMappingURL=Object.js.map