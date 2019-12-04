/**
 * classe tem atributos e metodos.
 * ** (atributos: nome, saldo)
 *
 * ** (metodos: TODO)
 */
class cliente {
  constructor(name, saldo) {
    this.name = name;
    this.saldo = saldo;
  }

  saldoCliente() {
    return this.saldo;
  }

  debito(valor) {
    if (this.saldo <= valor) {
      this.saldo = this.saldo - valor;
      return false;
    } else {
      return true;
    }
  }

  credito(valor) {
    this.saldo = this.saldo + valor;
    return true;
  }
}

module.exports = cliente;
