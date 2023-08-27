export class Telefone {
    ddi: string
    ddd: string
    numero: string
    descricao: string

    constructor(ddi: string, ddd: string, numero: string, descricao: string) {
        this.ddi = ddi
        this.ddd = ddd
        this.numero = numero
        this.descricao = descricao
    }
}