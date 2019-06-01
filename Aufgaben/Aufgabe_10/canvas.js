var A10;
(function (A10) {
    document.addEventListener("DOMContentLoaded", init);
    let crc;
    let canvas;
    function init() {
        canvas = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");
        maleUmgebung();
        for (let i = 0; i < 7; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            maleFisch(x, y);
        }
        for (let i = 0; i < 2; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            maleLuftblase1(x, y);
        }
        for (let i = 0; i < 4; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            maleLuftblase2(x, y);
        }
        for (let i = 0; i < 37; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height + 530;
            maleKies(x, y);
        }
    }
    //Fisch
    function maleFisch(_x, _y) {
        let flosse = new Path2D();
        flosse.moveTo(_x + 45, _y);
        flosse.lineTo(_x + 70, _y - 10);
        flosse.lineTo(_x + 70, _y + 10);
        flosse.closePath();
        crc.fillStyle = "darkbrown";
        crc.fill(flosse);
        crc.stroke(flosse);
        let fisch = new Path2D();
        fisch.arc(_x, _y, 50, 0, 2 * Math.PI);
        crc.fillStyle = "orange";
        crc.fill(fisch);
        crc.stroke(fisch);
        let augeAußen = new Path2D();
        augeAußen.arc(_x - 35, _y - 5, 9, 0, 2 * Math.PI);
        crc.fillStyle = "white";
        crc.fill(augeAußen);
        crc.stroke(augeAußen);
        let augeInnen = new Path2D();
        augeInnen.arc(_x - 38, _y - 5, 4, 0, 2 * Math.PI);
        crc.fillStyle = "black";
        crc.fill(augeInnen);
        crc.stroke(augeInnen);
    }
    // Luftblasen
    function maleLuftblase1(_x, _y) {
        let luftblaseA = new Path2D();
        luftblaseA.arc(_x, _y, 15, 0, 2 * Math.PI);
        crc.fillStyle = "lightblue";
        crc.fill(luftblaseA);
        crc.stroke(luftblaseA);
        let luftblaseB = new Path2D();
        luftblaseB.arc(_x + 5, _y - 30, 7, 0, 2 * Math.PI);
        crc.fillStyle = "lightblue";
        crc.fill(luftblaseB);
        crc.stroke(luftblaseB);
    }
    function maleLuftblase2(_x, _y) {
        let luftblaseA = new Path2D();
        luftblaseA.arc(_x, _y, 12, 0, 2 * Math.PI);
        crc.fillStyle = "lightblue";
        crc.fill(luftblaseA);
        crc.stroke(luftblaseA);
    }
    function maleKies(_x, _y) {
        let kies = new Path2D();
        kies.rect(_x, _y, 5, 5);
        crc.fillStyle = "grey";
        crc.fill(kies);
        crc.stroke();
    }
    function maleUmgebung() {
        // Wasser
        let wasser = new Path2D();
        wasser.rect(0, 0, 1500, 700);
        crc.fillStyle = "mediumaquamarine";
        crc.fill(wasser);
        crc.stroke();
        // Sand
        let sand = new Path2D();
        sand.rect(0, 530, 1500, 170);
        crc.fillStyle = "sandybrown";
        crc.fill(sand);
        crc.stroke();
        // Steine
        let stein2 = new Path2D();
        stein2.moveTo(1200, 570);
        stein2.quadraticCurveTo(1000, 200, 900, 570);
        crc.fillStyle = "dimgray";
        crc.fill(stein2);
        crc.stroke();
        let stein1 = new Path2D();
        stein1.moveTo(1300, 650);
        stein1.quadraticCurveTo(1200, 300, 1000, 650);
        crc.fillStyle = "gray";
        crc.fill(stein1);
        crc.stroke();
        // Seegras
        let seegras1 = new Path2D();
        seegras1.moveTo(100, 600);
        seegras1.lineTo(105, 500);
        seegras1.lineTo(110, 600);
        seegras1.closePath();
        crc.fillStyle = "seagreen";
        crc.fill(seegras1);
        crc.stroke(seegras1);
        let seegras2 = new Path2D();
        seegras2.moveTo(127, 550);
        seegras2.lineTo(130, 450);
        seegras2.lineTo(133, 550);
        seegras2.closePath();
        crc.fillStyle = "seagreen";
        crc.fill(seegras2);
        crc.stroke(seegras2);
        let seegras3 = new Path2D();
        seegras3.moveTo(200, 600);
        seegras3.lineTo(205, 520);
        seegras3.lineTo(210, 600);
        seegras3.closePath();
        crc.fillStyle = "seagreen";
        crc.fill(seegras3);
        crc.stroke(seegras3);
        let seegras4 = new Path2D();
        seegras4.moveTo(150, 650);
        seegras4.lineTo(157, 450);
        seegras4.lineTo(164, 650);
        seegras4.closePath();
        crc.fillStyle = "seagreen";
        crc.fill(seegras4);
        crc.stroke(seegras4);
        let seegras5 = new Path2D();
        seegras5.moveTo(300, 550);
        seegras5.lineTo(303, 460);
        seegras5.lineTo(306, 550);
        seegras5.closePath();
        crc.fillStyle = "seagreen";
        crc.fill(seegras5);
        crc.stroke(seegras5);
        let seegras6 = new Path2D();
        seegras6.moveTo(250, 640);
        seegras6.lineTo(255, 510);
        seegras6.lineTo(260, 640);
        seegras6.closePath();
        crc.fillStyle = "seagreen";
        crc.fill(seegras6);
        crc.stroke(seegras6);
        let seegras7 = new Path2D();
        seegras7.moveTo(270, 680);
        seegras7.lineTo(278, 400);
        seegras7.lineTo(286, 680);
        seegras7.closePath();
        crc.fillStyle = "seagreen";
        crc.fill(seegras7);
        crc.stroke(seegras7);
        let seegras8 = new Path2D();
        seegras8.moveTo(120, 605);
        seegras8.lineTo(125, 470);
        seegras8.lineTo(130, 605);
        seegras8.closePath();
        crc.fillStyle = "seagreen";
        crc.fill(seegras8);
        crc.stroke(seegras8);
        let seegras9 = new Path2D();
        seegras9.moveTo(600, 580);
        seegras9.lineTo(605, 490);
        seegras9.lineTo(610, 580);
        seegras9.closePath();
        crc.fillStyle = "seagreen";
        crc.fill(seegras9);
        crc.stroke(seegras9);
        let seegras10 = new Path2D();
        seegras10.moveTo(640, 620);
        seegras10.lineTo(644, 570);
        seegras10.lineTo(648, 620);
        seegras10.closePath();
        crc.fillStyle = "seagreen";
        crc.fill(seegras10);
        crc.stroke(seegras10);
    }
})(A10 || (A10 = {}));
//# sourceMappingURL=canvas.js.map