

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



document.querySelector("#btn1").addEventListener("click", () => {
  const texto = document.querySelector("#c1").value.trim();
  document.querySelector("#r1").textContent = contarCaracteres(texto);
});

document.querySelector("#btn2").addEventListener("click", () => {
  const texto = document.querySelector("#c2").value;
  const n = Number(document.querySelector("#c2n").value);
  document.querySelector("#r2").textContent = recortarTexto(texto, n);
});

document.querySelector("#btn3").addEventListener("click", () => {
  const texto = document.querySelector("#c3").value;
  const sep = document.querySelector("#c3s").value;
  document.querySelector("#r3").textContent =
    JSON.stringify(separarTexto(texto, sep));
});

document.querySelector("#btn4").addEventListener("click", () => {
  const texto = document.querySelector("#c4").value;
  const veces = Number(document.querySelector("#c4n").value);
  document.querySelector("#r4").textContent =
    repetirTexto(texto, veces);
});

document.querySelector("#btn5").addEventListener("click", () => {
  document.querySelector("#r5").textContent =
    invertirTexto(document.querySelector("#c5").value);
});

document.querySelector("#btn6").addEventListener("click", () => {
  const texto = document.querySelector("#c6").value;
  const palabra = document.querySelector("#c6p").value;
  document.querySelector("#r6").textContent =
    contarPalabra(texto, palabra);
});

document.querySelector("#btn7").addEventListener("click", () => {
  const texto = document.querySelector("#c7").value.trim();

  if (!texto) {
    document.querySelector("#r7").textContent =
      "Ingrese una palabra";
    return;
  }

  const resultado = esPalindromo(texto);

  document.querySelector("#r7").textContent =
    resultado
      ? "Es un palíndromo ✔️"
      : "No es un palíndromo ❌";
});

document.querySelector("#btn8").addEventListener("click", () => {
  const texto = document.querySelector("#c8").value;
  const patron = document.querySelector("#c8p").value;
  document.querySelector("#r8").textContent =
    eliminarPatron(texto, patron);
});

document.querySelector("#btn9").addEventListener("click", () => {
  document.querySelector("#r9").textContent =
    numeroAleatorio();
});

document.querySelector("#btn10").addEventListener("click", () => {
  const valor = Number(document.querySelector("#c10").value);
  const tipo = document.querySelector("#c10t").value;

  document.querySelector("#r10").textContent =
    convertirTemperatura(valor, tipo);
});

document.querySelector("#btn11").addEventListener("click", () => {
  const valor = document.querySelector("#c11").value.trim();

  document.querySelector("#r11").textContent =
    binarioDecimal(valor);
});

document.querySelector("#btn12").addEventListener("click", () => {
  const fecha = document.querySelector("#c12").value;

  document.querySelector("#r12").textContent =
    calcularAnios(fecha);
});

document.querySelector("#btn13").addEventListener("click", () => {
  document.querySelector("#r13").textContent =
    vocalesConsonantes(document.querySelector("#c13").value);
});

document.querySelector("#btn14").addEventListener("click", () => {
  document.querySelector("#r14").textContent =
    validarNombre(document.querySelector("#c14").value);
});

document.querySelector("#btn15").addEventListener("click", () => {
  document.querySelector("#r15").textContent =
    validarEmail(document.querySelector("#c15").value);
});

document.querySelector("#btn16").addEventListener("click", () => {
  const arr = convertirArrayNumeros(
    document.querySelector("#c16").value
  );

  document.querySelector("#r16").textContent =
    JSON.stringify(cuadradoArray(arr));
});

document.querySelector("#btn17").addEventListener("click", () => {
  const arr = convertirArrayNumeros(
    document.querySelector("#c17").value
  );

  const resultado = mayorMenor(arr);

  document.querySelector("#r17").textContent =
    `Número mayor: ${resultado[0]} | Número menor: ${resultado[1]}`;
});

document.querySelector("#btn18").addEventListener("click", () => {
  const arr = convertirArrayNumeros(
    document.querySelector("#c18").value
  );

  if (arr.length === 0) {
    document.querySelector("#r18").textContent =
      "Ingrese números válidos";
    return;
  }

  const resultado = paresImpares(arr);

  const paresText =
    resultado.pares.length > 0
      ? resultado.pares.join(", ")
      : "No hay números pares";

  const imparesText =
    resultado.impares.length > 0
      ? resultado.impares.join(", ")
      : "No hay números impares";

  document.querySelector("#r18").textContent =
    `Pares: ${paresText} | Impares: ${imparesText}`;
});
document.querySelector("#btn19").addEventListener("click", () => {
  const arr = convertirArrayNumeros(c19.value);

  if (arr.length === 0) {
    document.querySelector("#r19").textContent =
      "Ingrese números válidos";
    return;
  }

  const resultado = ordenarArray(arr);

  document.querySelector("#r19").textContent =
    `Ascendente: ${resultado.asc.join(", ")} | Descendente: ${resultado.desc.join(", ")}`;
});
document.querySelector("#btn20").addEventListener("click", () => {
  const arr = document.querySelector("#c20")
    .value
    .split(",")
    .map(e => e.trim());

 document.querySelector("#btn20").addEventListener("click", () => {
  const arr = document.querySelector("#c20")
    .value
    .split(",")
    .map(e => e.trim());

  const resultado = eliminarDuplicados(arr);

  document.querySelector("#r20").textContent =
    `Sin duplicados: ${resultado.join(", ")}`;
});
document.querySelector("#btn21").addEventListener("click", () => {
  const arr = convertirArrayNumeros(
    document.querySelector("#c21").value
  );

  document.querySelector("#r21").textContent =
    `Promedio: ${promedio(arr)}`;
});})