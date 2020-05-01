var EA;
(function (EA) {
    class Bubble2 extends EA.Bubble {
        constructor() {
            super();
            this.dy = Math.random() * -1 - 1;
        }
        draw() {
            // Luftblasen
            let luftblaseB = new Path2D();
            luftblaseB.arc(this.x + 5, this.y - 30, 7, 0, 2 * Math.PI);
            EA.crc.fillStyle = "lightblue";
            EA.crc.fill(luftblaseB);
            EA.crc.stroke(luftblaseB);
        }
        move() {
            this.y += this.dy;
            if (this.y + 100 < 0) {
                this.y = 750;
            }
        }
    }
    EA.Bubble2 = Bubble2;
})(EA || (EA = {}));
//# sourceMappingURL=Bubble2.js.map