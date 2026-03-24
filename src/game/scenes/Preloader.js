import { Scene } from 'phaser'

export class Preloader extends Scene {
  constructor() {
    super('Preloader')
  }

  init() {}

  preload() {
    this.load.setPath('assets')

    this.load.image('tiles', 'tileset.png')
    this.load.tilemapTiledJSON('mapa', 'mapa.json')

    this.load.image('toro', 'toro.png')

    // this.load.image('calizna', 'calizna.png')
    // this.load.image('wyrobisko', 'wyrobisko.png')
  }

  create() {
    this.scene.start('MainMenu')
  }
}
