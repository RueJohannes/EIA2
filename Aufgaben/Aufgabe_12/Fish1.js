var A12;
(function (A12) {
    class Fish1 {
        draw() {
            //Fisch
            let flosse = new Path2D();
            flosse.moveTo(this.x + 45, this.y);
            flosse.lineTo(this.x + 70, this.y - 10);
            flosse.lineTo(this.x + 70, this.y + 10);
            flosse.closePath();
            A12.crc.fillStyle = "darkbrown";
            A12.crc.fill(flosse);
            A12.crc.stroke(flosse);
            let fisch = new Path2D();
            fisch.arc(this.x, this.y, 50, 0, 2 * Math.PI);
            A12.crc.fillStyle = "orange";
            A12.crc.fill(fisch);
            A12.crc.stroke(fisch);
            let augeAußen = new Path2D();
            augeAußen.arc(this.x - 35, this.y - 5, 9, 0, 2 * Math.PI);
            A12.crc.fillStyle = "white";
            A12.crc.fill(augeAußen);
            A12.crc.stroke(augeAußen);
            let augeInnen = new Path2D();
            augeInnen.arc(this.x - 38, this.y - 5, 4, 0, 2 * Math.PI);
            A12.crc.fillStyle = "black";
            A12.crc.fill(augeInnen);
            A12.crc.stroke(augeInnen);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += this.dx;
            if (this.x + 100 < 0) {
                this.x = 1700;
            }
        }
    }
    A12.Fish1 = Fish1;
})(A12 || (A12 = {}));
//# sourceMappingURL=Fish1.js.map