
// You can write more code here

/* START OF COMPILED CODE */

import Bunny_Prefab from "../Prefab/Bunny_Prefab.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class EndGame extends Phaser.Scene {

	constructor() {
		super("EndGame");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// enterKey
		const enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

		// editabletilemap
		this.cache.tilemap.add("editabletilemap_8087947b-5bc7-4dda-9f1c-d1157fac698a", {
			format: 1,
			data: {
				width: 10,
				height: 10,
				orientation: "orthogonal",
				tilewidth: 32,
				tileheight: 32,
				tilesets: [],
				layers: [],
			},
		});
		const editabletilemap = this.add.tilemap("editabletilemap_8087947b-5bc7-4dda-9f1c-d1157fac698a");

		// oKey
		const oKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.O);

		// bG1
		const bG1 = this.add.tileSprite(419, 279, 1570, 500, "BG1");
		bG1.scaleX = 1.5;
		bG1.scaleY = 1.5;
		bG1.tintTopLeft = 16718362;
		bG1.tintTopRight = 16721189;
		bG1.tintBottomLeft = 3669520;
		bG1.tintBottomRight = 3669520;

		// bG2
		const bG2 = this.add.tileSprite(419, 279, 1570, 500, "BG2");
		bG2.scaleX = 1.5;
		bG2.scaleY = 1.5;

		// bG3
		const bG3 = this.add.tileSprite(419, 279, 1570, 500, "BG3");
		bG3.scaleX = 1.5;
		bG3.scaleY = 1.5;

		// bG4
		const bG4 = this.add.tileSprite(419, 279, 1570, 500, "BG4");
		bG4.scaleX = 1.5;
		bG4.scaleY = 1.5;

		// bG5
		const bG5 = this.add.tileSprite(419, 279, 1570, 500, "BG5");
		bG5.scaleX = 1.5;
		bG5.scaleY = 1.5;

		// bG6
		const bG6 = this.add.tileSprite(419, 279, 1570, 500, "BG6");
		bG6.scaleX = 1.5;
		bG6.scaleY = 1.5;

		// bG7
		const bG7 = this.add.tileSprite(419, 279, 1570, 500, "BG7");
		bG7.scaleX = 1.5;
		bG7.scaleY = 1.5;

		// bunny_Prefab
		const bunny_Prefab = new Bunny_Prefab(this, 139, 413);
		this.add.existing(bunny_Prefab);
		bunny_Prefab.scaleX = 2;
		bunny_Prefab.scaleY = 2;
		bunny_Prefab.body.moves = false;
		bunny_Prefab.body.pushable = false;
		bunny_Prefab.play("run");

		// floor
		const floor = this.add.tileSprite(400, 561, 800, 80, "Floor");
		floor.scaleX = 1.2;
		floor.scaleY = 1.2;

		// text_1
		const text_1 = this.add.text(193, 121, "", {});
		text_1.text = "THX FOR PLAYING";
		text_1.setStyle({ "fontSize": "6em", "fontStyle": "bold" });

		// text
		const text = this.add.text(331, 266, "", {});
		text.text = "your time run : ";
		text.setStyle({ "fontSize": "3em" });

		// text_2
		const text_2 = this.add.text(378, 323, "", {});
		text_2.text = "NaN Sec";
		text_2.setStyle({ "align": "center", "fontSize": "4em", "fontStyle": "bold" });

		// text_3
		const text_3 = this.add.text(294, 411, "", {});
		text_3.text = "Press Enter to Back to Title";
		text_3.setStyle({ "fontSize": "2em" });

		this.bG1 = bG1;
		this.bG2 = bG2;
		this.bG3 = bG3;
		this.bG4 = bG4;
		this.bG5 = bG5;
		this.bG6 = bG6;
		this.bG7 = bG7;
		this.floor = floor;
		this.text_1 = text_1;
		this.text = text;
		this.text_2 = text_2;
		this.text_3 = text_3;
		this.enterKey = enterKey;
		this.editabletilemap = editabletilemap;
		this.oKey = oKey;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.TileSprite} */
	bG1;
	/** @type {Phaser.GameObjects.TileSprite} */
	bG2;
	/** @type {Phaser.GameObjects.TileSprite} */
	bG3;
	/** @type {Phaser.GameObjects.TileSprite} */
	bG4;
	/** @type {Phaser.GameObjects.TileSprite} */
	bG5;
	/** @type {Phaser.GameObjects.TileSprite} */
	bG6;
	/** @type {Phaser.GameObjects.TileSprite} */
	bG7;
	/** @type {Phaser.GameObjects.TileSprite} */
	floor;
	/** @type {Phaser.GameObjects.Text} */
	text_1;
	/** @type {Phaser.GameObjects.Text} */
	text;
	/** @type {Phaser.GameObjects.Text} */
	text_2;
	/** @type {Phaser.GameObjects.Text} */
	text_3;
	/** @type {Phaser.Input.Keyboard.Key} */
	enterKey;
	/** @type {Phaser.Tilemaps.Tilemap} */
	editabletilemap;
	/** @type {Phaser.Input.Keyboard.Key} */
	oKey;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		if(this.registry.get("Timer") > this.registry.get("CurrentTimer")){	
			this.registry.set("Timer",this.registry.get("CurrentTimer"));
		}

			this.text_2.text = this.registry.get("CurrentTimer").toFixed(2) + " Sec";
			this.text_2.setStyle({ "align": "center", "fontSize": "4em", "fontStyle": "bold" });

		this.blinking = this.time.addEvent({
			delay: 500, // Toggle every 0.5 seconds
			callback: () => {
				this.text_3.visible = !this.text_3.visible; // Toggle visibility
			},
			loop: true // Repeat indefinitely
		});
	}

	update() {
		this.bgParallexControl();
		this.floor.tilePositionX += 7;
		if (this.enterKey.isDown) {
			this.scene.start("TitleMenu");
		}
		if(this.oKey.isDown){
			console.log("this is Timeer : " +this.registry.get("Timer").toFixed(2) + " Sec");
			console.log(true);
			console.log(this.registry.get("Tut"));
		}
	}

	bgParallexControl() {
        //logic for parallax effect
		this.bG7.tilePositionX += 7;
		this.bG6.tilePositionX += 6;
		this.bG5.tilePositionX += 5;
		this.bG4.tilePositionX += 4;
		this.bG3.tilePositionX += 3;
		this.bG2.tilePositionX += 2;
		this.bG1.tilePositionX += 1;

    }

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
