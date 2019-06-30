namespace A12 {

	document.addEventListener("DOMContentLoaded", init);
	export let crc: CanvasRenderingContext2D;
	export let canvas: HTMLCanvasElement;
	let fish1Array: Fish1[] = [];
	let fish2Array: Fish2[] = [];
	let bubble1Array: Bubble1[] = [];
	let bubble2Array: Bubble2[] = [];
	let bubble3Array: Bubble3[] = [];
	let fps: number = 30;
	let imageData: ImageData;

	function init(): void {
		canvas = document.getElementsByTagName("canvas")[0];
		crc = canvas.getContext("2d");
		drawEnvironment();
		imageData = crc.getImageData(0, 0, canvas.width, canvas.height);

		for (let i: number = 0; i < 10; i++) {
			let x: number = Math.random() * canvas.width;
			let y: number = Math.random() * canvas.height;
			let dx: number = Math.random() * 2 - 3;
			let fish1: Fish1;
			fish1 = new Fish1();
			fish1.x = x;
			fish1.y = y;
			fish1.dx = dx;
			fish1Array.push(fish1);
			fish1.draw();
			console.log(fish1);
		}
		for (let i: number = 0; i < 10; i++) {
			let fish2: Fish2 = new Fish2();
			fish2Array.push(fish2);
			console.log(fish2);
		}
		for (let i: number = 0; i < 5; i++) {
			let x: number = Math.random() * canvas.width;
			let y: number = Math.random() * canvas.height;
			let dy: number = Math.random() * -1 - 1;
			let bubble1: Bubble1;
			bubble1 = new Bubble1();
			bubble1.x = x;
			bubble1.y = y;
			bubble1.dy = dy;
			bubble1Array.push(bubble1);
			bubble1.draw();
			console.log(bubble1);
		}
		for (let i: number = 0; i < 15; i++) {
			let x: number = Math.random() * canvas.width;
			let y: number = Math.random() * canvas.height;
			let dy: number = Math.random() * -1 - 1;
			let bubble2: Bubble2;
			bubble2 = new Bubble2();
			bubble2.x = x;
			bubble2.y = y;
			bubble2.dy = dy;
			bubble2Array.push(bubble2);
			bubble2.draw();
			console.log(bubble2);
		}
		for (let i: number = 0; i < 5; i++) {
			let x: number = Math.random() * canvas.width;
			let y: number = Math.random() * canvas.height;
			let dy: number = Math.random() * -1 - 1;
			let bubble3: Bubble3;
			bubble3 = new Bubble3();
			bubble3.x = x;
			bubble3.y = y;
			bubble3.dy = dy;
			bubble3Array.push(bubble3);
			bubble3.draw();
			console.log(bubble3);
		}
		update();
	}

	function update(): void {
		window.setTimeout(update, 1000 / fps);
		crc.clearRect(0, 0, canvas.width, canvas.height);
		crc.putImageData(imageData, 0, 0);

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
	}

	function drawEnvironment(): void {

		// Wasser
		let wasser: Path2D = new Path2D();
		wasser.rect(0, 0, 1500, 700);
		crc.fillStyle = "mediumaquamarine";
		crc.fill(wasser);
		crc.stroke();

		// Sand
		let sand: Path2D = new Path2D();
		sand.rect(0, 530, 1500, 170);
		crc.fillStyle = "sandybrown";
		crc.fill(sand);
		crc.stroke();

		// Steine
		let stein2: Path2D = new Path2D();
		stein2.moveTo(1200, 570);
		stein2.quadraticCurveTo(1000, 200, 900, 570);
		crc.fillStyle = "dimgray";
		crc.fill(stein2);
		crc.stroke();

		let stein1: Path2D = new Path2D();
		stein1.moveTo(1300, 650);
		stein1.quadraticCurveTo(1200, 300, 1000, 650);
		crc.fillStyle = "gray";
		crc.fill(stein1);
		crc.stroke();

		// Seegras
		let seegras1: Path2D = new Path2D();
		seegras1.moveTo(100, 600);
		seegras1.lineTo(105, 500);
		seegras1.lineTo(110, 600);
		seegras1.closePath();
		crc.fillStyle = "seagreen";
		crc.fill(seegras1);
		crc.stroke(seegras1);

		let seegras2: Path2D = new Path2D();
		seegras2.moveTo(127, 550);
		seegras2.lineTo(130, 450);
		seegras2.lineTo(133, 550);
		seegras2.closePath();
		crc.fillStyle = "seagreen";
		crc.fill(seegras2);
		crc.stroke(seegras2);

		let seegras3: Path2D = new Path2D();
		seegras3.moveTo(200, 600);
		seegras3.lineTo(205, 520);
		seegras3.lineTo(210, 600);
		seegras3.closePath();
		crc.fillStyle = "seagreen";
		crc.fill(seegras3);
		crc.stroke(seegras3);

		let seegras4: Path2D = new Path2D();
		seegras4.moveTo(150, 650);
		seegras4.lineTo(157, 450);
		seegras4.lineTo(164, 650);
		seegras4.closePath();
		crc.fillStyle = "seagreen";
		crc.fill(seegras4);
		crc.stroke(seegras4);

		let seegras5: Path2D = new Path2D();
		seegras5.moveTo(300, 550);
		seegras5.lineTo(303, 460);
		seegras5.lineTo(306, 550);
		seegras5.closePath();
		crc.fillStyle = "seagreen";
		crc.fill(seegras5);
		crc.stroke(seegras5);

		let seegras6: Path2D = new Path2D();
		seegras6.moveTo(250, 640);
		seegras6.lineTo(255, 510);
		seegras6.lineTo(260, 640);
		seegras6.closePath();
		crc.fillStyle = "seagreen";
		crc.fill(seegras6);
		crc.stroke(seegras6);

		let seegras7: Path2D = new Path2D();
		seegras7.moveTo(270, 680);
		seegras7.lineTo(278, 400);
		seegras7.lineTo(286, 680);
		seegras7.closePath();
		crc.fillStyle = "seagreen";
		crc.fill(seegras7);
		crc.stroke(seegras7);

		let seegras8: Path2D = new Path2D();
		seegras8.moveTo(120, 605);
		seegras8.lineTo(125, 470);
		seegras8.lineTo(130, 605);
		seegras8.closePath();
		crc.fillStyle = "seagreen";
		crc.fill(seegras8);
		crc.stroke(seegras8);

		let seegras9: Path2D = new Path2D();
		seegras9.moveTo(600, 580);
		seegras9.lineTo(605, 490);
		seegras9.lineTo(610, 580);
		seegras9.closePath();
		crc.fillStyle = "seagreen";
		crc.fill(seegras9);
		crc.stroke(seegras9);

		let seegras10: Path2D = new Path2D();
		seegras10.moveTo(640, 620);
		seegras10.lineTo(644, 570);
		seegras10.lineTo(648, 620);
		seegras10.closePath();
		crc.fillStyle = "seagreen";
		crc.fill(seegras10);
		crc.stroke(seegras10);
	}
}