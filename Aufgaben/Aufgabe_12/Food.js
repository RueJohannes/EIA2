var A12;
(function (A12) {
    class Food extends A12.Object {
        constructor(_event) {
            super();
            this.x = _event.clientX;
            this.y = _event.clientY;
            this.dx = Math.random() * 3 - 1.5;
            this.dy = Math.random() * 2 + 2;
            this.draw();
        }
        draw() {
            let food = new Path2D();
            food.moveTo(this.x, this.y);
            food.lineTo(this.x, this.y - 5);
            food.lineTo(this.x + 5, this.y - 5);
            food.lineTo(this.x + 5, this.y);
            food.closePath();
            A12.crc.fillStyle = "brown";
            A12.crc.fill(food);
            A12.crc.stroke(food);
        }
        move() {
            this.y += this.dy;
            this.x += this.dx;
        }
        update() {
            this.draw();
            if (this.y < 690) {
                this.move();
            }
        }
    }
    A12.Food = Food;
})(A12 || (A12 = {}));
//# sourceMappingURL=Food.js.map