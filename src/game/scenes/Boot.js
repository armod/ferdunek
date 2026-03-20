import { Scene } from 'phaser'

export class Boot extends Scene {
  constructor() {
    super('Boot')
  }

  preload() {
    //  Tutaj ładujesz tylko to co potrzebne natychmiast, to co chcesz pokazać podczas ładowania reszty gry
  }

  create() {
    this.scene.start('Preloader')
  }
}
