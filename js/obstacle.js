class Obstacle {



	hugo_position_left=50;
	hugo_position_middle=225; // -20 everytime.
	hugo_position_right=385;


	constructor(canvas, ctx, moveSpeed) {
		this.canvas = canvas;
		//this.hugo_position_left=50;
		//this.hugo_position_middle=225; // -20 everytime.
		//this.hugo_position_right=385;
		this.ctx = ctx;
		this.image = null;
		this.x = this.getTrainRandomPosition(); // Math.floor(Math.random() * (this.canvas.width / 2));
		//this.width = Math.floor(Math.random() * (this.canvas.width / 2)) + 50;
		this.width = 50;
		this.height = 100;
		this.y = 0;
		this.moveSpeed = moveSpeed;
		this.init();
	}

	getTrainRandomPosition(){
		let rand = Math.random() * 100;
		rand = Math.floor(rand); 
		if(rand>70) return this.hugo_position_right;
		else if(rand<30) return this.hugo_position_left;
		else return this.hugo_position_middle;
	}

	init() {
		this.image = new Image();
		this.image.src = "images/train.png";
	}

	create_for_hugo(){
		
	}

	draw() {
		this.ctx.fillStyle = "red";
// 		this.ctx.fillRect(this.x, this.y, this.width, this.height); // 
		this.ctx.drawImage(this.image, this.x+20, this.y, 50, 100);
	}

	move() {
		this.y += this.moveSpeed;
	}
}
