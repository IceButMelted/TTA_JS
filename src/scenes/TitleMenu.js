
// You can write more code here

/* START OF COMPILED CODE */

import Bunny_Prefab from "../Prefab/Bunny_Prefab.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class TitleMenu extends Phaser.Scene {

	constructor() {
		super("TitleMenu");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// editabletilemap
		this.cache.tilemap.add("editabletilemap_645d7273-dae4-48f8-9149-69d434382e83", {
			format: 1,
			data: {
				width: 5,
				height: 5,
				orientation: "orthogonal",
				tilewidth: 32,
				tileheight: 32,
				tilesets: [
					{
						columns: 13,
						margin: 0,
						spacing: 0,
						tilewidth: 32,
						tileheight: 32,
						tilecount: 208,
						firstgid: 1,
						image: "grass tileset",
						name: "grass tileset",
						imagewidth: 416,
						imageheight: 512,
					},
				],
				layers: [
					{
						type: "tilelayer",
						name: "layer",
						width: 10,
						height: 5,
						opacity: 1,
						data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
					},
				],
			},
		});
		const editabletilemap = this.add.tilemap("editabletilemap_645d7273-dae4-48f8-9149-69d434382e83");
		editabletilemap.addTilesetImage("grass tileset");

		// enterKey
		const enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

		// kKey
		const kKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.K);

		// cKey
		const cKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);

		// oKey
		const oKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.O);

		// layer_1
		const layer_1 = this.add.layer();
		layer_1.blendMode = Phaser.BlendModes.SKIP_CHECK;

		// bG1
		const bG1 = this.add.image(475, 300, "BG1");
		bG1.scaleX = 1.25;
		bG1.scaleY = 1.25;
		bG1.tintTopLeft = 16716563;
		bG1.tintTopRight = 16718876;
		bG1.tintBottomLeft = 3145493;
		bG1.tintBottomRight = 3145493;
		layer_1.add(bG1);

		// bG2
		const bG2 = this.add.image(336, 300, "BG2");
		bG2.scaleX = 1.25;
		bG2.scaleY = 1.25;
		bG2.alpha = 0.75;
		bG2.alphaTopLeft = 0.75;
		bG2.alphaTopRight = 0.75;
		bG2.alphaBottomLeft = 0.75;
		bG2.alphaBottomRight = 0.75;
		layer_1.add(bG2);

		// bG3
		const bG3 = this.add.image(557, 300, "BG3");
		bG3.scaleX = 1.25;
		bG3.scaleY = 1.25;
		bG3.alpha = 0.75;
		bG3.alphaTopLeft = 0.75;
		bG3.alphaTopRight = 0.75;
		bG3.alphaBottomLeft = 0.75;
		bG3.alphaBottomRight = 0.75;
		layer_1.add(bG3);

		// bG4
		const bG4 = this.add.image(725, 300, "BG4");
		bG4.scaleX = 1.25;
		bG4.scaleY = 1.25;
		bG4.alpha = 0.75;
		bG4.alphaTopLeft = 0.75;
		bG4.alphaTopRight = 0.75;
		bG4.alphaBottomLeft = 0.75;
		bG4.alphaBottomRight = 0.75;
		layer_1.add(bG4);

		// bG5
		const bG5 = this.add.image(869, 300, "BG5");
		bG5.scaleX = 1.25;
		bG5.scaleY = 1.25;
		bG5.alpha = 0.75;
		bG5.alphaTopLeft = 0.75;
		bG5.alphaTopRight = 0.75;
		bG5.alphaBottomLeft = 0.75;
		bG5.alphaBottomRight = 0.75;
		layer_1.add(bG5);

		// bG6
		const bG6 = this.add.image(850, 300, "BG6");
		bG6.scaleX = 1.25;
		bG6.scaleY = 1.25;
		bG6.alpha = 0.75;
		bG6.alphaTopLeft = 0.75;
		bG6.alphaTopRight = 0.75;
		bG6.alphaBottomLeft = 0.75;
		bG6.alphaBottomRight = 0.75;
		layer_1.add(bG6);

		// bG7
		const bG7 = this.add.image(675, 300, "BG7");
		bG7.scaleX = 1.25;
		bG7.scaleY = 1.25;
		bG7.alpha = 0.75;
		bG7.alphaTopLeft = 0.75;
		bG7.alphaTopRight = 0.75;
		bG7.alphaBottomLeft = 0.75;
		bG7.alphaBottomRight = 0.75;
		layer_1.add(bG7);

		// bunny_Prefab
		const bunny_Prefab = new Bunny_Prefab(this, 91, 365);
		this.add.existing(bunny_Prefab);
		bunny_Prefab.scaleX = 3;
		bunny_Prefab.scaleY = 3;
		bunny_Prefab.body.moves = false;
		bunny_Prefab.body.pushable = false;
		bunny_Prefab.body.immovable = true;
		bunny_Prefab.play("idle");

		// text_1
		const text_1 = this.add.text(356, 65, "", {});
		text_1.text = "BUNNY FIND \nWAY TO HOME";
		text_1.setStyle({ "align": "justify", "fontSize": "6em", "fontStyle": "bold" });

		// layer
		const layer = editabletilemap.createLayer("layer", ["grass tileset"], -48, 227);
		layer.scaleX = 3;
		layer.scaleY = 3;

		// text_2
		const text_2 = this.add.text(386, 277, "", {});
		text_2.text = "Press Enter to Start";
		text_2.setStyle({ "fontSize": "3em" });

		// text
		const text = this.add.text(425, 432, "", {});
		text.text = "Fastest finish All Level \nNaN";
		text.setStyle({ "align": "center", "fontSize": "2em" });

		// text_3
		const text_3 = this.add.text(487, 502, "", {});
		text_3.text = "Press 'C' To clear Fastest Time";
		text_3.setStyle({ "align": "center", "fontSize": "1em" });

		// text_4
		const text_4 = this.add.text(6, 3, "", {});
		text_4.text = "Build : 142, Ver 0.1.2";
		text_4.setStyle({ "fontSize": "12px" });

		this.text_2 = text_2;
		this.text = text;
		this.text_3 = text_3;
		this.editabletilemap = editabletilemap;
		this.enterKey = enterKey;
		this.kKey = kKey;
		this.cKey = cKey;
		this.oKey = oKey;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Text} */
	text_2;
	/** @type {Phaser.GameObjects.Text} */
	text;
	/** @type {Phaser.GameObjects.Text} */
	text_3;
	/** @type {Phaser.Tilemaps.Tilemap} */
	editabletilemap;
	/** @type {Phaser.Input.Keyboard.Key} */
	enterKey;
	/** @type {Phaser.Input.Keyboard.Key} */
	kKey;
	/** @type {Phaser.Input.Keyboard.Key} */
	cKey;
	/** @type {Phaser.Input.Keyboard.Key} */
	oKey;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		// Create blinking effect for "Press Enter to Start"
		this.blinking = this.time.addEvent({
			delay: 500, // Toggle every 0.5 seconds
			callback: () => {
				this.text_2.visible = !this.text_2.visible; // Toggle visibility
			},
			loop: true // Repeat indefinitely
		});

		if(this.registry.get("Timer") == 9999){
			this.text.text = "Fastest finish All Level \nNaN";
		}
		else{
			this.text.text = "Fastest finish All Level \n" + this.registry.get("Timer").toFixed(2) + " Sec";
		}
		this.text.setStyle({ "align": "center", "fontSize": "2em" });

		//Musice
		
	}

	update(){

		if (this.enterKey.isDown) {
			let a = this.registry.get("Tut")
			if( a ==  true)
			{
				this.loadNextTut();
			}
			else{
				this.loadNextScene();
			}
		}

		if (this.kKey.isDown) {
			this.scene.start("EndGame");
		}
		if(this.oKey.isDown){
			console.log("this is Timeer : " +this.registry.get("Timer").toFixed(2) + " Sec");
		}

		if (this.cKey.isDown) {
			this.registry.set("Timer",999);
			this.text.text = "Fastest finish All Level \nNaN";
		}	



	}
	loadNextScene(){ 
		this.cameras.main.fadeOut(1000);
		this.cameras.main.once("camerafadeoutcomplete", () => {
			this.scene.start("Lv2");
		});
	}

	loadNextTut(){ 
		this.cameras.main.fadeOut(1000);
		this.cameras.main.once("camerafadeoutcomplete", () => {
			this.scene.start("Level");
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
