var EA;
(function (EA) {
    class FishPlayer extends EA.Fish {
        constructor() {
            super();
            this.dx = 0;
            this.dy = 0;
        }
        draw() {
            //Fisch
            let flosse = new Path2D();
            flosse.moveTo(this.x, this.y);
            flosse.lineTo(this.x + 15, this.y - 10);
            flosse.lineTo(this.x + 15, this.y + 10);
            flosse.closePath();
            EA.crc.fillStyle = "darkbrown";
            EA.crc.fill(flosse);
            EA.crc.stroke(flosse);
        }
        update() {
            this.draw();
            this.move();
        }
        setDirection(_direction) {
            switch (_direction) {
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
            if (!(this.x > EA.canvas.width) && !(this.x < 0)) {
                this.x += this.dx;
            }
            if (!(this.y > EA.canvas.height) && !(this.y < 0)) {
                this.y += this.dy;
            }
        }
    }
    EA.FishPlayer = FishPlayer;
})(EA || (EA = {}));
//# sourceMappingURL=FishPlayer.js.map