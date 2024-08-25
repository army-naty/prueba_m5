const iife = (() => {
  const animalsArray = [];

  const obtenerDataJson = async (nombre) => {
    try {
      const response = await fetch("animales.json");
      const data = await response.json();
      return data.animales.find(animal => animal.name === nombre);
    } catch (error) {
      console.error('Error al obtener la imagen:', error);
    }
  };

  const addAnimal = (animal) => animalsArray.push(animal);

  const cardsAnimal = (animales, id) => {
    const cartas = animales.map(({ Img, Nombre, Sonido }) => `
      <div class="card m-2 col-3"> 
        <img src="./assets/imgs/${Img}" alt="${Nombre}" class="card-img m-1" id="${Nombre}">
        <div class="card-body text-center">
          <h5 class="card-title">${Nombre}</h5>
          <audio controls class="w-100">
            <source src="./assets/sounds/${Sonido}" type="audio/mpeg">
            Reproducir sonido
          </audio>
        </div>
      </div>`).join('');

    document.getElementById(id).innerHTML = cartas;
  };

  const limpiar = () => {
    const preview = document.getElementById('preview');
    if (preview.querySelector('img')) preview.innerHTML = '';
    
    ['animal', 'edad', 'comentarios'].forEach(id => {
      const element = document.getElementById(id);
      element.value = element.defaultValue;
    });
  };

  return {
    obtenerDataJson,
    cardsAnimal,
    addAnimal,
    animalsArray,
    limpiar
  };
})();

export { iife };
