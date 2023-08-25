import { Atividade } from "./atividade"
import { Endereco } from "./endereco"
import { HorarioFuncionamento } from "./horarioFuncionamento"
import { Imagem } from "./imagem"
import { Telefone } from "./telefone"

export class Local {
    id!: Number
    nome: String
    nomeFantasia: String
    icon: String
    descricao: String
    endereco: Endereco
    atividades: Atividade[]
    imagens: Imagem[]
    telefones: Telefone
    horarioFuncionamento: HorarioFuncionamento[]

    constructor(nome: String, nomeFantasia: String, icon: String, descricao: String, endereco: Endereco, atividades: Atividade[], imagens: Imagem[], telefones: Telefone, horarioFuncionamento: HorarioFuncionamento[]) {
        this.nome = nome
        this.nomeFantasia = nomeFantasia
        this.icon = icon
        this.descricao = descricao
        this.endereco = endereco
        this.atividades = atividades
        this.imagens = imagens
        this.telefones = telefones
        this.horarioFuncionamento = horarioFuncionamento
    }

    static fromJSON(json: any): Local{
        return new Local(json.nome, json.nomeFantasia, json.icon, json.descricao, json.endereco, json.atividades, json.imagens, json.telefones, json.horarioFuncionamento)
    }
}