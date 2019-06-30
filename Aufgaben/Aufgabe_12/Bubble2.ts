namespace A12 {
    export class Bubble2 {
        x: number;
        y: number;
        dy: number;

        draw(): void {
            // Luftblasen
            let luftblaseB: Path2D = new Path2D();
            luftblaseB.arc(this.x + 5, this.y - 30, 7, 0, 2 * Math.PI);
            crc.fillStyle = "lightblue";
            crc.fill(luftblaseB);
            crc.stroke(luftblaseB);
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