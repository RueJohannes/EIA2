var A11;
(function (A11) {
    class fish2A {
        draw() {
            //Fisch
            let flosse = new Path2D();
            flosse.moveTo(this.x + 45, this.y);
            flosse.lineTo(this.x + 70, this.y - 10);
            flosse.lineTo(this.x + 70, this.y + 10);
            flosse.closePath();
            A11.crc.fillStyle = "yellow";
            A11.crc.fill(flosse);
            A11.crc.stroke(flosse);
            let fisch = new Path2D();
            fisch.arc(this.x, this.y, 50, 0, 2 * Math.PI);
            A11.crc.fillStyle = "red";
            A11.crc.fill(fisch);
            A11.crc.stroke(fisch);
            let augeAußen = new Path2D();
            augeAußen.arc(this.x - 35, this.y - 5, 9, 0, 2 * Math.PI);
            A11.crc.fillStyle = "blue";
            A11.crc.fill(augeAußen);
            A11.crc.stroke(augeAußen);
            let augeInnen = new Path2D();
            augeInnen.arc(this.x - 38, this.y - 5, 4, 0, 2 * Math.PI);
            A11.crc.fillStyle = "red";
            A11.crc.fill(augeInnen);
            A11.crc.stroke(augeInnen);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            if (this.x - 100 > 1500) {
                this.x = -100;
            }
        }
    }
    A11.fish2A = fish2A;
})(A11 || (A11 = {}));
//# sourceMappingURL=fish2.js.map