var EA;
(function (EA) {
    class Object {
        constructor() {
            this.x = Math.random() * EA.canvas.width;
            this.y = Math.random() * EA.canvas.height;
        }
        draw() {
        }
        move() {
        }
        update() {
            this.move();
            this.draw();
        }
    }
    EA.Object = Object;
})(EA || (EA = {}));
//# sourceMappingURL=Object.js.map