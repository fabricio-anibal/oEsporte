import {Imagem} from './imagem'

export class Atividade {
    nome: string
    descricao: string
    preco: Number
    moeda: string
    imagens: Imagem[]

    constructor(nome: string, descricao: string, preco: Number, moeda: string, imagens: Imagem[]) {
        this.nome = nome
        this.descricao = descricao
        this.preco = preco
        this.moeda = moeda
        this.imagens = imagens
    }
}