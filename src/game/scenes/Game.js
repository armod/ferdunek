import { Scene } from 'phaser'

export class Game extends Scene {
  constructor() {
    super('Game')
  }

  create() {
    //definiujemy paramatry mapy
    const tileWidth = 16
    const tileHeight = 16
    const mapWidth = 1024
    const mapHeight = 768

    //wyliczamy środek ekranu, aby tam postawic siatkę
    const x = mapWidth / assetSize
    const y = mapHeight / assetSize

    //tworzymy siatkę (Grid)
    // Parametry: x, y, szerokość, wysokość, szerokość_komórki, wysokość_komórki,
    // kolor_wypełnienia, przezroczystość_wypełnienia, kolor_linii, przezroczystość_linii
    this.add
      .grid(x, y, mapWidth, mapHeight, tileWidth, tileHeight, 'calizna')
      .setOrigin(0.5)

    //opcjonalny tekst
    this.add.text(10, 10, 'test', { color: '#fff' })
  }
}
