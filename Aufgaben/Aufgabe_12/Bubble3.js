var A12;
(function (A12) {
    class Bubble3 extends A12.Bubble {
        constructor() {
            super();
            this.dy = Math.random() * -1 - 1;
        }
        draw() {
            // Luftblasen
            let luftblaseC = new Path2D();
            luftblaseC.arc(this.x, this.y, 12, 0, 2 * Math.PI);
            A12.crc.fillStyle = "lightblue";
            A12.crc.fill(luftblaseC);
            A12.crc.stroke(luftblaseC);
        }
        move() {
            this.y += this.dy;
            if (this.y + 100 < 0) {
                this.y = 750;
            }
        }
    }
    A12.Bubble3 = Bubble3;
})(A12 || (A12 = {}));
//# sourceMappingURL=Bubble3.js.map