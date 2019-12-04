/**
 * Caixa 
 *  (clientes: lista de clientes)
 */

class Plataforma {
  constructor(clientes){
    this.clientes = clientes
  }
  addCliente(cliente){
    this.clientes[cliente.email] =  cliente
    return this
  }

  transfer({emailcliente1, emailcliente2, valor}){
    console.log(this.clientes[emailcliente1]);
    console.log(this.clientes[emailcliente2]);
    
    
    if(this.clientes[emailcliente1].debito(valor)){
      this.clientes[emailcliente2].credito(valor)
    } else{
      console.log('Não foi Poss');
      
    }
    return this    
  }

  getCliente({email}){   
    return this.clientes[email]
  }

  getClientes(){
    return this.clientes
  }
}

module.exports = Plataforma