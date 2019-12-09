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
    
    if(this.clientes[emailcliente1].debito(valor)){
      this.clientes[emailcliente2].credito(valor)
    } else{
      console.log('Não foi Possível Realizar Transferencia');
      
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