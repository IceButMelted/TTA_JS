import TitleMenu from "./scenes/TitleMenu.js";
import Level from "./scenes/Level.js";
import Lv2 from "./scenes/Lv2.js";
import Lv3 from "./scenes/Lv3.js";
import EndGame from "./scenes/EndGame.js";
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
				debug : false,
				gravity: {
					y: 200, x:0
				}
			}
		}
	});

	game.scene.add("Preload", Preload);
	game.scene.add("TitleMenu", TitleMenu);
	game.scene.add("Level", Level);
	game.scene.add("Lv2", Lv2);
	game.scene.add("Lv3", Lv3);
	game.scene.add('EndGame', EndGame);
	game.scene.add("Boot", Boot, true);
});

class Boot extends Phaser.Scene {

	preload() {
		
		this.load.pack("pack", "assets/preload-asset-pack.json");
	}

	create() {
		// Set an initial global value
        this.registry.set("gameScore", 0);
		this.registry.set("enemyKilled", 0);
		this.registry.set("Timer",9999);
		this.registry.set("CurrentTimer",0);
		this.registry.set("Tut",true);

		

		this.scene.start("Preload");
	}
}