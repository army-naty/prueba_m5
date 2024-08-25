import { Animal } from "./animal.mjs";

class Serpiente extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido)
  }

  Sisear() {
    return 'SSSSSss!!!'
  }
}

export { Serpiente }
