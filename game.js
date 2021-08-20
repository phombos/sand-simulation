let canvas = document.createElement('canvas');
document.body.appendChild(canvas);
canvas.width = 800;
canvas.height = 600;
let ctx = canvas.getContext('2d');
let waitSpawn = 0;
let step = 0;
let dt = 0.016;
let keys = {
	one: false,
	two: false,
	three: false,
	four: false
};
let mouse = new Vec2(0, 0);

let World = new world(canvas.width, canvas.height, 1);

window.requestAnimationFrame(function loop(){
	clear();
	background("rgb(0, 0, 0)");

	World.update();
	World.render();
	step += dt;
	if(keys.one == true){
		for(let i = mouse.x - 2; i < mouse.x + 3; i++){
			for(let j = mouse.y - 2; j < mouse.y + 3; j++){
				World.addSand(i, j);
			}
		}
		
	}
	
	window.requestAnimationFrame(loop);
});

window.addEventListener("mousemove", function(event){
	let rect = canvas.getBoundingClientRect();
	mouse.x = Math.round(event.clientX - rect.left);
	mouse.y = Math.round(event.clientY - rect.top);
  });

window.addEventListener("keydown", function(key){
	if(key.keyCode == "49"){
		keys.one = true;
	}
	if(key.keyCode == "50"){
		keys.two = true;
	}
});

window.addEventListener("keyup", function(key){
	if(key.keyCode == "49"){
		keys.one = false;
	}
	if(key.keyCode == "50"){
		keys.two = false;
	}
});
