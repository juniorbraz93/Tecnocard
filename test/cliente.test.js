const Cliente = require("../clientes.js")

// test('cliente', () => {
//   const cliente = new Cliente('JB', 0)
//   // console.log(cliente);
// })

test('Retornar o saldo do cliente', () => {
  const cliente = new Cliente('Jb', 0)

  expect(cliente.saldoCliente()).toBe(0)

})

test('atualizar saldo', () => {
  const cliente = new Cliente('junior', 0)
  //debito
  expect(cliente.debito(300)).toBe(false)
  const cliente2 = new Cliente('joão', 500)
  expect(cliente2.debito(300)).toBe(true)
})