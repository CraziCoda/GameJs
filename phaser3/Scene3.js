class Scene3 extends Phaser.Scene {
    constructor() {
        super('Level1');
    }
    create() {
        this.bg = this.add.tileSprite(0, 0, config.width * 2, config.height * 2, 'level1bg').setScale(1, 1);
    }
}