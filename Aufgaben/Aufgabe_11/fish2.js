var A11;
(function (A11) {
    class fish2A {
        draw() {
            //Fisch
            let fisch = new Path2D();
            fisch.moveTo(this.x, this.y + 10);
            fisch.quadraticCurveTo(this.x + 220, this.y - 40, this.x + 220, this.y);
            fisch.quadraticCurveTo(this.x + 220, this.y + 40, this.x, this.y - 10);
            fisch.closePath();
            A11.crc.fillStyle = "lightgreen";
            A11.crc.fill(fisch);
            A11.crc.stroke(fisch);
            let augeAußen = new Path2D();
            augeAußen.arc(this.x + 210, this.y, 7, 0, 2 * Math.PI);
            A11.crc.fillStyle = "yellow";
            A11.crc.fill(augeAußen);
            A11.crc.stroke(augeAußen);
            let augeInnen = new Path2D();
            augeInnen.arc(this.x + 212, this.y, 3, 0, 2 * Math.PI);
            A11.crc.fillStyle = "black";
            A11.crc.fill(augeInnen);
            A11.crc.stroke(augeInnen);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += this.dx;
            if (this.x - 100 > 1500) {
                this.x = -250;
            }
        }
    }
    A11.fish2A = fish2A;
})(A11 || (A11 = {}));
//# sourceMappingURL=fish2.js.map