let canvas = document.createElement('canvas');
document.body.appendChild(canvas);
canvas.width = 800;
canvas.height = 650;
let ctx = canvas.getContext('2d');
let waitSpawn = 0.1;
let step = 0;
let dt = 0.016;


let World = new world(new Vec2(0, 1), 400, 300, 1, 2);

window.requestAnimationFrame(function loop(){
	clear();
	background("rgb(0, 0, 0)");

	World.update();
	World.render();
	step += dt;
	if(step > waitSpawn){
		let x = getRndInteger(99, 103);
		let y = getRndInteger(0, 4);
		World.addSand(x, y);
		step = 0;
	}
	
	window.requestAnimationFrame(loop);
});

window.addEventListener("keydown", function(code){

}, false);
