
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Rolly_Prefab extends Phaser.Physics.Arcade.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? -16, texture || "Roller", frame ?? 0);

		this.scaleX = 0.25;
		this.scaleY = 0.25;
		scene.physics.add.existing(this, false);
		this.body.friction.x = 0;
		this.body.bounce.x = 1;
		this.body.setOffset(60, 120);
		this.body.setSize(120, 120, false);
		this.play("run_roller");

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.body.velocity.x = this.speed;
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */
	// Write your code here.
	speed = 100;

	preUpdate(time, delta) {

		super.preUpdate(time, delta);

		this.flipX = this.body.velocity.x > 0;
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
