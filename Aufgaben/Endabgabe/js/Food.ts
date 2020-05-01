namespace EA {
    export class Food extends Object {
        dx: number;
        dy: number;

        constructor(_event: MouseEvent) {
            super();
            this.x = _event.clientX;
            this.y = _event.clientY;
            this.dx = Math.random() * 3 - 1.5;
            this.dy = Math.random() * 2 + 2;
            this.draw();
        }

        draw(): void {
            let food: Path2D = new Path2D();
            food.moveTo(this.x, this.y);
            food.lineTo(this.x, this.y - 5);
            food.lineTo(this.x + 5, this.y - 5);
            food.lineTo(this.x + 5, this.y);
            food.closePath();
            crc.fillStyle = "brown";
            crc.fill(food);
            crc.stroke(food);
        }

        move(): void {
            this.y += this.dy;
            this.x += this.dx;
        }

        update(): void {
            this.draw()
            if (this.y < 690) {
                this.move()
            }
        }
    }
}