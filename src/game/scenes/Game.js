import { Scene } from 'phaser'

export class Game extends Scene {
  constructor() {
    super('Game')
  }

  create() {
    //definiujemy paramatry mapy
    const assetSize = 16
    const mapWidth = 1024
    const mapHeight = 768

    //wyliczamy środek ekranu, aby tam postawic siatkę
    const x = mapWidth / assetSize
    const y = mapHeight / assetSize

    //Blitter
    const blitterCalizna = this.add.blitter(0, 0, 'calizna')
    const blitterWyrobisko = this.add.blitter(0, 0, 'wyrobisko')

    for (let x = 0; x < mapWidth; y++) {
      for (let y = 0; y < mapHeight; x++) {
        // Rzeczywista pozycja małego kafelka (16x16) na ekranie
        const posX = x * assetSize
        const posY = y * assetSize

        // MAGIA GRUPOWANIA (tworzy wirtualne komórki 32x32 z 4 małych kafelków)
        const blockX = Math.floor(x / 2)
        const blockY = Math.floor(y / 2)

        // Szachownica na podstawie dużych bloków
        if ((blockX + blockY) % 2 === 0) {
          // Ten kod wykona się 4 razy pod rząd dla tego samego bloku
          blitterCalizna.create(posX, posY)
        } else {
          // A ten 4 razy dla sąsiedniego
          blitterWyrobisko.create(posX, posY)
        }
      }
    }

    //tworzymy siatkę (Grid)
    // Parametry: x, y, szerokość, wysokość, szerokość_komórki, wysokość_komórki,
    // kolor_wypełnienia, przezroczystość_wypełnienia, kolor_linii, przezroczystość_linii
    //this.add.tileSprite(x, y, mapWidth, mapHeight, 'calizna').setOrigin(0.5)

    //opcjonalny tekst
    this.add.text(10, 10, 'test', { color: '#fff' })
  }
}
