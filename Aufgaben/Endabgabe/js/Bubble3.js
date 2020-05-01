var EA;
(function (EA) {
    class Bubble3 extends EA.Bubble {
        constructor() {
            super();
            this.dy = Math.random() * -1 - 1;
        }
        draw() {
            // Luftblasen
            let luftblaseC = new Path2D();
            luftblaseC.arc(this.x, this.y, 12, 0, 2 * Math.PI);
            EA.crc.fillStyle = "lightblue";
            EA.crc.fill(luftblaseC);
            EA.crc.stroke(luftblaseC);
        }
        move() {
            this.y += this.dy;
            if (this.y + 100 < 0) {
                this.y = 750;
            }
        }
    }
    EA.Bubble3 = Bubble3;
})(EA || (EA = {}));
//# sourceMappingURL=Bubble3.js.map