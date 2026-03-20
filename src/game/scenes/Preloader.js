import { Scene } from 'phaser'

export class Preloader extends Scene {
  constructor() {
    super('Preloader')
  }

  init() {}

  preload() {
    this.load.setPath('assets')

    this.load.image('calizna', 'calizna.png')
    this.load.image('wyrobisko', 'wyrobisko.png')
  }

  create() {
    this.scene.start('MainMenu')
  }
}
