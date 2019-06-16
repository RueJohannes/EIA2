var A11;
(function (A11) {
    class bubble2A {
        draw() {
            // Luftblasen
            let luftblaseC = new Path2D();
            luftblaseC.arc(this.x, this.y, 12, 0, 2 * Math.PI);
            A11.crc.fillStyle = "lightblue";
            A11.crc.fill(luftblaseC);
            A11.crc.stroke(luftblaseC);
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
    A11.bubble2A = bubble2A;
})(A11 || (A11 = {}));
//# sourceMappingURL=bubble2.js.map