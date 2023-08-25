export class HorarioFuncionamento {
    dia: String
    inicio: String
    fim: String

    constructor(diaSemana: String, horaInicio: String, horaFim: String) {
        this.dia = diaSemana
        this.inicio = horaInicio
        this.fim = horaFim
    }
}