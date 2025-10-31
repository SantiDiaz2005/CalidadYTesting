// index.test.js
const sumar = require('./index');

test('PRUEBA EXITOSA: la funcion sumar debe retornar la suma correcta', () => {
  // 1 + 2 = 3
  expect(sumar(1, 2)).toBe(3);
});