namespace A12 {
    export class Bubble3 extends Bubble {

        constructor() {
            super();
            this.dy = Math.random() * -1 - 1;
        }

        draw(): void {
            // Luftblasen
            let luftblaseC: Path2D = new Path2D();
            luftblaseC.arc(this.x, this.y, 12, 0, 2 * Math.PI);
            crc.fillStyle = "lightblue";
            crc.fill(luftblaseC);
            crc.stroke(luftblaseC);
        }

        move(): void {
            this.y += this.dy;
            if (this.y + 100 < 0) {
                this.y = 750;
            }
        }
    }
}