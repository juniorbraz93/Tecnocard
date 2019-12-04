const Cliente = require("../clientes.js");

// test('cliente', () => {
//   const cliente = new Cliente('JB', 0)
//   // console.log(cliente);
// })

test("Retornar o saldo do cliente", () => {
  const cliente = new Cliente("Jb", 0);

  expect(cliente.saldoCliente()).toBe(0);
});

test("atualizar saldo com valor negativo", () => {
  const cliente = new Cliente("junior", 0);
  //debito negativo
  expect(cliente.debito(300)).toBe(false);
});

test("atualizar saldo com valor positivo", () => {
  const cliente = new Cliente("joão", 500);
  //debitio positivo
  expect(cliente.debito(300)).toBe(true);
});

test("Credito", () => {
  const cliente = new Cliente("Maycon", 500);

  expect(cliente.credito(500)).toBe(true);
});
