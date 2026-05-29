
const cardClass = "bg-white/5 backdrop-blur-xl border border-white/10 rounded-[28px] p-6";
const inputClass = "w-full mt-4 bg-slate-900/70 border border-white/10 rounded-2xl px-4 py-3";
const buttonClass = "w-full mt-4 py-3 rounded-2xl font-bold bg-gradient-to-r from-cyan-500 to-purple-600 hover:scale-[1.02] transition";
const resultClass = "mt-4 bg-slate-900/80 rounded-2xl p-4 text-cyan-300 min-h-[60px] flex items-center";



const contarCaracteres = t => t.length;

const recortarTexto = (t, n) => t.slice(0, n);

const esPalindromo = t =>
    t.toLowerCase().replace(/\s/g, '') ===
    t.toLowerCase().replace(/\s/g, '').split('').reverse().join('');

const validarEmail = e =>
    /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(e);

const numeroAleatorio = () =>
    Math.floor(Math.random() * 100) + 501;

const convertirTemperatura = (g, t) =>
    t === 'C'
        ? (g * 9 / 5 + 32) + ' °F'
        : ((g - 32) * 5 / 9).toFixed(2) + ' °C';

const invertirTexto = t =>
    t.split('').reverse().join('');

const contarPalabra = (t, p) =>
    t.split(' ')
        .filter(x => x.toLowerCase() === p.toLowerCase())
        .length;

const eliminarPatron = (t, p) =>
    t.replaceAll(p, '');

const binarioDecimal = n =>
    parseInt(n, 2);

const calcularAnios = d =>
    new Date().getFullYear() - new Date(d).getFullYear();

const contarLetras = t => {
    let v = 0, c = 0;

    t.toLowerCase().split('').forEach(l =>
        /[aeiou]/.test(l)
            ? v++
            : /[a-z]/.test(l)
                ? c++
                : 0);

    return `Vocales:${v} Consonantes:${c}`;
};

const validarNombre = n =>
    /^[A-Za-zÀ-ÿ\s']+$/.test(n);

const elevarCuadrado = a =>
    a.split(',').map(n => n * n);

const mayorMenor = a => {
    a = a.split(',').map(Number);
    return Math.max(...a) + " / " + Math.min(...a);
};

const paresImpares = a => {
    a = a.split(',').map(Number);

    return "Pares:" + a.filter(n => n % 2 === 0)
        + " | Impares:" + a.filter(n => n % 2 !== 0);
};

const ordenarArray = a =>
    a.split(',').map(Number).sort((x, y) => x - y);

const eliminarDuplicados = a =>
    [...new Set(a.split(','))];

const promedio = a => {
    a = a.split(',').map(Number);
    return a.reduce((x, y) => x + y, 0) / a.length;
};

const repetirTexto = (t, n) =>
    t.repeat(n);

const separarTexto = (t, s) =>
    t.split(s);

const run1 = () => r1.textContent = contarCaracteres(c1.value);
const run2 = () => r2.textContent = recortarTexto(c2.value, +c2n.value);

const run3 = () => r3.textContent =
    esPalindromo(c3.value)
        ? "Sí ✅"
        : "No ❌";

const run4 = () => r4.textContent =
    validarEmail(c4.value)
        ? "Email válido ✅"
        : "Email inválido ❌";

const run5 = () => r5.textContent = numeroAleatorio();

const run6 = () => r6.textContent =
    convertirTemperatura(+c6.value, c6t.value);

const run7 = () => r7.textContent = invertirTexto(c7.value);

const run8 = () => r8.textContent =
    contarPalabra(c8.value, c8p.value);

const run9 = () => r9.textContent =
    eliminarPatron(c9.value, c9p.value);

const run10 = () => r10.textContent =
    binarioDecimal(c10.value);

const run11 = () => r11.textContent =
    calcularAnios(c11.value) + " años";

const run12 = () => r12.textContent =
    contarLetras(c12.value);

const run13 = () => r13.textContent =
    validarNombre(c13.value)
        ? "Nombre válido ✅"
        : "Nombre inválido ❌";

const run14 = () => r14.textContent =
    elevarCuadrado(c14.value);

const run15 = () => r15.textContent =
    mayorMenor(c15.value);

const run16 = () => r16.textContent =
    paresImpares(c16.value);

const run17 = () => r17.textContent =
    ordenarArray(c17.value);

const run18 = () => r18.textContent =
    eliminarDuplicados(c18.value);

const run19 = () => r19.textContent =
    promedio(c19.value);

const run20 = () => r20.textContent =
    repetirTexto(c20.value, +c20n.value);

const run21 = () => r21.textContent =
    separarTexto(c21.value, ' ');