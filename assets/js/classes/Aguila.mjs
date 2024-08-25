import { Animal } from "./animal.mjs";

class Aguila extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido)
  }

  Chillar() {
    return 'Aaaaa'
  }
}

export { Aguila }
