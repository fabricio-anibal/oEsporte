import { Atividade } from "./atividade"
import { Endereco } from "./endereco"
import { HorarioFuncionamento } from "./horarioFuncionamento"
import { Imagem } from "./imagem"
import { LocalException } from "./localException"
import { Telefone } from "./telefone"

export class Local {
    id!: Number
    nome: string
    nomeFantasia: string
    icon!: string
    descricao: string
    endereco!: Endereco
    atividades!: Atividade[]
    imagens!: Imagem[]
    telefones!: Telefone
    horarioFuncionamento!: HorarioFuncionamento[]

    constructor(nome: string, nomeFantasia: string, descricao: string) {
        this.nome = nome
        this.nomeFantasia = nomeFantasia
        this.descricao = descricao
    }

    static fromJSON(json: any): Local{
        try{
            if (json.nome == null) {
                throw new LocalException('Nome is required')
            }

            if (json.nomeFantasia == null) {
                throw new LocalException('Nome Fantasia is required')
            }

            if (json.descricao == null) {
                throw new LocalException('Descricao is required')
            }

            var local = new Local(json.nome, json.nomeFantasia, json.descricao)

            if (json.id) {
                local.id = json.id
            }

            if (json.icon) {
                local.icon = json.icon
            }

            if (json.endereco) {
                local.endereco = json.endereco
            }

            if (json.atividades) {
                local.atividades = json.atividades
            }

            if (json.imagens) {
                local.imagens = json.imagens
            }

            if (json.telefones) {
                local.telefones = json.telefones
            }

            if (json.horarioFuncionamento) {
                local.horarioFuncionamento = json.horarioFuncionamento
            }

            return local
        }
        catch(error) {
            console.log(error)
            throw new LocalException('Invalid JSON')
        }

        
    }
}