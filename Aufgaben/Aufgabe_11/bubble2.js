var A11;
(function (A11) {
    class bubble2A {
        draw() {
            // Luftblasen
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
                this.y = 750;
            }
        }
    }
    A11.bubble2A = bubble2A;
})(A11 || (A11 = {}));
//# sourceMappingURL=bubble2.js.map