const { Engine, Operation } = require('../engine')
const Plataforma = require('../plataforma')
const Cliente = require('../clientes')


test('teste FIFO', async () => {
  const cliente1 = new Cliente('Jb', 100)
  const cliente2 = new Cliente('FB', 100)

  const plataforma = new Plataforma({Jb: cliente1, Fb: cliente2})

  const engine = new Engine(plataforma)

  await engine.addOpration('Operation 1')
  await engine.addOpration('Operation 2')

  const operations = await engine.getOperation()

  expect(operations.shift()).toBe('Operation 1')

})

test('Run test', async () => {
  const cliente1 = new Cliente('Jb', 100)
  const cliente2 = new Cliente('FB', 100)

  const plataforma = new Plataforma({Jb: cliente1, Fb: cliente2})

  const engine = new Engine(plataforma)

  const run = engine.run()

  await engine.addOperation(new Operation('addCliente', cliente1, plataforma))
  await engine.addOperation(new Operation('addCliente', cliente2, plataforma))
  await engine.addOperation(new Operation('transfer', {emailcliente1: cliente1, emailcliente2: cliente2, valor: 50}, plataforma))

  await engine.excuteNext();
  await engine.excuteNext();
  const engineNext = await engine.excuteNext();

  plataforma = await engineNext.getPlataforma();

  const novoCliente1 = plataforma.getCliente({email: cliente1.email});
  const novoCliente2 = plataforma.getCliente({email: cliente2.email});

  expect(novoCliente1.saldoCliente()).toBe(40);
  expect(novoCliente2.saldoCliente()).toBe(160);
})