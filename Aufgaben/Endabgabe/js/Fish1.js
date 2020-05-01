var EA;
(function (EA) {
    class Fish1 extends EA.Fish {
        constructor() {
            super();
            this.dx = Math.random() * 2 - 3;
        }
        draw() {
            //Fisch
            let flosse = new Path2D();
            flosse.moveTo(this.x + 45, this.y);
            flosse.lineTo(this.x + 70, this.y - 10);
            flosse.lineTo(this.x + 70, this.y + 10);
            flosse.closePath();
            EA.crc.fillStyle = "darkbrown";
            EA.crc.fill(flosse);
            EA.crc.stroke(flosse);
            let fisch = new Path2D();
            fisch.arc(this.x, this.y, 50, 0, 2 * Math.PI);
            EA.crc.fillStyle = "orange";
            EA.crc.fill(fisch);
            EA.crc.stroke(fisch);
            let augeAußen = new Path2D();
            augeAußen.arc(this.x - 35, this.y - 5, 9, 0, 2 * Math.PI);
            EA.crc.fillStyle = "white";
            EA.crc.fill(augeAußen);
            EA.crc.stroke(augeAußen);
            let augeInnen = new Path2D();
            augeInnen.arc(this.x - 38, this.y - 5, 4, 0, 2 * Math.PI);
            EA.crc.fillStyle = "black";
            EA.crc.fill(augeInnen);
            EA.crc.stroke(augeInnen);
        }
        move() {
            this.x += this.dx;
            if (this.x + 100 < 0) {
                this.x = 1700;
            }
        }
    }
    EA.Fish1 = Fish1;
})(EA || (EA = {}));
//# sourceMappingURL=Fish1.js.map