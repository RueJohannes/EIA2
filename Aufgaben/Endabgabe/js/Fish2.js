var EA;
(function (EA) {
    class Fish2 extends EA.Fish {
        constructor() {
            super();
            this.dx = Math.random() * 2 + 1;
        }
        draw() {
            //Fisch
            let fisch = new Path2D();
            fisch.moveTo(this.x, this.y + 10);
            fisch.quadraticCurveTo(this.x + 220, this.y - 40, this.x + 220, this.y);
            fisch.quadraticCurveTo(this.x + 220, this.y + 40, this.x, this.y - 10);
            fisch.closePath();
            EA.crc.fillStyle = "lightgreen";
            EA.crc.fill(fisch);
            EA.crc.stroke(fisch);
            let augeAußen = new Path2D();
            augeAußen.arc(this.x + 210, this.y, 7, 0, 2 * Math.PI);
            EA.crc.fillStyle = "yellow";
            EA.crc.fill(augeAußen);
            EA.crc.stroke(augeAußen);
            let augeInnen = new Path2D();
            augeInnen.arc(this.x + 212, this.y, 3, 0, 2 * Math.PI);
            EA.crc.fillStyle = "black";
            EA.crc.fill(augeInnen);
            EA.crc.stroke(augeInnen);
        }
        move() {
            this.x += this.dx;
            if (this.x - 100 > 1500) {
                this.x = -250;
            }
        }
    }
    EA.Fish2 = Fish2;
})(EA || (EA = {}));
//# sourceMappingURL=Fish2.js.map