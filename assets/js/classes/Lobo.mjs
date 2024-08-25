import { Animal } from "./animal.mjs";

class Lobo extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido)
  }

  Aullar() {
    return 'Auuuuuuu!!!'
  }
}

export { Lobo }
