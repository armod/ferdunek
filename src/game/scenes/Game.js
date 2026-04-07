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

    this.wyrobiska = map.createLayer('warstwa1', tileset, 0, 0)
    this.wyrobiska.setCollision(1)
    this.ghost = map.createLayer('warstwa2', tileset, 0, 0)
    this.ghost.setCollisionByExclusion([-1])

    //toro
    this.toro = this.physics.add.image(240, 300, 'toro')
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
      this.physics.moveToObject(this.toro, this.target, 100)
      this.cursor.copyPosition(this.target).setVisible(true)
      console.log(this.target.x, this.target.y, this.cursor.x, this.cursor.y)
    })

    //kolizja
    this.physics.add.collider(this.toro, this.ghost)
    this.physics.add.collider(this.toro, this.wyrobiska)

    //opcjonalny tekst
    this.add.text(10, 5, 'test', { color: '#fff' })
    //zaznaczenie elementów kolizyjnych
    // const debugGraphics = this.add.graphics().setAlpha(0.7)
    // this.wyrobiska.renderDebug(debugGraphics, {
    //   tileColor: null, // kafelki bez kolizji
    //   collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // kafelki z kolizją (pomarańczowy debug)
    //   faceColor: new Phaser.Display.Color(40, 39, 37, 255), // krawędzie kolizji
    // })
  }
  update() {
    //  4 is our distance tolerance, i.e. how close the toro can get to the target
    //  before it is considered as being there. The faster it moves, the more tolerance is required.
    const tolerance = 4
    // const tolerance = 200 * 1.5 / this.game.loop.targetFps;
    const distance = Phaser.Math.Distance.BetweenPoints(this.toro, this.target)

    if (this.toro.body.speed > 0) {
      this.distanceText.setText(`Distance: ${distance}`)

      if (distance < tolerance) {
        this.toro.body.reset(this.target.x, this.target.y)
        this.cursor.setVisible(false)
      }
    }
  }
}
