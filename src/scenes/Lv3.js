
// You can write more code here

/* START OF COMPILED CODE */

import Rolly_Prefab from "../Prefab/Rolly_Prefab.js";
import Protal_Prefab from "../Prefab/Protal_Prefab.js";
import Bunny_Prefab from "../Prefab/Bunny_Prefab.js";
import Generator_Prefab from "./Generator_Prefab.js";
import PowerUp_Prefab from "../Prefab/PowerUp_Prefab.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Lv3 extends Phaser.Scene {

	constructor() {
		super("Lv3");

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
						data: [33, 33, 33, 33, 33, 33, 125, 33, 33, 33, 33, 33, 125, 33, 33, 33, 33, 125, 33, 124, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 125, 33, 33, 33, 128, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 127, 33, 33, 33, 33, 33, 33, 124, 33, 33, 33, 33, 124, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 124, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 125, 33, 33, 33, 33, 125, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 128, 33, 33, 33, 33, 125, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 37, 46, 46, 46, 46, 46, 46, 46, 46, 38, 33, 33, 33, 33, 33, 33, 37, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 46, 38, 33, 37, 46, 46, 46, 46, 46, 46, 46, 46, 38, 33, 33, 33, 33, 125, 33, 33, 33, 125, 33, 34, 0, 0, 0, 0, 0, 0, 0, 0, 32, 33, 33, 33, 33, 33, 33, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 33, 34, 0, 0, 0, 0, 0, 0, 0, 0, 32, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 34, 0, 0, 0, 0, 0, 0, 0, 0, 45, 46, 46, 46, 46, 46, 46, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 33, 34, 0, 0, 0, 0, 0, 0, 0, 0, 32, 33, 33, 33, 33, 33, 33, 124, 33, 33, 33, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 33, 34, 0, 0, 0, 0, 0, 0, 0, 0, 32, 33, 33, 33, 33, 33, 33, 33, 33, 125, 33, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 24, 0, 0, 0, 22, 0, 0, 0, 0, 0, 0, 0, 32, 33, 34, 0, 0, 0, 0, 0, 0, 0, 0, 32, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 34, 0, 0, 0, 0, 0, 0, 0, 0, 19, 20, 21, 84, 85, 0, 19, 21, 0, 0, 0, 0, 0, 0, 0, 0, 32, 34, 84, 85, 86, 98, 0, 0, 0, 0, 0, 0, 0, 32, 33, 34, 0, 0, 0, 0, 0, 0, 0, 0, 32, 33, 33, 33, 33, 33, 33, 125, 33, 33, 33, 34, 0, 0, 0, 0, 0, 0, 0, 0, 32, 33, 34, 0, 0, 0, 32, 34, 0, 0, 0, 0, 0, 0, 0, 0, 32, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 33, 34, 0, 0, 0, 0, 0, 0, 0, 0, 32, 33, 33, 33, 33, 33, 33, 33, 33, 124, 33, 34, 0, 0, 0, 0, 0, 0, 0, 0, 32, 33, 34, 0, 0, 0, 32, 34, 58, 58, 58, 58, 58, 58, 59, 60, 32, 34, 0, 0, 0, 0, 0, 22, 0, 0, 0, 22, 0, 32, 33, 34, 0, 0, 0, 0, 0, 0, 0, 0, 32, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 34, 0, 0, 0, 0, 0, 19, 20, 20, 51, 33, 34, 84, 85, 0, 45, 63, 0, 0, 0, 0, 0, 0, 0, 0, 32, 34, 0, 0, 0, 0, 0, 98, 84, 85, 86, 98, 0, 32, 33, 34, 0, 0, 0, 0, 0, 0, 0, 0, 32, 33, 33, 33, 33, 33, 33, 33, 33, 33, 124, 34, 0, 0, 0, 0, 0, 32, 33, 33, 33, 33, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 45, 46, 47, 0, 0, 19, 20, 21, 0, 0, 0, 32, 33, 33, 33, 33, 33, 33, 33, 125, 33, 33, 34, 0, 0, 0, 0, 0, 32, 33, 33, 33, 33, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 34, 0, 0, 0, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 33, 34, 0, 0, 0, 32, 33, 33, 33, 33, 33, 33, 33, 33, 125, 33, 34, 0, 0, 0, 0, 19, 51, 33, 33, 33, 33, 34, 0, 0, 0, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 34, 84, 85, 86, 98, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 33, 34, 0, 0, 0, 32, 33, 33, 33, 33, 33, 33, 33, 33, 33, 126, 34, 0, 0, 0, 0, 32, 33, 33, 33, 33, 33, 34, 0, 85, 86, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 51, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 33, 34, 0, 0, 0, 32, 33, 33, 33, 33, 33, 33, 128, 33, 33, 33, 34, 0, 0, 0, 0, 32, 33, 33, 33, 33, 33, 34, 0, 0, 0, 32, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 33, 34, 0, 0, 0, 32, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 50, 20, 20, 20, 20, 51, 33, 33, 33, 33, 33, 50, 20, 20, 20, 51, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 50, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 51, 33, 50, 20, 20, 20, 51, 33, 33, 33, 33, 33, 33, 33, 33, 126, 33, 33, 126, 33, 125, 33, 33, 33, 33, 33, 126, 33, 126, 33, 33, 124, 33, 33, 33, 125, 33, 33, 33, 125, 33, 33, 33, 33, 127, 33, 33, 124, 33, 33, 33, 33, 33, 33, 33, 126, 33, 33, 33, 33, 33, 33, 33, 33, 124, 33, 33, 33, 33, 33, 33, 124, 33, 33, 124, 33, 33, 124, 33, 33, 33, 33, 33, 33, 125, 33, 33, 33, 33, 126, 33, 33, 33, 33, 33, 124, 33, 33, 33, 33, 124, 33, 127, 33, 125, 126, 124, 33, 33, 126, 33, 33, 128, 128, 33, 33, 33, 33, 33, 33, 127, 126, 33, 33, 33, 33, 125, 33, 125, 125, 33, 33, 33, 33, 33, 126, 33, 33, 33, 33, 33, 125, 33, 33, 33, 33, 125, 33, 33, 33, 33, 33, 33, 33, 33, 126, 33, 127, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 128, 33, 33, 33, 33, 126, 33, 33, 33, 125, 33, 33, 33, 124, 33, 33, 33, 33, 33, 33, 33, 124, 33, 33],
					},
					{
						type: "tilelayer",
						name: "collisionLayer",
						width: 60,
						height: 20,
						opacity: 1,
						data: [1, 2, 3, 4, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 2, 2, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 2, 2, 2, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					},
				],
			},
		});
		const levelMap = this.add.tilemap("levelMap_b57a9c13-6e80-4627-a59e-eec92043ef01");
		levelMap.addTilesetImage("collisionsTileset");
		levelMap.addTilesetImage("grass tileset");

		// spaceKey
		const spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

		// pKey
		const pKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);

		// oKey
		const oKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.O);

		// iKey
		const iKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I);

		// bgParallex
		const bgParallex = this.add.layer();
		bgParallex.blendMode = Phaser.BlendModes.SKIP_CHECK;

		// bG1
		const bG1 = this.add.tileSprite(142, 334, 1570, 500, "BG1");
		bG1.tintTopLeft = 4587274;
		bG1.tintTopRight = 4587274;
		bG1.tintBottomLeft = 11730944;
		bG1.tintBottomRight = 11730944;
		bgParallex.add(bG1);

		// bG2
		const bG2 = this.add.tileSprite(142, 334, 1570, 500, "BG2");
		bG2.tintTopLeft = 4587274;
		bG2.tintTopRight = 4587274;
		bG2.tintBottomLeft = 11730944;
		bG2.tintBottomRight = 11730944;
		bgParallex.add(bG2);

		// bG3
		const bG3 = this.add.tileSprite(142, 334, 1570, 500, "BG3");
		bG3.tintTopLeft = 4587274;
		bG3.tintTopRight = 4587274;
		bG3.tintBottomLeft = 11730944;
		bG3.tintBottomRight = 11730944;
		bgParallex.add(bG3);

		// bG4
		const bG4 = this.add.tileSprite(142, 334, 1570, 500, "BG4");
		bG4.tintTopLeft = 4587274;
		bG4.tintTopRight = 4587274;
		bG4.tintBottomLeft = 11730944;
		bG4.tintBottomRight = 11730944;
		bgParallex.add(bG4);

		// bG5
		const bG5 = this.add.tileSprite(142, 334, 1570, 500, "BG5");
		bG5.tintTopLeft = 4587274;
		bG5.tintTopRight = 4587274;
		bG5.tintBottomLeft = 11730944;
		bG5.tintBottomRight = 11730944;
		bgParallex.add(bG5);

		// bG6
		const bG6 = this.add.tileSprite(142, 334, 1570, 500, "BG6");
		bG6.tintTopLeft = 4587274;
		bG6.tintTopRight = 4587274;
		bG6.tintBottomLeft = 11730944;
		bG6.tintBottomRight = 11730944;
		bgParallex.add(bG6);

		// bG7
		const bG7 = this.add.tileSprite(142, 334, 1570, 500, "BG7");
		bG7.tintTopLeft = 4587274;
		bG7.tintTopRight = 4587274;
		bG7.tintBottomLeft = 11730944;
		bG7.tintBottomRight = 11730944;
		bgParallex.add(bG7);

		// enemy_Container
		const enemy_Container = this.add.container(0, 0);
		enemy_Container.blendMode = Phaser.BlendModes.SKIP_CHECK;

		// roller0
		const roller0 = new Rolly_Prefab(this, 650, 409);
		enemy_Container.add(roller0);

		// roller_1
		const roller_1 = new Rolly_Prefab(this, 1336, 478);
		enemy_Container.add(roller_1);

		// roller_2
		const roller_2 = new Rolly_Prefab(this, 1167, 282);
		enemy_Container.add(roller_2);

		// roller_3
		const roller_3 = new Rolly_Prefab(this, 970, 190);
		enemy_Container.add(roller_3);

		// roller_4
		const roller_4 = new Rolly_Prefab(this, 973, 379);
		enemy_Container.add(roller_4);

		// protal
		const protal = new Protal_Prefab(this, 1587, 480);
		this.add.existing(protal);

		// bunny
		const bunny = new Bunny_Prefab(this, 180, 401);
		this.add.existing(bunny);

		// generator0
		const generator0 = new Generator_Prefab(this, 784, 376);
		this.add.existing(generator0);

		// boxContainer
		const boxContainer = this.add.container(0, 0);
		boxContainer.blendMode = Phaser.BlendModes.SKIP_CHECK;

		// box_1
		const box_1 = this.physics.add.image(411, 193, "Box_1");
		box_1.scaleX = 0.9;
		box_1.scaleY = 0.9;
		box_1.body.maxVelocity.x = 1;
		box_1.body.maxVelocity.y = 200;
		box_1.body.drag.x = 100;
		box_1.body.friction.x = 0;
		box_1.body.allowRotation = false;
		box_1.body.setSize(64, 64, false);
		boxContainer.add(box_1);

		// box_2
		const box_2 = this.physics.add.image(1186, 473, "Box_1");
		box_2.scaleX = 0.9;
		box_2.scaleY = 0.9;
		box_2.body.maxVelocity.x = 1;
		box_2.body.maxVelocity.y = 200;
		box_2.body.drag.x = 100;
		box_2.body.friction.x = 0;
		box_2.body.allowRotation = false;
		box_2.body.setSize(64, 64, false);
		boxContainer.add(box_2);

		// mainLayer
		const mainLayer = levelMap.createLayer("mainLayer", ["grass tileset"], 0, 0);

		// collisionLayer
		const collisionLayer = levelMap.createLayer("collisionLayer", ["collisionsTileset"], 0, 0);
		collisionLayer.blendMode = Phaser.BlendModes.OVERLAY;
		collisionLayer.visible = false;

		// ui_static
		const ui_static = this.add.layer();
		ui_static.blendMode = Phaser.BlendModes.SKIP_CHECK;

		// powerUp_Container
		const powerUp_Container = this.add.container(0, 0);
		powerUp_Container.blendMode = Phaser.BlendModes.SKIP_CHECK;

		// powerUp0
		const powerUp0 = new PowerUp_Prefab(this, 254, 171);
		powerUp_Container.add(powerUp0);

		// powerUp_1
		const powerUp_1 = new PowerUp_Prefab(this, 841, 265);
		powerUp_Container.add(powerUp_1);

		// powerUp_2
		const powerUp_2 = new PowerUp_Prefab(this, 834, 377);
		powerUp_Container.add(powerUp_2);

		// ui_Overlay
		const ui_Overlay = this.add.container(0, 0);
		ui_Overlay.blendMode = Phaser.BlendModes.SKIP_CHECK;

		// playerHP
		const playerHP = this.add.text(-119, 567, "", {});
		playerHP.text = "Live Left : 3";
		playerHP.setStyle({ "fontSize": "24px", "fontStyle": "bold" });
		ui_Overlay.add(playerHP);

		// timerText
		const timerText = this.add.text(83, 567, "", {});
		timerText.text = "Live Left : 3";
		timerText.setStyle({ "fontSize": "24px", "fontStyle": "bold" });
		ui_Overlay.add(timerText);

		// lists
		const food = [];
		const enemy_Roller = [roller_4, roller_3, roller_2, roller_1, roller0];
		const box = [box_1, box_2];
		const powerUp = [powerUp_2, powerUp_1, powerUp0];

		// BunnyVsPlatform
		this.physics.add.collider(bunny, collisionLayer);

		// EnemyVsFloor
		this.physics.add.collider(enemy_Roller, collisionLayer);

		// BoxVsFloor
		this.physics.add.collider(box, collisionLayer);

		// BunnyVsBox
		this.physics.add.collider(bunny, box);

		// BunnyVsGenerator
		this.physics.add.overlap(bunny, generator0, this.collectedGenerator, undefined, this);

		// BunnyVsProtal
		this.physics.add.overlap(bunny, protal, this.loadNextScene, undefined, this);

		// BunnyVsPowerUp
		this.physics.add.collider(bunny, powerUp, this.collectedPowerUp, undefined, this);

		// BunnyVsEnemy
		const bunnyVsEnemy = this.physics.add.overlap(bunny, enemy_Roller, this.playerVsEnemies, undefined, this);

		this.bG1 = bG1;
		this.bG2 = bG2;
		this.bG3 = bG3;
		this.bG4 = bG4;
		this.bG5 = bG5;
		this.bG6 = bG6;
		this.bG7 = bG7;
		this.roller0 = roller0;
		this.roller_1 = roller_1;
		this.roller_2 = roller_2;
		this.roller_3 = roller_3;
		this.roller_4 = roller_4;
		this.protal = protal;
		this.bunny = bunny;
		this.generator0 = generator0;
		this.box_1 = box_1;
		this.box_2 = box_2;
		this.boxContainer = boxContainer;
		this.mainLayer = mainLayer;
		this.collisionLayer = collisionLayer;
		this.powerUp0 = powerUp0;
		this.powerUp_1 = powerUp_1;
		this.powerUp_2 = powerUp_2;
		this.powerUp_Container = powerUp_Container;
		this.playerHP = playerHP;
		this.timerText = timerText;
		this.ui_Overlay = ui_Overlay;
		this.upKey = upKey;
		this.downKey = downKey;
		this.leftKey = leftKey;
		this.rightKey = rightKey;
		this.levelMap = levelMap;
		this.spaceKey = spaceKey;
		this.pKey = pKey;
		this.oKey = oKey;
		this.bunnyVsEnemy = bunnyVsEnemy;
		this.iKey = iKey;
		this.food = food;
		this.enemy_Roller = enemy_Roller;
		this.box = box;
		this.powerUp = powerUp;

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
	/** @type {Rolly_Prefab} */
	roller0;
	/** @type {Rolly_Prefab} */
	roller_1;
	/** @type {Rolly_Prefab} */
	roller_2;
	/** @type {Rolly_Prefab} */
	roller_3;
	/** @type {Rolly_Prefab} */
	roller_4;
	/** @type {Protal_Prefab} */
	protal;
	/** @type {Bunny_Prefab} */
	bunny;
	/** @type {Generator_Prefab} */
	generator0;
	/** @type {Phaser.Physics.Arcade.Image} */
	box_1;
	/** @type {Phaser.Physics.Arcade.Image} */
	box_2;
	/** @type {Phaser.GameObjects.Container} */
	boxContainer;
	/** @type {Phaser.Tilemaps.TilemapLayer} */
	mainLayer;
	/** @type {Phaser.Tilemaps.TilemapLayer} */
	collisionLayer;
	/** @type {PowerUp_Prefab} */
	powerUp0;
	/** @type {PowerUp_Prefab} */
	powerUp_1;
	/** @type {PowerUp_Prefab} */
	powerUp_2;
	/** @type {Phaser.GameObjects.Container} */
	powerUp_Container;
	/** @type {Phaser.GameObjects.Text} */
	playerHP;
	/** @type {Phaser.GameObjects.Text} */
	timerText;
	/** @type {Phaser.GameObjects.Container} */
	ui_Overlay;
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
	/** @type {Phaser.Input.Keyboard.Key} */
	pKey;
	/** @type {Phaser.Input.Keyboard.Key} */
	oKey;
	/** @type {Phaser.Physics.Arcade.Collider} */
	bunnyVsEnemy;
	/** @type {Phaser.Input.Keyboard.Key} */
	iKey;
	/** @type {Array<any>} */
	food;
	/** @type {Rolly_Prefab[]} */
	enemy_Roller;
	/** @type {Phaser.Physics.Arcade.Image[]} */
	box;
	/** @type {PowerUp_Prefab[]} */
	powerUp;

	/* START-USER-CODE */

	// Write more your code here
	holdTime = 0; // Time counter for how long the "downKey" is held
	maxHoldTime = 0.5;
	canJump = true;
	canUseProtal = false;
	vel = 200;

	create() {

		this.editorCreate();
		const worldWidth = 1920;
		const worldHeight = 600;
		this.physics.world.setBounds(0, 0, worldWidth, worldHeight);

		//set cameras system
		this.cameras.main.fadeIn();
		this.cameras.main.setZoom(1.5);
    	this.cameras.main.setBounds(0, 0, worldWidth, worldHeight);
		this.cameras.main.startFollow(this.bunny);
		this.cameras.main.zoomTo(1, 1000);


		this.elapsedTime = 0; // Initialize time counter
        this.timerEvent = this.time.addEvent({
            delay: 100, // Update every 100ms for smoother time tracking
            callback: this.updateTimer,
            callbackScope: this,
            loop: true
        });


		/* Start Set Tile Collision */
		//collision with pink tile
		this.collisionLayer.setCollision([1]);
		//collision with half pink and half gree as platfrom
		this.collisionLayer.forEachTile(tile => {

			if (tile.index === 2) {
				//collision only top
				tile.setCollision(false, false, true, false);
			}
		});
		/* End Set Tile Collision */

		this.canUseProtal = false;
		this.protal.disableBody();

		/*Start Camera System*/
		this.prevCamX = this.cameras.main.scrollX;
        this.prevCamY = this.cameras.main.scrollY;
		this.diff_Cam = 10;
		/*End Camera System*/

		this.playerHP.setText("Live Left : " + this.bunny.health);


	}



	update(time, delta) {

		//----Testing Zone----///
		if(this.pKey.isDown){
			// Set an initial global value
			this.stopTimer();

			this.cameras.main.fadeOut(1000);
			this.cameras.main.once("camerafadeoutcomplete", () => {
			this.scene.start("EndGame");
		});
        	//console.log(this.registry.get("gameScore"));
			//console.log(this.canUseProtal);
		}
		if(this.oKey.isDown){
			console.log("this is Timeer : " +this.registry.get("Timer").toFixed(2) + " Sec");
		}
		if(this.iKey.isDown){	
			console.log(true);
			console.log(this.registry.get("Tut"));
		}
		//--End Testing Zone--///

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


    	this.jumpLogic(delta); // Call the function to update the hold time

	}

	movePlayer() {
		if (this.spaceKey.isDown && this.bunny.body.onFloor()) {
			this.bunny.body.velocity.y = -300;
		} else
		{
			this.bunny.body.gravity.y = 100;
		}



		if (this.leftKey.isDown) {
			if(this.bunny.body.onFloor() && this.bunny.body.touching.left){
				this.bunny.body.velocity.x = -this.vel/2;
				this.bunny.play("push",true);
				this.bunny.flipX = true;
			}
			else{
				this.bunny.body.velocity.x = -this.vel;
				this.moveAnimation();
				this.bunny.flipX = true;
			}

			//this.bgParallexControl('Left');

		} else if (this.rightKey.isDown) {
			if(this.bunny.body.onFloor() && this.bunny.body.touching.right){
				this.bunny.body.velocity.x = this.vel/2;
				this.bunny.play("push",true);
				this.bunny.flipX = false;
			}
			else{
				this.bunny.body.velocity.x = this.vel;
				this.moveAnimation();
				this.bunny.flipX = false;
			}

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

	// Function to update the hold time when "spaceKey" is pressed
 	jumpLogic(delta) {
    	// Check if the spaceKey is pressed and the bunny can still jump
    	if (this.spaceKey.isDown && this.holdTime < this.maxHoldTime && this.canJump) {
    		this.bunny.setVelocityY(-300); // Bunny keeps jumping up
			if(this.canPlayJumpSound){
				this.sound.play("jumpSnd");
				this.canPlayJumpSound = false;
			}
    	}

    	// If the spaceKey is held and the bunny is in the air, increase the hold time
    	if (this.spaceKey.isDown && !this.bunny.body.onFloor() && this.canJump) {
        	if (this.holdTime < this.maxHoldTime) {
            	// Increase hold time while the spaceKey is held and bunny is in the air
            	this.holdTime += delta / 1000; // delta is time in seconds
            	this.bunny.setVelocityY(-300); // Keep the bunny moving up
    	   	} else {
            	// Stop jumping if the hold time exceeds maxHoldTime
            	this.bunny.setVelocityY(50);
            	this.canJump = false; // Prevent further jumping until on the ground
				this.canPlayJumpSound = true;
        	}
    	}

		// If the spaceKey is not pressed, stop the jump immediately
    	if (!this.spaceKey.isDown && !this.bunny.body.onFloor() && this.canJump) {
    	   	this.bunny.setVelocityY(50); // Stop jumping if the key is released
        	this.canJump = false; // Prevent further jumping until on the ground
			this.canPlayJumpSound = true;
			this.sound.stopByKey("jumpSnd");
			return;
    	}

    	// If the bunny is on the floor, reset hold time and allow jumping again
   		if (this.bunny.body.onFloor()) {
   			this.holdTime = 0;
        	this.canJump = true;
    	}
		//Display the hold time in the console for debugging purposes
    	//console.log('Hold Time: ' + this.holdTime.toFixed(2) + 's');
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

	bgParallexControl(scrollX, scrollY) {
        //logic for parallax effect
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

		//contol BG to move with camera
	bgParallexFollowingCam(diffX){
		this.bG7.x -= diffX;
		this.bG6.x -= diffX;
		this.bG5.x -= diffX;
		this.bG4.x -= diffX;
		this.bG3.x -= diffX;
		this.bG2.x -= diffX;
		this.bG1.x -= diffX;
		this.ui_Overlay.x -= diffX;
	}

	//play Animation Door
	playProtalAnimation(){
		//start Animation opeing portal
		this.protal.play("startPortal", true);
		this.protal.body.enable = true;
		//wait until Animation completed
		this.protal.on("animationcomplete", (animation, frame) => {
			//start and loop Animation loop Protal
    		this.protal.anims.play("activeProtal", true);
		});
	}
	playerVsEnemies(player, enemy) {

		if ((player.y + player.body.height * 0.5 < enemy.y) && player.body.velocity.y > 0) {

			enemy.destroy();
			this.sound.play("enemy-death");
			player.smashEnemy();
			this.registry.set("enemyKilled",this.registry.get("enemyKilled") + 1 )


		} else{
			console.log("hurt");
			this.sound.play("hurtSnd");
			this.bunny.hurt();
			this.playerHP.setText("Live Left : " + this.bunny.health);
			if(this.bunny.health <= 0){
				this.bunny.health = 3;
				this.reloadScene();
			}
		}
	}

	collectedGenerator(bunny, generator) {
    	//console.log("HIT GENERETOR");
		this.sound.play("star");
   		generator.disableBody();
    	generator.destroy();
    	this.canUseProtal = true;
    	this.playProtalAnimation(); 
	}

	loadNextScene(bunny,protal){ 
		this.sound.play("doorSound");
		this.stopTimer();

		this.cameras.main.fadeOut(1000);
		protal.disableBody();
		this.cameras.main.once("camerafadeoutcomplete", () => {
			this.scene.start("EndGame");
		});
	}

	collectedPowerUp(bunny, powerup){
		powerup.disableBody();
		this.sound.play("powerUp");
		powerup.destroy();
		bunny.setTint("0xff0000");
		this.vel = this.vel * 1.5;

		this.time.addEvent({
			delay : 5000,
			callback: () => {
				bunny.clearTint();
				this.vel = this.vel / 1.5;
			},
			loop : false
		});
	}

	reloadScene(){
		this.cameras.main.fadeOut(1000);
		this.cameras.main.once("camerafadeoutcomplete", () => {
			this.scene.restart();
		});
	}

	updateTimer() {
        this.elapsedTime += 0.1; // Increase time by 0.1 second (100ms)
        const formattedTime = this.elapsedTime.toFixed(2); // Format to 2 decimal places
		//console.log("Time: " + formattedTime);
        this.timerText.setText("Time: " + formattedTime); // Update the display
    }

	stopTimer() {
        if (this.timerEvent) {
            this.timerEvent.remove(); // Stop the timer
            console.log("Timer Stopped at:", this.elapsedTime.toFixed(2));
			let oldTime = this.registry.get("CurrentTimer") || 0; 
			let formattedTime = this.elapsedTime; // Format to 2 decimal places
			let newTime = (oldTime + formattedTime);	
			console.log("3Old Time:", oldTime);
			console.log("3New Time:", newTime);
			this.registry.set("CurrentTimer", newTime);
        }

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
}