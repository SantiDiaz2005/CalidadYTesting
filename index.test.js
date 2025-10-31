// index.test.js
const sumar = require('./index');
test('DEMO FALLO CI: Se espera 10 pero se obtiene 3', () => {
  expect(sumar(1, 2)).toBe(10); // Esto forzará la falla
});