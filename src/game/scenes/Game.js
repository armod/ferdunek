import { Scene } from 'phaser'

export class Game extends Scene {
  constructor() {
    super('Game')
  }

  create() {
    const map = this.make.tilemap({
      key: 'mapa',
      tileWidth: 16,
      tileHeight: 16,
    })

    const tileset = map.addTilesetImage('tileset', 'tiles')

    const grundLayer = map.createLayer('warstwa1', tileset, 0, 0)

    //toro
    this.source = this.physics.add.image(32, 85, 'toro')
    this.target = new Phaser.Math.Vector2()
    this.cursor = this.add.image(0, 0, 'cursor').setVisible(false)

    this.distanceText = this.add.text(10, 20, 'Click to set target', {
      fill: '#00ff00',
    })

    //przemieszczanie do miejsca kliknięcia myszą
    this.input.on('pointerdown', (pointer) => {
      this.target.x = pointer.x
      this.target.y = pointer.y
      // Move at 200 px/s:
      this.physics.moveToObject(this.source, this.target, 200)
      this.cursor.copyPosition(this.target).setVisible(true)
      console.log(this.target.x, this.target.y, this.source)
    })

    //opcjonalny tekst
    this.add.text(10, 5, 'test', { color: '#fff' })
  }
  update() {
    //  4 is our distance tolerance, i.e. how close the source can get to the target
    //  before it is considered as being there. The faster it moves, the more tolerance is required.
    const tolerance = 4
    // const tolerance = 200 * 1.5 / this.game.loop.targetFps;
    const distance = Phaser.Math.Distance.BetweenPoints(
      this.source,
      this.target,
    )

    if (this.source.body.speed > 0) {
      this.distanceText.setText(`Distance: ${distance}`)

      if (distance < tolerance) {
        this.source.body.reset(this.target.x, this.target.y)
        this.cursor.setVisible(false)
      }
    }
  }
}
