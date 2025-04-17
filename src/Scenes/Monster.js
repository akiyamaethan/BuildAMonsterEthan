class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body1 = this.add.sprite(this.bodyX, this.bodyY+100, "monsterParts", "body_darkD.png");
        my.sprite.body2 = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_darkC.png");
        my.sprite.head = this.add.sprite(this.bodyX, this.bodyY-110, "monsterParts", "body_darkB.png");
        my.sprite.smile = this.add.sprite(this.bodyX, this.bodyY-70, "monsterParts", "mouth_closed_happy.png");
        my.sprite.fangs = this.add.sprite(this.bodyX, this.bodyY-70, "monsterParts", "mouth_closed_fangs.png");
        my.sprite.fangs.visible = false;
        my.sprite.legR = this.add.sprite(this.bodyX + 80, this.bodyY + 200, "monsterParts", "leg_darkC.png")
        my.sprite.legL = this.add.sprite(this.bodyX - 80, this.bodyY + 200, "monsterParts", "leg_darkC.png")
        my.sprite.legL.flipX = true;
        my.sprite.arm1 = this.add.sprite(this.bodyX + 80, this.bodyY + 30, "monsterParts", "arm_darkA.png")
        my.sprite.arm2 = this.add.sprite(this.bodyX + 80, this.bodyY + 85, "monsterParts", "arm_darkA.png")
        my.sprite.arm3 = this.add.sprite(this.bodyX - 80, this.bodyY + 30, "monsterParts", "arm_darkA.png")
        my.sprite.arm4 = this.add.sprite(this.bodyX - 80, this.bodyY + 85, "monsterParts", "arm_darkA.png")
        my.sprite.arm3.flipX = true;
        my.sprite.arm4.flipX = true;
        my.sprite.antennaR = this.add.sprite(this.bodyX+50, this.bodyY-200, "monsterParts", "detail_yellow_antenna_small.png");
        my.sprite.antennaL = this.add.sprite(this.bodyX-50, this.bodyY-200, "monsterParts", "detail_yellow_antenna_small.png");
        my.sprite.antennaL.flipX = true;
        my.sprite.eyeR = this.add.sprite(this.bodyX+50, this.bodyY-100, "monsterParts", "eye_psycho_dark.png");
        my.sprite.eyeL = this.add.sprite(this.bodyX-50, this.bodyY-100, "monsterParts", "eye_psycho_dark.png");

        this.keys = this.input.keyboard.addKeys('S,F,A,D');
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        if (this.keys.F.isDown){
            my.sprite.fangs.visible = true;
            my.sprite.smile.visible = false;
        }
        if (this.keys.S.isDown){
            my.sprite.fangs.visible = false;
            my.sprite.smile.visible = true;
        }
        if (this.keys.A.isDown){
            for (let i in my.sprite){
                my.sprite[i].x -= 10;
            }
        }
        if (this.keys.D.isDown){
            for (let i in my.sprite){
                my.sprite[i].x += 10;
            }
        }
       
    }

}