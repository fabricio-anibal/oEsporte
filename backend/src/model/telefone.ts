export class Telefone {
    ddi: String
    ddd: String
    numero: String
    descricao: String

    constructor(ddi: String, ddd: String, numero: String, descricao: String) {
        this.ddi = ddi
        this.ddd = ddd
        this.numero = numero
        this.descricao = descricao
    }
}