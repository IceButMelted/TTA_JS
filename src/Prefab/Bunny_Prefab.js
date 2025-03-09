
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Bunny_Prefab extends Phaser.Physics.Arcade.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "BunnyAllFramepng x5", frame ?? 0);

		this.scaleX = 0.5;
		this.scaleY = 0.5;
		scene.physics.add.existing(this, false);
		this.body.velocity.x = 1;
		this.body.velocity.y = 1;
		this.body.collideWorldBounds = true;
		this.body.setOffset(15, 0);
		this.body.setSize(50, 100, false);

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.play('idle');
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */
	alive = true;
	health = 3;

	// preUpdate(time, delta) {
	// 	this.body.gravity.y = 300;
	// }
	smashEnemy() {

		this.body.velocity.y = -300;
		//this.scene.sound.play("enemy-death");
	}
	
	increaseHealth() {
		this.health++;
		if (this.health > 3) {

			this.health = 3;
		}
	}

	hurt() {
		this.y -= 50;

		this.body.velocity.y = -400;
		this.body.velocity.x = this.flipX ? -100 : 100;
		this.health--;
		console.log("HP" + this.health);	

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
