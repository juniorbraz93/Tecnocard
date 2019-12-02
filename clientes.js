/**
 * classe tem atributos e metodos.
 * ** (atributos: nome, saldo)
 * 
 * ** (metodos: TODO) 
 */
class cliente {
  constructor(name, saldo) {

    this.name = name
    this.saldo = saldo

  }

  saldoCliente(){
    return this.saldo
  }

  debito(valorDebito){
    if (this.saldo <= valorDebito){
      this.saldo = this.saldo - valorDebito
      return true
     } else {
       return false 
     }
  }
}

module.exports = cliente