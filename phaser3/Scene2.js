class Scene2 extends Phaser.Scene {
    constructor() {
        super('startMenu');
    }
    create() {
        this.sbackground = this.add.image(200, 300, 'startBackground').setScale(0.3, 0.5);

        this.start = new TextButton(this, 230, 150, 'Start Game', { fill: "#0f0", font: "25px Mv boli" });
        this.options = new TextButton(this, 230, 200, 'Options', { fill: "#0f0", font: "25px Mv boli" });
        this.about = new TextButton(this, 230, 250, 'About', { fill: "#0f0", font: "25px Mv boli" });
        this.add.existing(this.start);
        this.add.existing(this.options);
        this.add.existing(this.about);
        let that = this;
        this.start.on('pointerdown', () => {
            that.scene.start('Level1');
        });

    }
}