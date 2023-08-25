import {Imagem} from './imagem'

export class Atividade {
    nome: String
    descricao: String
    preco: Number
    moeda: String
    imagens: Imagem[]

    constructor(nome: String, descricao: String, preco: Number, moeda: String, imagens: Imagem[]) {
        this.nome = nome
        this.descricao = descricao
        this.preco = preco
        this.moeda = moeda
        this.imagens = imagens
    }
}