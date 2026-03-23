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
    // map.createLayer('warstwa1', tileset, 0, 0)
    // grundLayer.setScale(2)

    //definiujemy paramatry mapy
    // const tileWidth = 16
    // const tileHeight = 16
    // const mapWidth = 800
    // const mapHeight = 640

    //wyliczamy środek ekranu, aby tam postawic siatkę
    // const x = mapWidth / 2
    // const y = mapHeight / 2

    //tworzymy siatkę (Grid)
    // Parametry: x, y, szerokość, wysokość, szerokość_komórki, wysokość_komórki,
    // kolor_wypełnienia, przezroczystość_wypełnienia, kolor_linii, przezroczystość_linii
    // this.add.tileSprite(x, y, mapWidth, mapHeight, 'calizna')

    //opcjonalny tekst
    this.add.text(10, 10, 'test', { color: '#fff' })
  }
}
