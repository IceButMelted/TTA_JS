
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Protal_Prefab extends Phaser.Physics.Arcade.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "teleport inactivated", frame ?? 0);

		scene.physics.add.existing(this, false);
		this.body.moves = false;
		this.body.setOffset(16, 32);
		this.body.setSize(32, 32, false);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
