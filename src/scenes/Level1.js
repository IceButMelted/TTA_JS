
// You can write more code here

/* START OF COMPILED CODE */

import Bunny_Prefab from "../Prefab/Bunny_Prefab.js";
import Rolly_Prefab from "../Prefab/Rolly_Prefab.js";
import Protal_Prefab from "../Prefab/Protal_Prefab.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Level1 extends Phaser.Scene {

	constructor() {
		super("Level1");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// upKey
		const upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);

		// downKey
		const downKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);

		// leftKey
		const leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);

		// rightKey
		const rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

		// levelMap
		this.cache.tilemap.add("levelMap_b57a9c13-6e80-4627-a59e-eec92043ef01", {
			format: 1,
			data: {
				width: 30,
				height: 10,
				orientation: "orthogonal",
				tilewidth: 32,
				tileheight: 32,
				tilesets: [
					{
						columns: 5,
						margin: 0,
						spacing: 0,
						tilewidth: 32,
						tileheight: 32,
						tilecount: 5,
						firstgid: 1,
						image: "collisionsTileset",
						name: "collisionsTileset",
						imagewidth: 160,
						imageheight: 32,
					},
					{
						columns: 13,
						margin: 0,
						spacing: 0,
						tilewidth: 32,
						tileheight: 32,
						tilecount: 208,
						firstgid: 6,
						image: "grass tileset",
						name: "grass tileset",
						imagewidth: 416,
						imageheight: 512,
					},
				],
				layers: [
					{
						type: "tilelayer",
						name: "mainLayer",
						width: 60,
						height: 20,
						opacity: 1,
						data: [33, 33, 33, 33, 33, 33, 125, 33, 33, 33, 33, 33, 125, 33, 33, 33, 33, 125, 33, 124, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 125, 33, 33, 33, 33, 127, 33, 33, 33, 33, 33, 124, 33, 33, 33, 127, 33, 33, 33, 33, 33, 33, 124, 33, 33, 33, 33, 124, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 124, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 125, 33, 33, 33, 33, 125, 33, 33, 33, 33, 33, 33, 33, 124, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 37, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 38, 33, 37, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 38, 33, 37, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 38, 33, 33, 125, 33, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 33, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 33, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 33, 33, 33, 33, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 127, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 33, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 124, 33, 33, 33, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 33, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 33, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 33, 33, 125, 33, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 33, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 33, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 33, 33, 33, 33, 34, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 0, 0, 0, 0, 0, 0, 0, 32, 126, 34, 0, 0, 0, 0, 19, 20, 21, 0, 0, 0, 0, 0, 0, 0, 0, 19, 20, 21, 0, 0, 32, 33, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 125, 33, 33, 33, 34, 0, 0, 0, 0, 0, 0, 0, 0, 19, 21, 0, 0, 0, 0, 0, 0, 0, 32, 33, 34, 0, 0, 0, 0, 32, 127, 34, 0, 0, 0, 0, 0, 0, 0, 0, 32, 33, 34, 0, 0, 32, 33, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 33, 33, 124, 33, 34, 0, 0, 0, 0, 0, 0, 0, 0, 32, 34, 0, 0, 0, 0, 0, 0, 0, 32, 33, 34, 0, 84, 85, 86, 32, 33, 50, 20, 20, 20, 20, 20, 20, 20, 20, 51, 33, 34, 0, 0, 32, 33, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 33, 33, 33, 33, 34, 0, 0, 0, 0, 0, 0, 0, 0, 32, 34, 0, 0, 0, 0, 0, 0, 0, 32, 123, 34, 0, 0, 0, 0, 32, 33, 37, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 47, 0, 0, 32, 33, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 33, 33, 33, 124, 34, 0, 0, 0, 0, 0, 0, 203, 204, 32, 34, 0, 0, 0, 0, 0, 0, 0, 32, 33, 34, 0, 0, 0, 0, 32, 126, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 33, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 33, 125, 33, 33, 34, 0, 0, 0, 0, 0, 0, 19, 20, 51, 34, 0, 0, 0, 0, 0, 0, 0, 45, 46, 47, 84, 85, 86, 0, 32, 33, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 33, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 33, 33, 125, 33, 34, 0, 0, 0, 0, 0, 0, 32, 33, 126, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 33, 34, 0, 0, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 45, 46, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 33, 33, 33, 126, 34, 0, 0, 0, 0, 0, 0, 32, 124, 33, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 123, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 33, 33, 33, 33, 34, 188, 189, 7, 0, 203, 204, 32, 33, 33, 34, 188, 189, 8, 6, 6, 8, 0, 7, 7, 7, 7, 0, 7, 7, 32, 33, 34, 8, 6, 6, 8, 0, 7, 7, 7, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 7, 7, 7, 0, 32, 33, 33, 33, 33, 50, 20, 20, 20, 20, 20, 20, 51, 33, 124, 50, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 51, 33, 50, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 51, 33, 33, 126, 33, 33, 126, 33, 125, 33, 33, 33, 33, 33, 126, 33, 126, 33, 33, 124, 33, 33, 33, 125, 33, 33, 33, 125, 33, 33, 33, 33, 127, 33, 33, 124, 33, 33, 33, 127, 33, 124, 33, 127, 33, 33, 125, 33, 33, 33, 33, 33, 124, 33, 33, 33, 33, 33, 33, 124, 33, 33, 124, 33, 33, 124, 33, 33, 33, 33, 33, 33, 125, 33, 33, 33, 33, 126, 33, 33, 33, 33, 33, 124, 33, 33, 33, 33, 124, 33, 127, 33, 125, 126, 124, 33, 33, 33, 124, 33, 33, 127, 33, 124, 33, 125, 33, 33, 127, 126, 33, 33, 33, 33, 125, 33, 125, 125, 33, 33, 33, 33, 33, 126, 33, 33, 33, 33, 33, 125, 33, 33, 33, 33, 125, 33, 33, 33, 33, 33, 33, 33, 33, 126, 33, 127, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 125, 33, 33, 33, 124, 33, 33, 33, 33, 33, 33, 33, 124, 33, 33],
					},
					{
						type: "tilelayer",
						name: "collisionLayer",
						width: 60,
						height: 20,
						opacity: 1,
						data: [1, 2, 3, 4, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 2, 2, 2, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					},
				],
			},
		});
		const levelMap = this.add.tilemap("levelMap_b57a9c13-6e80-4627-a59e-eec92043ef01");
		levelMap.addTilesetImage("collisionsTileset");
		levelMap.addTilesetImage("grass tileset");

		// spaceKey
		const spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

		// bgParallex
		const bgParallex = this.add.layer();
		bgParallex.blendMode = Phaser.BlendModes.SKIP_CHECK;

		// bG1
		const bG1 = this.add.tileSprite(188, 300, 1570, 500, "BG1");
		bG1.tintTopLeft = 13986153;
		bG1.tintBottomLeft = 0;
		bG1.tintBottomRight = 0;
		bgParallex.add(bG1);

		// bG2
		const bG2 = this.add.tileSprite(188, 300, 1570, 500, "BG2");
		bgParallex.add(bG2);

		// bG3
		const bG3 = this.add.tileSprite(188, 300, 1570, 500, "BG3");
		bgParallex.add(bG3);

		// bG4
		const bG4 = this.add.tileSprite(188, 300, 1570, 500, "BG4");
		bgParallex.add(bG4);

		// bG5
		const bG5 = this.add.tileSprite(188, 300, 1570, 500, "BG5");
		bgParallex.add(bG5);

		// bG6
		const bG6 = this.add.tileSprite(188, 300, 1570, 500, "BG6");
		bgParallex.add(bG6);

		// bG7
		const bG7 = this.add.tileSprite(188, 300, 1570, 500, "BG7");
		bgParallex.add(bG7);

		// ui
		const ui = this.add.layer();
		ui.blendMode = Phaser.BlendModes.SKIP_CHECK;

		// bunny
		const bunny = new Bunny_Prefab(this, 180, 401);
		this.add.existing(bunny);

		// roller0
		const roller0 = new Rolly_Prefab(this, 1001, 231);
		this.add.existing(roller0);

		// mainLayer
		const mainLayer = levelMap.createLayer("mainLayer", ["grass tileset"], 0, 0);

		// collisionLayer
		const collisionLayer = levelMap.createLayer("collisionLayer", ["collisionsTileset"], 0, 0);
		collisionLayer.blendMode = Phaser.BlendModes.OVERLAY;
		collisionLayer.visible = false;

		// protal
		const protal = new Protal_Prefab(this, 266, 211);
		this.add.existing(protal);

		// lists
		const food = [];
		const enemy_Roller = [roller0];

		// bunnyVsPlatform
		this.physics.add.collider(bunny, collisionLayer);

		// EnemyVsFloor
		this.physics.add.collider(enemy_Roller, collisionLayer);

		// collider
		this.physics.add.collider();

		this.bG1 = bG1;
		this.bG2 = bG2;
		this.bG3 = bG3;
		this.bG4 = bG4;
		this.bG5 = bG5;
		this.bG6 = bG6;
		this.bG7 = bG7;
		this.bunny = bunny;
		this.roller0 = roller0;
		this.mainLayer = mainLayer;
		this.collisionLayer = collisionLayer;
		this.protal = protal;
		this.upKey = upKey;
		this.downKey = downKey;
		this.leftKey = leftKey;
		this.rightKey = rightKey;
		this.levelMap = levelMap;
		this.spaceKey = spaceKey;
		this.food = food;
		this.enemy_Roller = enemy_Roller;

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
	/** @type {Bunny_Prefab} */
	bunny;
	/** @type {Rolly_Prefab} */
	roller0;
	/** @type {Phaser.Tilemaps.TilemapLayer} */
	mainLayer;
	/** @type {Phaser.Tilemaps.TilemapLayer} */
	collisionLayer;
	/** @type {Protal_Prefab} */
	protal;
	/** @type {Phaser.Input.Keyboard.Key} */
	upKey;
	/** @type {Phaser.Input.Keyboard.Key} */
	downKey;
	/** @type {Phaser.Input.Keyboard.Key} */
	leftKey;
	/** @type {Phaser.Input.Keyboard.Key} */
	rightKey;
	/** @type {Phaser.Tilemaps.Tilemap} */
	levelMap;
	/** @type {Phaser.Input.Keyboard.Key} */
	spaceKey;
	/** @type {Array<any>} */
	food;
	/** @type {Rolly_Prefab[]} */
	enemy_Roller;

	/* START-USER-CODE */

	// Write more your code here
	socre = 0;

	create() {

		this.editorCreate();



		const worldWidth = 1920;
		const worldHeight = 600;
		this.physics.world.setBounds(0, 0, worldWidth, worldHeight);
    	this.cameras.main.setBounds(0, 0, worldWidth, worldHeight);
		this.cameras.main.startFollow(this.bunny);
		//collision with pink tile
		this.collisionLayer.setCollision([1]);
		//collision with half pink and half gree as platfrom
		this.collisionLayer.forEachTile(tile => {

			if (tile.index === 2) {
				//
				tile.setCollision(false, false, true, false);
			}
		});

		/*Start Camera System*/
		this.prevCamX = this.cameras.main.scrollX;
        this.prevCamY = this.cameras.main.scrollY;
		this.diff_Cam = 10;
		/*End Camera System*/


	}

	update() {
		// Bunny movement logic
		//this.playerMovement();
		this.movePlayer();

		/*Start Camera System*/
		const cam = this.cameras.main;
        if (cam.scrollX !== this.prevCamX || cam.scrollY !== this.prevCamY) {
            this.bgParallexControl(cam.scrollX, cam.scrollY);
        }

        // Update previous camera position
        this.prevCamX = cam.scrollX;
        this.prevCamY = cam.scrollY;
		/*End Camera System*/

		if(this.downKey.isDown){
			console.log("Level");
			this.playProtalAnimation();
		}
		if(this.rightKey.isDown){
			console.log(this.bunny.health);
			this.bunny.health -= 1;
			console.log(this.bunny.health);
		}
		// if(this.upKey.isDown){
		// 	this.scene.start("Lv2");
		// }

	}

	movePlayer() {
		if (this.spaceKey.isDown && this.bunny.body.onFloor()) {
			this.bunny.body.velocity.y = -300;
		} else
		{
			this.bunny.body.gravity.y = 100;
		}

		let vel = 200;

		if (this.leftKey.isDown) {
			this.bunny.body.velocity.x = -vel;
			this.moveAnimation();
			this.bunny.flipX = true;
			//this.bgParallexControl('Left');

		} else if (this.rightKey.isDown) {
			this.bunny.body.velocity.x = vel;
			this.moveAnimation();
			this.bunny.flipX = false;
			//this.bgParallexControl('Right');

		} else {
			this.bunny.body.velocity.x = 0;
			this.stillAnimation();
		}
	}

	moveAnimation() {

		if (this.bunny.body.velocity.y < 0) {
			this.bunny.play("jump", true);

		} else if (this.bunny.body.velocity.y > 0) {
			this.bunny.play("fall", true);

		} else {
			this.bunny.play("run", true);
		}
	}

	stillAnimation() {

		if (this.bunny.body.velocity.y < 0) {
			this.bunny.play("jump", true);

		} else if (this.bunny.body.velocity.y > 0) {
			this.bunny.play("fall", true);

		} else {
			this.bunny.play("idle", true);
		}
	}

	// bgParallexControl(directionInput){
	// 	if(directionInput === 'Left'){
	// 		this.bG7.tilePositionX += 0.5;
	// 	}
	// 	if(directionInput === 'Right')
	// 		this.bG7.tilePositionX -= 0.5;
	// }

		bgParallexControl(scrollX, scrollY) {
        	// Your logic for parallax effect
			this.diff_Cam = this.prevCamX - scrollX
			this.bG7.tilePositionX -= this.diff_Cam*0.6;
			this.bG6.tilePositionX -= this.diff_Cam*0.5;
			this.bG5.tilePositionX -= this.diff_Cam*0.4;
			this.bG4.tilePositionX -= this.diff_Cam*0.3;
			this.bG3.tilePositionX -= this.diff_Cam*0.2;
			this.bG2.tilePositionX -= this.diff_Cam*0.1;
			this.bG1.tilePositionX -= this.diff_Cam*0.05;
        	//console.log("Parallax updating", this.prevCamX - scrollX, scrollY);
			this.bgParallexFollowingCam(this.diff_Cam);
			this.prevCamX = scrollX;
    	}

		bgParallexFollowingCam(diffX){
			this.bG7.x -= diffX;
			this.bG6.x -= diffX;
			this.bG5.x -= diffX;
			this.bG4.x -= diffX;
			this.bG3.x -= diffX;
			this.bG2.x -= diffX;
			this.bG1.x -= diffX;
		}

		playProtalAnimation(){
			this.protal.play("startPortal", true);

			this.protal.on("animationcomplete", (animation, frame) => {
    			if (animation.key === "startPortal") {
        			this.protal.anims.play("activeProtal", true);
    			}
			});
		}

	overlap(){
			console.log('overlap');
		}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
