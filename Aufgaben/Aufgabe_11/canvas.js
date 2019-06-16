var A11;
(function (A11) {
    document.addEventListener("DOMContentLoaded", init);
    let canvas;
    let fish1Array = [];
    let fish2Array = [];
    let bubble1Array = [];
    let bubble2Array = [];
    let bubble3Array = [];
    let fps = 30;
    let imageData;
    function init() {
        canvas = document.getElementsByTagName("canvas")[0];
        A11.crc = canvas.getContext("2d");
        drawEnvironment();
        imageData = A11.crc.getImageData(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < 10; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            let dx = Math.random() * 2 - 3;
            let fish1;
            fish1 = new A11.fish1A();
            fish1.x = x;
            fish1.y = y;
            fish1.dx = dx;
            fish1Array.push(fish1);
            fish1.draw();
            console.log(fish1);
        }
        for (let i = 0; i < 10; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            let dx = Math.random() * 2 + 1;
            let fish2;
            fish2 = new A11.fish2A();
            fish2.x = x;
            fish2.y = y;
            fish2.dx = dx;
            fish2Array.push(fish2);
            fish2.draw();
            console.log(fish2);
        }
        for (let i = 0; i < 5; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            let dy = Math.random() * -1 - 1;
            let bubble1;
            bubble1 = new A11.bubble1A();
            bubble1.x = x;
            bubble1.y = y;
            bubble1.dy = dy;
            bubble1Array.push(bubble1);
            bubble1.draw();
            console.log(bubble1);
        }
        for (let i = 0; i < 15; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            let dy = Math.random() * -1 - 1;
            let bubble2;
            bubble2 = new A11.bubble2A();
            bubble2.x = x;
            bubble2.y = y;
            bubble2.dy = dy;
            bubble2Array.push(bubble2);
            bubble2.draw();
            console.log(bubble2);
        }
        for (let i = 0; i < 5; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            let dy = Math.random() * -1 - 1;
            let bubble3;
            bubble3 = new A11.bubble3A();
            bubble3.x = x;
            bubble3.y = y;
            bubble3.dy = dy;
            bubble3Array.push(bubble3);
            bubble3.draw();
            console.log(bubble3);
        }
        update();
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        A11.crc.clearRect(0, 0, canvas.width, canvas.height);
        A11.crc.putImageData(imageData, 0, 0);
        for (let i = 0; i < fish1Array.length; i++) {
            fish1Array[i].update();
        }
        for (let i = 0; i < fish2Array.length; i++) {
            fish2Array[i].update();
        }
        for (let i = 0; i < bubble1Array.length; i++) {
            bubble1Array[i].update();
        }
        for (let i = 0; i < bubble2Array.length; i++) {
            bubble2Array[i].update();
        }
        for (let i = 0; i < bubble3Array.length; i++) {
            bubble3Array[i].update();
        }
    }
    function drawEnvironment() {
        // Wasser
        let wasser = new Path2D();
        wasser.rect(0, 0, 1500, 700);
        A11.crc.fillStyle = "mediumaquamarine";
        A11.crc.fill(wasser);
        A11.crc.stroke();
        // Sand
        let sand = new Path2D();
        sand.rect(0, 530, 1500, 170);
        A11.crc.fillStyle = "sandybrown";
        A11.crc.fill(sand);
        A11.crc.stroke();
        // Steine
        let stein2 = new Path2D();
        stein2.moveTo(1200, 570);
        stein2.quadraticCurveTo(1000, 200, 900, 570);
        A11.crc.fillStyle = "dimgray";
        A11.crc.fill(stein2);
        A11.crc.stroke();
        let stein1 = new Path2D();
        stein1.moveTo(1300, 650);
        stein1.quadraticCurveTo(1200, 300, 1000, 650);
        A11.crc.fillStyle = "gray";
        A11.crc.fill(stein1);
        A11.crc.stroke();
        // Seegras
        let seegras1 = new Path2D();
        seegras1.moveTo(100, 600);
        seegras1.lineTo(105, 500);
        seegras1.lineTo(110, 600);
        seegras1.closePath();
        A11.crc.fillStyle = "seagreen";
        A11.crc.fill(seegras1);
        A11.crc.stroke(seegras1);
        let seegras2 = new Path2D();
        seegras2.moveTo(127, 550);
        seegras2.lineTo(130, 450);
        seegras2.lineTo(133, 550);
        seegras2.closePath();
        A11.crc.fillStyle = "seagreen";
        A11.crc.fill(seegras2);
        A11.crc.stroke(seegras2);
        let seegras3 = new Path2D();
        seegras3.moveTo(200, 600);
        seegras3.lineTo(205, 520);
        seegras3.lineTo(210, 600);
        seegras3.closePath();
        A11.crc.fillStyle = "seagreen";
        A11.crc.fill(seegras3);
        A11.crc.stroke(seegras3);
        let seegras4 = new Path2D();
        seegras4.moveTo(150, 650);
        seegras4.lineTo(157, 450);
        seegras4.lineTo(164, 650);
        seegras4.closePath();
        A11.crc.fillStyle = "seagreen";
        A11.crc.fill(seegras4);
        A11.crc.stroke(seegras4);
        let seegras5 = new Path2D();
        seegras5.moveTo(300, 550);
        seegras5.lineTo(303, 460);
        seegras5.lineTo(306, 550);
        seegras5.closePath();
        A11.crc.fillStyle = "seagreen";
        A11.crc.fill(seegras5);
        A11.crc.stroke(seegras5);
        let seegras6 = new Path2D();
        seegras6.moveTo(250, 640);
        seegras6.lineTo(255, 510);
        seegras6.lineTo(260, 640);
        seegras6.closePath();
        A11.crc.fillStyle = "seagreen";
        A11.crc.fill(seegras6);
        A11.crc.stroke(seegras6);
        let seegras7 = new Path2D();
        seegras7.moveTo(270, 680);
        seegras7.lineTo(278, 400);
        seegras7.lineTo(286, 680);
        seegras7.closePath();
        A11.crc.fillStyle = "seagreen";
        A11.crc.fill(seegras7);
        A11.crc.stroke(seegras7);
        let seegras8 = new Path2D();
        seegras8.moveTo(120, 605);
        seegras8.lineTo(125, 470);
        seegras8.lineTo(130, 605);
        seegras8.closePath();
        A11.crc.fillStyle = "seagreen";
        A11.crc.fill(seegras8);
        A11.crc.stroke(seegras8);
        let seegras9 = new Path2D();
        seegras9.moveTo(600, 580);
        seegras9.lineTo(605, 490);
        seegras9.lineTo(610, 580);
        seegras9.closePath();
        A11.crc.fillStyle = "seagreen";
        A11.crc.fill(seegras9);
        A11.crc.stroke(seegras9);
        let seegras10 = new Path2D();
        seegras10.moveTo(640, 620);
        seegras10.lineTo(644, 570);
        seegras10.lineTo(648, 620);
        seegras10.closePath();
        A11.crc.fillStyle = "seagreen";
        A11.crc.fill(seegras10);
        A11.crc.stroke(seegras10);
    }
})(A11 || (A11 = {}));
//# sourceMappingURL=canvas.js.map