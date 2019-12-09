class Operation {
  constructor(name, payload, plataforma){
    this.name = name
    this.payload = payload
    this.plataforma = plataforma
  }
}

class OperationError {
  constructor(opration, engine, messageError){
    this.engine = engine;
    this.messageError = messageError;
    this.operation = opration;
  }
  
  getEngine() {
    return this.engine;
  }

  getErrorMessage() {
    return this.messageError;
  }

  getOperation(){
    return this.operation;
  }
}

class Engine {
  constructor(plataforma){
    this.plataforma = plataforma;
    this.operations = [];
    this.terminate = false;
    this.history = []
  }

  async operate(operation){
    switch (operation.name) {
      case 'addCliente':
        this.plataforma = this.plataforma.addCliente(operation.payload);

        this.history.push(this.plataforma)

        return this;

      case 'transfer':
        this.plataforma = this.plataforma.transfer({
          emailcliente1: operation.payload.emailcliente1,
          emailcliente2: operation.payload.emailcliente2, 
          valor: operation.payload.valor});

        this.history.push(this.plataforma)

        return this

      default:
        throw new OperationError( this, "Operação não cadastrada")
    }
  }

  async excuteNext() {
    return this.operate(this.operations.shift())
  }

  // async run() {
  //   return new Promise((resolve, reject) => {
  //     while (true) {
  //       if( this.operations.length > 0){
  //        try {
  //         const operation = this.operations.shift()
  //         const newState = this.operate(operation).then(state => state)
  
  //         this.plataforma = newState.plataforma
  //        } catch (error) {
  //          this.plataforma = error.engine.plataforma
  //          console.log("Houve um erro na operação");
           
  //        }
  //       }
  //       if (this.terminate){

  //         return resolve(this)
  //       }
  //     }
  //   })
  // }

  async terminate(){
    this.terminate = true
    return true
  }

  async getPlataforma(){
    return this.plataforma
  }

  async addOperation(operation){
    this.operations.push(operation)
  }

  async getOperations(){
    return this.operations
  }
}

module.exports = { Engine, Operation }