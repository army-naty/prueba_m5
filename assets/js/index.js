import { Aguila } from "./classes/Aguila.mjs";
import { Leon } from "./classes/Leon.mjs";
import { Lobo } from "./classes/Lobo.mjs";
import { Oso } from "./classes/Oso.mjs";
import { Serpiente } from "./classes/Serpiente.mjs";
import { iife } from "./modulo/iife.mjs";

const instanciadorAnimales = { Aguila, Leon, Lobo, Oso, Serpiente };

// Función para abrir el modal con la información del animal
const abrirModal = (animal) => {
  const modalBody = document.querySelector('#exampleModal .modal-body');
  
  // Cargar contenido en el modal
  modalBody.innerHTML = `
    <h5 class="modal-title">${animal.Nombre}</h5>
    <img src="./assets/imgs/${animal.Img}" alt="${animal.Nombre}" class="img-fluid rounded my-3">
    <p>Comentarios: ${animal.Comentarios}</p>
    <audio controls style="width: 100%">
      <source src="./assets/sounds/${animal.Sonido}" type="audio/mpeg">
      Reproducir sonido
    </audio>
  `;

  // Mostrar el modal
  const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
  modal.show();
};

// Agregar event listener a las imágenes cuando se generan las tarjetas
const agregarEventosImagenes = () => {
  document.querySelectorAll('.card-img').forEach(img => {
    img.addEventListener('click', event => {
      const nombreAnimal = event.target.id;
      const animal = iife.animalsArray.find(animal => animal.Nombre === nombreAnimal);
      
      // Llamar a la función para abrir el modal con la información del animal
      abrirModal(animal);
    });
  });
};

document.getElementById('btnRegistrar').addEventListener('click', async () => {
  const nombre = document.getElementById('animal').value;
  const edad = document.getElementById('edad').value;
  const comentarios = document.getElementById('comentarios').value;

  if (!nombre || !edad || !comentarios) {
    alert('Por favor, complete todos los campos.');
    return;
  }

  const { imagen, sonido } = await iife.obtenerDataJson(nombre);

  // Creamos instancia del animal seleccionado
  const animal = new instanciadorAnimales[nombre](nombre, edad, imagen, comentarios, sonido);

  // Agregamos el animal a la lista de animales
  iife.addAnimal(animal);

  // Mostramos los animales en el contenedor
  iife.cardsAnimal(iife.animalsArray, 'Animales');

  // Agregar los eventos después de generar las tarjetas
  agregarEventosImagenes();

  // Limpiamos el formulario
  iife.limpiar();
});

document.getElementById('animal').addEventListener('change', async (event) => {
  const nombreAnimal = event.target.value;
  const { imagen } = await iife.obtenerDataJson(nombreAnimal);

  // Actualizamos la vista previa de la imagen
  const preview = document.getElementById('preview');
  preview.innerHTML = ''; // Limpiamos el contenedor
  const img = document.createElement('img'); // Creamos el elemento de imagen
  img.src = `assets/imgs/${imagen}`;
  img.className = "img rounded h-100 w-auto object-fit-cover mx-auto"; // Aplicamos clases de Bootstrap
  img.alt = nombreAnimal; // Asignamos el atributo alt
  preview.appendChild(img); // Añadimos la imagen al DOM
});
