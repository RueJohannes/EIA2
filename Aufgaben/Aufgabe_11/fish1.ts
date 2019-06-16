namespace A11 {
	export class fish1A {
		x: number;
		y: number;
		dx: number;

		draw(): void {
			//Fisch
			let flosse: Path2D = new Path2D();
			flosse.moveTo(this.x + 45, this.y);
			flosse.lineTo(this.x + 70, this.y - 10);
			flosse.lineTo(this.x + 70, this.y + 10);
			flosse.closePath();
			crc.fillStyle = "darkbrown";
			crc.fill(flosse);
			crc.stroke(flosse);

			let fisch: Path2D = new Path2D();
			fisch.arc(this.x, this.y, 50, 0, 2 * Math.PI);
			crc.fillStyle = "orange";
			crc.fill(fisch);
			crc.stroke(fisch);

			let augeAußen: Path2D = new Path2D();
			augeAußen.arc(this.x - 35, this.y - 5, 9, 0, 2 * Math.PI);
			crc.fillStyle = "white";
			crc.fill(augeAußen);
			crc.stroke(augeAußen);

			let augeInnen: Path2D = new Path2D();
			augeInnen.arc(this.x - 38, this.y - 5, 4, 0, 2 * Math.PI);
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
			if (this.x + 100 < 0) {
				this.x = 1600;
			}
		}
	}
}