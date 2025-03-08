import Level from "./scenes/Level.js";
import Preload from "./scenes/Preload.js";

window.addEventListener('load', function () {

	var game = new Phaser.Game({
		width: 800,
		height: 600,
		type: Phaser.AUTO,
        backgroundColor: "#090a14",
		scale: {
			autoCenter: Phaser.Scale.CENTER_BOTH
		},
		physics :{
			default : 'arcade',
			arcade : {
				debug : true,
				gravity: {
					y: 200, x:0
				}
			}
		}
	});

	game.scene.add("Preload", Preload);
	game.scene.add("Level", Level);

	game.scene.add("Boot", Boot, true);
});

class Boot extends Phaser.Scene {

	preload() {
		
		this.load.pack("pack", "assets/preload-asset-pack.json");
	}

	create() {

		this.scene.start("Preload");
	}
}