namespace A12 {
    export class Fish2 extends Fish {

        constructor() {
            super();
			this.x = Math.random() * canvas.width;
			this.y = Math.random() * canvas.height;
            this.dx = Math.random() * 2 + 1;
        }

        draw(): void {
            //Fisch
            let fisch: Path2D = new Path2D();
            fisch.moveTo(this.x, this.y + 10);
            fisch.quadraticCurveTo(this.x + 220, this.y - 40, this.x + 220, this.y);
            fisch.quadraticCurveTo(this.x + 220, this.y + 40, this.x, this.y - 10);
            fisch.closePath();
            crc.fillStyle = "lightgreen";
            crc.fill(fisch);
            crc.stroke(fisch);

            let augeAußen: Path2D = new Path2D();
            augeAußen.arc(this.x + 210, this.y, 7, 0, 2 * Math.PI);
            crc.fillStyle = "yellow";
            crc.fill(augeAußen);
            crc.stroke(augeAußen);

            let augeInnen: Path2D = new Path2D();
            augeInnen.arc(this.x + 212, this.y, 3, 0, 2 * Math.PI);
            crc.fillStyle = "black";
            crc.fill(augeInnen);
            crc.stroke(augeInnen);
        }

        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            this.x += this.dx;
            if (this.x - 100 > 1500) {
                this.x = - 250;
            }
        }
    }
}