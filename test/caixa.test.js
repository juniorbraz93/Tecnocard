const Plataforma = require('../plataforma.js')
const Cliente = require('../clientes.js')

/**
 * Notação de tempo BigO = O(n)
 * n = 2 , m = 3, O(n*m) = 6
 * n = 2, m = 2, O(n*m) => O(n^2) = 4
 */



// test('HashMap', () => {
//  const clientes = {}
//  clientes['Jb'] = new Cliente('Jb', 100)
//  clientes['Fb'] = new Cliente('Fb', 100)
//  console.log(clientes);
//  console.log(clientes['Jb']);
 
//  clientes['Jb'].debito(50)
//  clientes['Fb'].credito(50)

//  console.log(clientes);
 
// })


// test('hashMap', () => {
//   const hsh = {}
//   hsh['hash'] = {}
//   hsh.hash['dez'] = 10

//   console.log(hsh.hash.dez);
  
// })

test("Plataforma GoodPaf", () => {
  const cliente1 = new Cliente('Jb', 100)
  const cliente2 = new Cliente('Fb', 100)

  let plataforma = new Plataforma({})

  plataforma = plataforma.addCliente(cliente1)
  plataforma = plataforma.addCliente(cliente2)  

  plataforma = plataforma.transfer({emailcliente1: cliente1.email, emailcliente2: cliente2.email, valor: 50})

  const novoCliente1 = plataforma.getCliente({email: cliente1.email})
  const novoCliente2 = plataforma.getCliente({email: cliente2.email})
  
  expect(novoCliente1.saldoCliente()).toBe(50)
  expect(novoCliente2.saldoCliente()).toBe(150)
})

test('Plataforma testNagative', () => {
  const cliente1 = new Cliente('Jb', 50)
  const cliente2 = new Cliente('Fb', 100)

  let plataforma = new Plataforma({})

  plataforma = plataforma.addCliente(cliente1)
  plataforma = plataforma.addCliente(cliente2)

  plataforma = plataforma.transfer({ emailcliente1: cliente1.email, emailcliente2: cliente2.email, valor: 100})

  const novoCliente1 = plataforma.getCliente({email: cliente1.email})
  const novoCliente2 = plataforma.getCliente({email: cliente2.email})

  expect(novoCliente1.saldoCliente()).toBe(50)
  expect(novoCliente2.saldoCliente()).toBe(100)
})
