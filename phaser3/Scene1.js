class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }
    preload() {
        this.load.image('startBackground', 'assets/startBackground.jpg');
        this.load.image('level1bg', 'assets/backgrounds/level1.jpg');

        let width = this.cameras.main.width;
        let height = this.cameras.main.height;

        let loadingText = this.make.text({
            x: width / 2,
            y: height / 2 - 50,
            text: 'Loading Assets...',
            style: {
                font: '20px monospace',
                fill: '#ffffff'
            }
        });
        loadingText.setOrigin(0.5, 0.5);


        let progressBar = this.add.graphics();
        let progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(40, 270, 320, 50);

        let percentLoaded = this.make.text({
            x: width / 2 - 10,
            y: height / 2 - 15,
            text: '0%',
            style: {
                font: '20px arial',
                color: '#fff'
            }
        });

        this.load.on('progress', function(value) {
            console.log(value);
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(50, 280, 300 * value, 30);

            percentLoaded.setText(parseInt(value * 100) + '%');
        });

        this.load.on('fileprogress', function(file) {
            console.log(file.key);
        });
        let that = this;
        this.load.on('complete', function() {
            that.scene.start('startMenu');
        });

    }
}