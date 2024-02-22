let selectSize = '';
const sizePizza = () => {
  let size = document.querySelector('.sizePizza');

  size.addEventListener('change', () => {
    selectSize = size.value;
    console.log('Tamaño seleccionado:', selectSize);
  });
};

let selectMasa = '';
const masaPizza = () => {
  let masa = document.querySelector('.masaPizza');

  masa.addEventListener('change', () => {
    selectMasa = masa.value;
    console.log('Masa seleccionada:', selectMasa);
  });
};

const ingredientsPizza = () => {
  let checkBoxes = document.querySelectorAll(
    '.ingredients input[type="checkbox"]'
  );

  checkBoxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        console.log('Ingrediente seleccionado:', checkbox.name);
      } else {
        console.log('Ingrediente deseleccionado:', checkbox.name);
      }
    });
  });
};

const pedirPizza = () => {
  const mensajePedido = document.querySelector('.pedido');

  let ingredientsSelect = obtenerIngredientesSeleccionados();

  let mensaje = `Pedido confirmado, Tamaño: ${selectSize}, Masa: ${selectMasa}, Ingredientes: ${ingredientsSelect.join(
    ', '
  )}`;
  mensajePedido.textContent = mensaje;
};

document.querySelector('.pedir').addEventListener('click', pedirPizza);

const obtenerIngredientesSeleccionados = () => {
  let checkBoxes = document.querySelectorAll(
    '.ingredients input[type="checkbox"]'
  );
  let ingredientesSeleccionados = [];

  checkBoxes.forEach((checkbox) => {
    if (checkbox.checked) {
      ingredientesSeleccionados.push(checkbox.name);
    }
  });

  return ingredientesSeleccionados;
};

sizePizza();
masaPizza();
