export class Endereco {
    logradouro: string
    numero: string
    bairro: string
    cidade: string
    estado: string
    uf: string
    pais: string
    cep: string

    constructor(logradouro: string, numero: string, bairro: string, cidade: string, estado: string, pais: string, cep: string) {
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