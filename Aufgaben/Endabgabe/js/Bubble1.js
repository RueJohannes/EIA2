var EA;
(function (EA) {
    class Bubble1 extends EA.Bubble {
        constructor() {
            super();
            this.dy = Math.random() * -1 - 1;
        }
        draw() {
            // Luftblasen
            let luftblaseA = new Path2D();
            luftblaseA.arc(this.x, this.y, 15, 0, 2 * Math.PI);
            EA.crc.fillStyle = "lightblue";
            EA.crc.fill(luftblaseA);
            EA.crc.stroke(luftblaseA);
        }
        move() {
            this.y += this.dy;
            if (this.y + 100 < 0) {
                this.y = 750;
            }
        }
    }
    EA.Bubble1 = Bubble1;
})(EA || (EA = {}));
//# sourceMappingURL=Bubble1.js.map