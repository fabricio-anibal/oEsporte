export class Endereco {
    logradouro: String
    numero: String
    bairro: String
    cidade: String
    estado: String
    uf: String
    pais: String
    cep: String

    constructor(logradouro: String, numero: String, bairro: String, cidade: String, estado: String, pais: String, cep: String) {
        this.logradouro = logradouro
        this.numero = numero
        this.bairro = bairro
        this.cidade = cidade
        this.estado = estado
        this.uf = estado
        this.pais = pais
        this.cep = cep
    }
}