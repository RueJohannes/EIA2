namespace A11 {
    export class bubble1A {
        x: number;
        y: number;
        dy: number;

        draw(): void {
            // Luftblasen
            let luftblaseA: Path2D = new Path2D();
            luftblaseA.arc(this.x, this.y, 15, 0, 2 * Math.PI);
            crc.fillStyle = "lightblue";
            crc.fill(luftblaseA);
            crc.stroke(luftblaseA);
        }

        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            this.y += this.dy;
            if (this.y + 100 < 0) {
                this.y = 750;
            }
        }
    }
}