namespace A12 {
    export class Bubble1 extends Bubble {

        constructor() {
            super();
            this.dy = Math.random() * -1 - 1;
        }

        draw(): void {
            // Luftblasen
            let luftblaseA: Path2D = new Path2D();
            luftblaseA.arc(this.x, this.y, 15, 0, 2 * Math.PI);
            crc.fillStyle = "lightblue";
            crc.fill(luftblaseA);
            crc.stroke(luftblaseA);
        }
        
        move(): void {
            this.y += this.dy;
            if (this.y + 100 < 0) {
                this.y = 750;
            }
        }
    }
}