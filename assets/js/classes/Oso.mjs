import { Animal } from "./animal.mjs";

class Oso extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido)
  }

  Grunir() {
    return 'GGRRRRRRR'
  }
}

export { Oso }
