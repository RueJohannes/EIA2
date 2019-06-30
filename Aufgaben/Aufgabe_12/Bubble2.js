var A12;
(function (A12) {
    class Bubble2 {
        draw() {
            // Luftblasen
            let luftblaseB = new Path2D();
            luftblaseB.arc(this.x + 5, this.y - 30, 7, 0, 2 * Math.PI);
            A12.crc.fillStyle = "lightblue";
            A12.crc.fill(luftblaseB);
            A12.crc.stroke(luftblaseB);
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
    A12.Bubble2 = Bubble2;
})(A12 || (A12 = {}));
//# sourceMappingURL=Bubble2.js.map