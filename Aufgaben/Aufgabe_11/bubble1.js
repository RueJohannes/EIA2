var A11;
(function (A11) {
    class bubble1A {
        draw() {
            // Luftblasen
            let luftblaseA = new Path2D();
            luftblaseA.arc(this.x, this.y, 15, 0, 2 * Math.PI);
            A11.crc.fillStyle = "lightblue";
            A11.crc.fill(luftblaseA);
            A11.crc.stroke(luftblaseA);
            let luftblaseB = new Path2D();
            luftblaseB.arc(this.x + 5, this.y - 30, 7, 0, 2 * Math.PI);
            A11.crc.fillStyle = "lightblue";
            A11.crc.fill(luftblaseB);
            A11.crc.stroke(luftblaseB);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.y += this.dy;
            if (this.y + 100 < 0) {
                this.y = 700;
            }
        }
    }
    A11.bubble1A = bubble1A;
})(A11 || (A11 = {}));
//# sourceMappingURL=bubble1.js.map