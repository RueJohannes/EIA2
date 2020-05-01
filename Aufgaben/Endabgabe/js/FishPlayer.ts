namespace EA {
    export class FishPlayer extends Fish {
		
        richtung: boolean;

        constructor() {
            super();
            this.dx = 0;
            this.dy = 0;
        }

		draw(): void {
			//Fisch
			let flosse: Path2D = new Path2D();
			flosse.moveTo(this.x, this.y);
			flosse.lineTo(this.x + 15, this.y - 10);
			flosse.lineTo(this.x + 15, this.y + 10);
			flosse.closePath();
			crc.fillStyle = "darkbrown";
			crc.fill(flosse);
			crc.stroke(flosse);
        }
        
        update(): void {
            this.draw();
            this.move();
        }
        
        setDirection(_direction: string): void {
            switch(_direction) {
                
                case "left":
                    this.dx = -5;
                    this.richtung = false;
                    break;
                case "right":
                    this.dx = 5;
                    this.richtung = true;
                    break;
                case "up":
                    this.dy = -5;
                    break;
                case "down":
                    this.dy = 5;
                    break;
                case "noneX":
                    this.dx = 0;
                    break;
                case "noneY":
                    this.dy = 0;
                    break;
            }
        }

        move() {
            if(!(this.x > canvas.width) && !(this.x < 0)) {
                this.x += this.dx;
            }
            if(!(this.y > canvas.height) && !(this.y < 0)) {
                this.y += this.dy;
            }
		}
	}
}