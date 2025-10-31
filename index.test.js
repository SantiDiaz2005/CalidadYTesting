// index.test.js
const sumar = require('./index');

test('PRUEBA EXITOSA: la funcion sumar debe retornar la suma correcta', () => {
  // 1 + 2 = 3. Esto es correcto y debería pasar.
  expect(sumar(1, 2)).toBe(3); 
});