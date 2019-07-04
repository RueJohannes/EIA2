var A12;
(function (A12) {
    document.addEventListener("DOMContentLoaded", init);
    document.addEventListener("click", throwFood);
    let objectArray = [];
    let fish1Array = [];
    let fish2Array = [];
    let bubble1Array = [];
    let bubble2Array = [];
    let bubble3Array = [];
    let foodArray = [];
    let fps = 30;
    let imageData;
    function init() {
        A12.canvas = document.getElementsByTagName("canvas")[0];
        A12.crc = A12.canvas.getContext("2d");
        drawEnvironment();
        imageData = A12.crc.getImageData(0, 0, A12.canvas.width, A12.canvas.height);
        for (let i = 0; i < 10; i++) {
            let fish1 = new A12.Fish1();
            objectArray.push(fish1);
            console.log(fish1);
        }
        for (let i = 0; i < 10; i++) {
            let fish2 = new A12.Fish2();
            objectArray.push(fish2);
            console.log(fish2);
        }
        for (let i = 0; i < 5; i++) {
            let bubble1 = new A12.Bubble1();
            objectArray.push(bubble1);
            console.log(bubble1);
        }
        for (let i = 0; i < 15; i++) {
            let bubble2 = new A12.Bubble2();
            objectArray.push(bubble2);
            console.log(bubble2);
        }
        for (let i = 0; i < 5; i++) {
            let bubble3 = new A12.Bubble3();
            objectArray.push(bubble3);
            console.log(bubble3);
        }
        update();
    }
    function throwFood(_event) {
        let food = new A12.Food(_event);
        objectArray.push(food);
        console.log(food);
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        A12.crc.clearRect(0, 0, A12.canvas.width, A12.canvas.height);
        A12.crc.putImageData(imageData, 0, 0);
        for (let i = 0; i < objectArray.length; i++) {
            objectArray[i].update();
        }
        /*
                for (let i: number = 0; i < fish1Array.length; i++) {
                    fish1Array[i].update();
                }
                for (let i: number = 0; i < fish2Array.length; i++) {
                    fish2Array[i].update();
                }
                for (let i: number = 0; i < bubble1Array.length; i++) {
                    bubble1Array[i].update();
                }
                for (let i: number = 0; i < bubble2Array.length; i++) {
                    bubble2Array[i].update();
                }
                for (let i: number = 0; i < bubble3Array.length; i++) {
                    bubble3Array[i].update();
                }
                for (let i: number = 0; i < foodArray.length; i++) {
                    foodArray[i].update();
                }
                */
    }
    function drawEnvironment() {
        // Wasser
        let wasser = new Path2D();
        wasser.rect(0, 0, 1500, 700);
        A12.crc.fillStyle = "mediumaquamarine";
        A12.crc.fill(wasser);
        A12.crc.stroke();
        // Sand
        let sand = new Path2D();
        sand.rect(0, 530, 1500, 170);
        A12.crc.fillStyle = "sandybrown";
        A12.crc.fill(sand);
        A12.crc.stroke();
        // Steine
        let stein2 = new Path2D();
        stein2.moveTo(1200, 570);
        stein2.quadraticCurveTo(1000, 200, 900, 570);
        A12.crc.fillStyle = "dimgray";
        A12.crc.fill(stein2);
        A12.crc.stroke();
        let stein1 = new Path2D();
        stein1.moveTo(1300, 650);
        stein1.quadraticCurveTo(1200, 300, 1000, 650);
        A12.crc.fillStyle = "gray";
        A12.crc.fill(stein1);
        A12.crc.stroke();
        // Seegras
        let seegras1 = new Path2D();
        seegras1.moveTo(100, 600);
        seegras1.lineTo(105, 500);
        seegras1.lineTo(110, 600);
        seegras1.closePath();
        A12.crc.fillStyle = "seagreen";
        A12.crc.fill(seegras1);
        A12.crc.stroke(seegras1);
        let seegras2 = new Path2D();
        seegras2.moveTo(127, 550);
        seegras2.lineTo(130, 450);
        seegras2.lineTo(133, 550);
        seegras2.closePath();
        A12.crc.fillStyle = "seagreen";
        A12.crc.fill(seegras2);
        A12.crc.stroke(seegras2);
        let seegras3 = new Path2D();
        seegras3.moveTo(200, 600);
        seegras3.lineTo(205, 520);
        seegras3.lineTo(210, 600);
        seegras3.closePath();
        A12.crc.fillStyle = "seagreen";
        A12.crc.fill(seegras3);
        A12.crc.stroke(seegras3);
        let seegras4 = new Path2D();
        seegras4.moveTo(150, 650);
        seegras4.lineTo(157, 450);
        seegras4.lineTo(164, 650);
        seegras4.closePath();
        A12.crc.fillStyle = "seagreen";
        A12.crc.fill(seegras4);
        A12.crc.stroke(seegras4);
        let seegras5 = new Path2D();
        seegras5.moveTo(300, 550);
        seegras5.lineTo(303, 460);
        seegras5.lineTo(306, 550);
        seegras5.closePath();
        A12.crc.fillStyle = "seagreen";
        A12.crc.fill(seegras5);
        A12.crc.stroke(seegras5);
        let seegras6 = new Path2D();
        seegras6.moveTo(250, 640);
        seegras6.lineTo(255, 510);
        seegras6.lineTo(260, 640);
        seegras6.closePath();
        A12.crc.fillStyle = "seagreen";
        A12.crc.fill(seegras6);
        A12.crc.stroke(seegras6);
        let seegras7 = new Path2D();
        seegras7.moveTo(270, 680);
        seegras7.lineTo(278, 400);
        seegras7.lineTo(286, 680);
        seegras7.closePath();
        A12.crc.fillStyle = "seagreen";
        A12.crc.fill(seegras7);
        A12.crc.stroke(seegras7);
        let seegras8 = new Path2D();
        seegras8.moveTo(120, 605);
        seegras8.lineTo(125, 470);
        seegras8.lineTo(130, 605);
        seegras8.closePath();
        A12.crc.fillStyle = "seagreen";
        A12.crc.fill(seegras8);
        A12.crc.stroke(seegras8);
        let seegras9 = new Path2D();
        seegras9.moveTo(600, 580);
        seegras9.lineTo(605, 490);
        seegras9.lineTo(610, 580);
        seegras9.closePath();
        A12.crc.fillStyle = "seagreen";
        A12.crc.fill(seegras9);
        A12.crc.stroke(seegras9);
        let seegras10 = new Path2D();
        seegras10.moveTo(640, 620);
        seegras10.lineTo(644, 570);
        seegras10.lineTo(648, 620);
        seegras10.closePath();
        A12.crc.fillStyle = "seagreen";
        A12.crc.fill(seegras10);
        A12.crc.stroke(seegras10);
    }
})(A12 || (A12 = {}));
//# sourceMappingURL=canvas.js.map