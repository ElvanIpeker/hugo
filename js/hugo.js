class Hugo {
	constructor(canvas, ctx) {
		this.canvas = canvas;
		this.ctx = ctx;
		this.image = null;
		this.carSpeed = 1;
		this.width = 50;
		this.height = 100;
		this.y = this.canvas.height - (this.height + 50);
		this.x = (this.canvas.width - this.width) / 2;
		this.init();
	}

	init() {
		this.image = new Image();
		this.image.src = "images/hugo.png";
	}

	draw() {
		if (this.image) {
			
			this.ctx.drawImage(this.image, this.x+20, this.y, this.width, this.height);
		}
	}

	moveLeft() {
		
		this.hugo_move_left();
	}

	hugo_move_left()
	{
		console.log("hugo -left  :  "+this.getCurrentPosition()+ " Move Speed: "+this.carSpeed);
		
		if(this.getCurrentPosition()=="middle"){
			this.x=this.hugo_position_left;
		}
		else if(this.getCurrentPosition()=="left"){

		}
		else if (this.getCurrentPosition()=="right"){
			this.x=this.hugo_position_middle;
		}
		else {
			console.log("error");
		}
		
	}

	hugo_current_position=0;

	getCurrentPosition(){
		if(this.x==this.hugo_position_middle)return "middle";
		else if(this.x==this.hugo_position_left)return "left";
		else if(this.x==this.hugo_position_right)return "right";
		else return "error";
	}

	hugo_position_left=50;
	hugo_position_middle=225; // -20 everytime.
	hugo_position_right=385;

	moveRight() {
		
		this.hugo_move_right();
		/*if (this.x < this.canvas.width - this.width) {
			// this.x += this.carSpeed*60;
		}*/
	}

	hugo_move_right()
	{
		console.log("hugo move right:  "+this.getCurrentPosition()+ " Move Speed: "+this.carSpeed);

		if(this.getCurrentPosition()=="middle"){
			this.x=this.hugo_position_right;
		}
		else if(this.getCurrentPosition()=="left"){
			this.x=this.hugo_position_middle;	
		}
		else if (this.getCurrentPosition()=="right"){
			
		}
		else {
			console.log("error");
		}
		
	}
}
