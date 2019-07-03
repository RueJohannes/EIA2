var A12;
(function (A12) {
    class Fish2 extends A12.Fish {
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
            A12.crc.fillStyle = "lightgreen";
            A12.crc.fill(fisch);
            A12.crc.stroke(fisch);
            let augeAußen = new Path2D();
            augeAußen.arc(this.x + 210, this.y, 7, 0, 2 * Math.PI);
            A12.crc.fillStyle = "yellow";
            A12.crc.fill(augeAußen);
            A12.crc.stroke(augeAußen);
            let augeInnen = new Path2D();
            augeInnen.arc(this.x + 212, this.y, 3, 0, 2 * Math.PI);
            A12.crc.fillStyle = "black";
            A12.crc.fill(augeInnen);
            A12.crc.stroke(augeInnen);
        }
        move() {
            this.x += this.dx;
            if (this.x - 100 > 1500) {
                this.x = -250;
            }
        }
    }
    A12.Fish2 = Fish2;
})(A12 || (A12 = {}));
//# sourceMappingURL=Fish2.js.map