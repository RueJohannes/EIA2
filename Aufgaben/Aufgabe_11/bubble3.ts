namespace A11 {
    export class bubble3A {
        x: number;
        y: number;
        dy: number;

        draw(): void {
            // Luftblasen
            let luftblaseC: Path2D = new Path2D();
            luftblaseC.arc(this.x, this.y, 12, 0, 2 * Math.PI);
            crc.fillStyle = "lightblue";
            crc.fill(luftblaseC);
            crc.stroke(luftblaseC);
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