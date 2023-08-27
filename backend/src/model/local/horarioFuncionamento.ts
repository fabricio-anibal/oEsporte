export class HorarioFuncionamento {
    dia: string
    inicio: string
    fim: string

    constructor(diaSemana: string, horaInicio: string, horaFim: string) {
        this.dia = diaSemana
        this.inicio = horaInicio
        this.fim = horaFim
    }
}