const residuoSeleccion = document.getElementById("residuo");
const subcategoriaSeleccion = document.getElementById("subcategoria");

/*diccionario de categorias*/
const subcategorias = {
  plastico: ["Botellas", "Envases", "Bolsas"],
  papel: ["Periódicos", "Cartón", "Papel de oficina"],
  vidrio: ["Botellas", "Frascos", "Cristalería"],
  metales: ["Latas", "Cables", "Electrodomésticos pequeños"],
  electronicos: ["Teléfonos móviles", "Baterías", "Componentes de computadoras"]
};

residuoSeleccion.addEventListener("change", function() {
  const tipoResiduo = residuoSeleccion.value;
  subcategoriaSeleccion.innerHTML = '<option value="">Subcategoría</option>'; // Resetea las opciones de subcategoría

  if (tipoResiduo) {
    subcategorias[tipoResiduo].forEach(subcategoria => {
      const option = document.createElement("option");
      option.value = subcategoria.toLowerCase();
      option.text = subcategoria;
      subcategoriaSeleccion.appendChild(option);
    });
  }
});

// Validación del formulario
document.getElementById("formReciclaje").addEventListener("submit", function(event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const direccion = document.getElementById("direccion").value;
  const tipoResiduo = residuoSeleccion.value;
  const subcategoria = subcategoriaSeleccion.value;
  const cantidad = parseFloat(cantidadInput.value);

  if (!nombre || !email || !direccion || !tipoResiduo || !subcategoria) {
    alert("Por favor, complete todos los campos obligatorios.");
    return;
  }

  if (isNaN(cantidad) || cantidad <= 0) {
    alert("Por favor, ingrese una cantidad válida de residuos (mayor que 0).");
    return;
  }


  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    alert("Por favor, ingrese un correo electrónico válido.");
    return;
  }

  alert("Formulario enviado exitosamente.");

  document.getElementById("formReciclaje").reset();

  subcategoriaSeleccion.innerHTML = '<option value="">Subcategoría</option>';
  
});