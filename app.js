
const contarCaracteres = texto => texto.length;

const recortarTexto = (texto, n) => texto.slice(0, n);

const separarTexto = (texto, separador) => texto.split(separador);

const repetirTexto = (texto, veces) => Array(veces).fill(texto).join(" ");

const invertirTexto = texto => texto.split("").reverse().join("");

const contarPalabra = (texto, palabra) =>
  texto.toLowerCase().split(palabra.toLowerCase()).length - 1;

const esPalindromo = texto => {
  const limpio = texto.toLowerCase().replace(/\s/g, "");
  return limpio === limpio.split("").reverse().join("");
};

const eliminarPatron = (texto, patron) =>
  texto.replace(new RegExp(patron, "gi"), "");

const numeroAleatorio = () =>
  Math.floor(Math.random() * 100) + 501;

const convertirTemperatura = (valor, tipo) => {
  if (tipo === "C") {
    return `${(valor * 9 / 5 + 32).toFixed(2)} °F`;
  }
  return `${((valor - 32) * 5 / 9).toFixed(2)} °C`;
};

const binarioDecimal = valor => {
  if (/^[01]+$/.test(valor)) {
    return parseInt(valor, 2);
  }
  return Number(valor).toString(2);
};

const calcularAnios = fecha => {
  const hoy = new Date();
  const nacimiento = new Date(fecha);

  let edad = hoy.getFullYear() - nacimiento.getFullYear();

  const mes = hoy.getMonth() - nacimiento.getMonth();

  if (
    mes < 0 ||
    (mes === 0 && hoy.getDate() < nacimiento.getDate())
  ) {
    edad--;
  }

  return `${edad} años`;
};

const vocalesConsonantes = texto => {
  const vocales = (texto.match(/[aeiouáéíóú]/gi) || []).length;
  const consonantes = (texto.match(/[bcdfghjklmnñpqrstvwxyz]/gi) || []).length;

  return `Vocales: ${vocales}, Consonantes: ${consonantes}`;
};

const validarNombre = nombre =>
  /^[A-Za-zÀ-ÿ\s']+$/.test(nombre.trim());

const validarEmail = email =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const cuadradoArray = arr =>
  arr.map(num => num ** 2);

const mayorMenor = arr =>
  [Math.max(...arr), Math.min(...arr)];

const paresImpares = arr => ({
  pares: arr.filter(n => n % 2 === 0),
  impares: arr.filter(n => n % 2 !== 0)
});

const ordenarArray = arr => ({
  asc: [...arr].sort((a, b) => a - b),
  desc: [...arr].sort((a, b) => b - a)
});

const eliminarDuplicados = arr =>
  [...new Set(arr)];

const promedio = arr =>
  arr.reduce((acc, n) => acc + n, 0) / arr.length;



const convertirArrayNumeros = texto =>
  texto.split(",").map(n => Number(n.trim()));


//
const estaVacio = valor => !valor || !valor.trim();

const esNumeroValido = valor =>
  valor.trim() !== "" && !isNaN(valor);

const esFechaValida = valor =>
  !isNaN(new Date(valor).getTime());

const esArrayNumericoValido = texto => {
  if (estaVacio(texto)) return false;

  return texto
    .split(",")
    .every(n => n.trim() !== "" && !isNaN(n.trim()));
};




/* BTN1 */
document.querySelector("#btn1").addEventListener("click", () => {
  const texto = document.querySelector("#c1").value.trim();

  if (estaVacio(texto)) {
    return document.querySelector("#r1").textContent =
      "Por favor, ingrese un texto.";
  }

  document.querySelector("#r1").textContent =
    contarCaracteres(texto);
});

/* BTN2 */
document.querySelector("#btn2").addEventListener("click", () => {
  const texto = document.querySelector("#c2").value;
  const n = document.querySelector("#c2n").value;

  if (estaVacio(texto))
    return mostrar("#r2", "Por favor, ingrese un texto.");

  if (!esNumeroValido(n))
    return mostrar("#r2", "Por favor, ingrese un número válido.");

  document.querySelector("#r2").textContent =
    recortarTexto(texto, Number(n));
});

/* BTN3 */
document.querySelector("#btn3").addEventListener("click", () => {
  const texto = document.querySelector("#c3").value;
  const sep = document.querySelector("#c3s").value;

  if (estaVacio(texto) || estaVacio(sep))
    return mostrar("#r3", "Por favor, complete todos los campos.");

  document.querySelector("#r3").textContent =
    JSON.stringify(separarTexto(texto, sep));
});

/* BTN4 */
document.querySelector("#btn4").addEventListener("click", () => {
  const texto = document.querySelector("#c4").value;
  const veces = document.querySelector("#c4n").value;

  if (estaVacio(texto))
    return mostrar("#r4", "Por favor, ingrese un texto.");

  if (!esNumeroValido(veces) || Number(veces) <= 0)
    return mostrar("#r4", "Ingrese un número mayor que cero.");

  document.querySelector("#r4").textContent =
    repetirTexto(texto, Number(veces));
});

/* BTN5 */
document.querySelector("#btn5").addEventListener("click", () => {
  const texto = document.querySelector("#c5").value;

  if (estaVacio(texto))
    return mostrar("#r5", "Por favor, ingrese un texto.");

  document.querySelector("#r5").textContent =
    invertirTexto(texto);
});

/* BTN6 */
document.querySelector("#btn6").addEventListener("click", () => {
  const texto = document.querySelector("#c6").value;
  const palabra = document.querySelector("#c6p").value;

  if (estaVacio(texto) || estaVacio(palabra))
    return mostrar("#r6", "Complete todos los campos.");

  document.querySelector("#r6").textContent =
    contarPalabra(texto, palabra);
});

/* BTN7 */
document.querySelector("#btn7").addEventListener("click", () => {
  const texto = document.querySelector("#c7").value.trim();

  if (estaVacio(texto))
    return mostrar("#r7", "Ingrese una palabra.");

  document.querySelector("#r7").textContent =
    esPalindromo(texto)
      ? "Es un palíndromo ✔️"
      : "No es un palíndromo ❌";
});

/* BTN8 */
document.querySelector("#btn8").addEventListener("click", () => {
  const texto = document.querySelector("#c8").value;
  const patron = document.querySelector("#c8p").value;

  if (estaVacio(texto) || estaVacio(patron))
    return mostrar("#r8", "Complete todos los campos.");

  document.querySelector("#r8").textContent =
    eliminarPatron(texto, patron);
});

/* BTN9 */
document.querySelector("#btn9").addEventListener("click", () => {
  document.querySelector("#r9").textContent = numeroAleatorio();
});

/* BTN10 */
document.querySelector("#btn10").addEventListener("click", () => {
  const valor = document.querySelector("#c10").value;
  const tipo = document.querySelector("#c10t").value;

  if (!esNumeroValido(valor))
    return mostrar("#r10", "Temperatura inválida.");

  document.querySelector("#r10").textContent =
    convertirTemperatura(Number(valor), tipo);
});

/* BTN11 */
document.querySelector("#btn11").addEventListener("click", () => {
  const valor = document.querySelector("#c11").value.trim();

  if (estaVacio(valor))
    return mostrar("#r11", "Ingrese un valor.");

  document.querySelector("#r11").textContent =
    binarioDecimal(valor);
});

/* BTN12 */
document.querySelector("#btn12").addEventListener("click", () => {
  const fecha = document.querySelector("#c12").value;

  if (!fecha)
    return mostrar("#r12", "Seleccione una fecha.");

  document.querySelector("#r12").textContent =
    calcularAnios(fecha);
});

/* BTN13 */
document.querySelector("#btn13").addEventListener("click", () => {
  const texto = document.querySelector("#c13").value;

  if (estaVacio(texto))
    return mostrar("#r13", "Ingrese un texto.");

  document.querySelector("#r13").textContent =
    vocalesConsonantes(texto);
});

/* BTN14 */
document.querySelector("#btn14").addEventListener("click", () => {
  const nombre = document.querySelector("#c14").value;

  if (estaVacio(nombre))
    return mostrar("#r14", "Ingrese un nombre.");

  document.querySelector("#r14").textContent =
    validarNombre(nombre)
      ? "Nombre válido ✔️"
      : "Nombre inválido.";
});

/* BTN15 */
document.querySelector("#btn15").addEventListener("click", () => {
  const email = document.querySelector("#c15").value;

  if (estaVacio(email))
    return mostrar("#r15", "Ingrese un email.");

  document.querySelector("#r15").textContent =
    validarEmail(email)
      ? "Email válido ✔️"
      : "Email inválido.";
});

/* BTN16 */
document.querySelector("#btn16").addEventListener("click", () => {
  const texto = document.querySelector("#c16").value;

  if (!esArrayNumericoValido(texto))
    return mostrar("#r16", "Ingrese números separados por comas.");

  const arr = convertirArrayNumeros(texto);

  document.querySelector("#r16").textContent =
    JSON.stringify(cuadradoArray(arr));
});

/* BTN17 */
document.querySelector("#btn17").addEventListener("click", () => {
  const texto = document.querySelector("#c17").value;

  if (!esArrayNumericoValido(texto))
    return mostrar("#r17", "Ingrese números válidos.");

  const arr = convertirArrayNumeros(texto);
  const r = mayorMenor(arr);

  document.querySelector("#r17").textContent =
    `Máximo: ${r[0]} | Mínimo: ${r[1]}`;
});

/* BTN18 */
document.querySelector("#btn18").addEventListener("click", () => {
  const texto = document.querySelector("#c18").value;

  if (!esArrayNumericoValido(texto))
    return mostrar("#r18", "Ingrese números válidos.");

  const arr = convertirArrayNumeros(texto);
  const r = paresImpares(arr);

  document.querySelector("#r18").textContent =
    `Pares: ${r.pares.join(", ")} | Impares: ${r.impares.join(", ")}`;
});

/* BTN19 */
document.querySelector("#btn19").addEventListener("click", () => {
  const texto = document.querySelector("#c19").value;

  if (!esArrayNumericoValido(texto))
    return mostrar("#r19", "Ingrese números válidos.");

  const arr = convertirArrayNumeros(texto);
  const r = ordenarArray(arr);

  document.querySelector("#r19").textContent =
    `Asc: ${r.asc.join(", ")} | Desc: ${r.desc.join(", ")}`;
});

/* BTN20 */
document.querySelector("#btn20").addEventListener("click", () => {
  const texto = document.querySelector("#c20").value;

  if (estaVacio(texto))
    return mostrar("#r20", "Ingrese valores.");

  const arr = texto.split(",").map(e => e.trim());
  const r = eliminarDuplicados(arr);

  document.querySelector("#r20").textContent =
    `Sin duplicados: ${r.join(", ")}`;
});

/* BTN21 */
document.querySelector("#btn21").addEventListener("click", () => {
  const texto = document.querySelector("#c21").value;

  if (!esArrayNumericoValido(texto))
    return mostrar("#r21", "Ingrese números válidos.");

  const arr = convertirArrayNumeros(texto);

  document.querySelector("#r21").textContent =
    `Promedio: ${promedio(arr)}`;
});

/* =========================
   HELPER UI
========================= */

function mostrar(selector, mensaje) {
  document.querySelector(selector).textContent = mensaje;
}