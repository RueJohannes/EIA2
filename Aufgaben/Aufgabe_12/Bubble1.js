var A12;
(function (A12) {
    class Bubble1 extends A12.Bubble {
        constructor() {
            super();
            this.dy = Math.random() * -1 - 1;
        }
        draw() {
            // Luftblasen
            let luftblaseA = new Path2D();
            luftblaseA.arc(this.x, this.y, 15, 0, 2 * Math.PI);
            A12.crc.fillStyle = "lightblue";
            A12.crc.fill(luftblaseA);
            A12.crc.stroke(luftblaseA);
        }
        move() {
            this.y += this.dy;
            if (this.y + 100 < 0) {
                this.y = 750;
            }
        }
    }
    A12.Bubble1 = Bubble1;
})(A12 || (A12 = {}));
//# sourceMappingURL=Bubble1.js.map