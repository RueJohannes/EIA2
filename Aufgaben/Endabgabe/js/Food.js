var EA;
(function (EA) {
    class Food extends EA.Object {
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
            EA.crc.fillStyle = "brown";
            EA.crc.fill(food);
            EA.crc.stroke(food);
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
    EA.Food = Food;
})(EA || (EA = {}));
//# sourceMappingURL=Food.js.map