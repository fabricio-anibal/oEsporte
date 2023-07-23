import { Component } from '@angular/core';



@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent {
  locaisEsporte: any[] = [
    
    {
      nome: "Parque Celso Daniel",
      nomeFantasia: "Duque",
      icon: "forest",
      descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      endereco: {
        logradouro: "Av. Dom Pedro II",
        numero: "940",
        bairro: "Jardim",
        cidade: "Santo André",
        estado: "São Paulo",
        uf: "SP",
        pais: "Brasil",
        cep: "09080-000",
        latitude: "",
        logitude: "",
      },
      atividades: [
        {
          nome: "Futsal",
          preco: null,
          moeda: null,
          descricao: "Prática de futsal em quadra fechada.",
          imagens: [
            {
              content: "../../assets/quadraFutsal1.jpg",
              cols: 2,
              rows: 2
            }
          ]
        },
        {
          nome: "Tênis",
          preco: 30.0,
          moeda: "R$",
          descricao: "Prática de tênis em quadra aberta.",
          imagens: [
            {
              content: "../../assets/quadraTenis1.jpg",
              cols: 2,
              rows: 2
            }
          ]
        },
        {
          nome: "Volei",
          preco: 0.0,
          moeda: "R$",
          descricao: "Prática de volei em quadra fechada.",
          imagens: [
            {
              content: "../../assets/quadraFutsal1.jpg",
              cols: 2,
              rows: 2
            }
          ]
        }
      ],
      imagens: [
        {
          content: "../../assets/parque1.jpg",
          cols: 2,
          rows: 2
        },
        {
          content: "../../assets/parque2.jpg",
          cols: 1,
          rows: 2
        },
        {
          content: "../../assets/parque3.jpg",
          cols: 1,
          rows: 2
        }
      ],
      telefones: [
        {
          ddi: "+55",
          ddd: "11",
          numero: 44331956,
          descricao: "Telefone fixo"
        }
      ],
      horarioDeFuncionamento: [
        {
          dia: "Segunda-feira",
          inicio: "06:00",
          fim: "22:00"
        },
        {
          dia: "Terça-feira",
          inicio: "06:00",
          fim: "22:00"
        },
        {
          dia: "Quarta-feira",
          inicio: "06:00",
          fim: "22:00"
        },
        {
          dia: "Quinta-feira",
          inicio: "06:00",
          fim: "22:00"
        },
        {
          dia: "Sexta-feira",
          inicio: "06:00",
          fim: "22:00"
        },
        {
          dia: "Sábado",
          inicio: "06:00",
          fim: "22:00"
        },
        {
          dia: "Domingo",
          inicio: "06:00",
          fim: "22:00"
        }
      ]
    },
    {
      nome: "Parque Antônio Pezzolo",
      nomeFantasia: "Chácara Pignatari",
      icon: "sports_soccer",
      descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      endereco: {
        logradouro: "Av. Utinga",
        numero: "136",
        bairro: "Vila Metalurgica",
        cidade: "Santo André",
        estado: "São Paulo",
        uf: "SP",
        pais: "Brasil",
        cep: "09220-610",
        latitude: "",
        logitude: "",
      },
      atividades: [
        {
          nome: "Futsal",
          preco: null,
          moeda: null,
          descricao: "Prática de futsal em quadra fechada.",
          imagens: []
        },
        {
          nome: "Tênis",
          preco: null,
          moeda: null,
          descricao: "Prática de tênis em quadra aberta.",
          imagens: []
        },
        {
          nome: "Basquetebol",
          preco: null,
          moeda: null,
          descricao: "Prática de besquetebol em quadra aberta.",
          imagens: [
            {
              content: "../../assets/basquetepig1.jpg",
              cols: 2,
              rows: 2
            }
          ]
        }
      ],
      imagens: [
        {
          content: "../../assets/pig1.jpg",
          cols: 1,
          rows: 1
        },
        {
          content: "../../assets/pig2.jpg",
          cols: 1,
          rows: 1
        },
        {
          content: "../../assets/pig3.jpg",
          cols: 2,
          rows: 2
        }
      ],
      telefones: [
        {
          ddi: "+55",
          ddd: "11",
          numero: 44331956,
          descricao: "Telefone fixo"
        }
      ],
      horarioDeFuncionamento: [
        {
          dia: "Segunda-feira",
          inicio: "06:00",
          fim: "22:00"
        },
        {
          dia: "Terça-feira",
          inicio: "06:00",
          fim: "22:00"
        },
        {
          dia: "Quarta-feira",
          inicio: "06:00",
          fim: "22:00"
        },
        {
          dia: "Quinta-feira",
          inicio: "06:00",
          fim: "22:00"
        },
        {
          dia: "Sexta-feira",
          inicio: "06:00",
          fim: "22:00"
        },
        {
          dia: "Sábado",
          inicio: "06:00",
          fim: "22:00"
        },
        {
          dia: "Domingo",
          inicio: "06:00",
          fim: "22:00"
        }
      ]
    },
    {
      nome: "Parque Deputado José Cicote",
      nomeFantasia: "Parque Central - Santo André",
      icon: "directions_run",
      descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      endereco: {
        logradouro: "R. José Bonifácio",
        numero: "",
        bairro: "Vila Assunção",
        cidade: "Santo André",
        estado: "São Paulo",
        uf: "SP",
        pais: "Brasil",
        cep: "09030-550",
        latitude: "",
        logitude: "",
      },
      atividades: [
        {
          nome: "Corrida",
          preco: null,
          moeda: null,
          descricao: "Corrida ao ar livre.",
          imagens: [
            {
              content: "../../assets/pccorrida1.jpg",
              cols: 2,
              rows: 2
            },
            {
              content: "../../assets/pccorrida2.jpg",
              cols: 2,
              rows: 2
            }
          ]
        },
        {
          nome: "Futebol society",
          preco: null,
          moeda: null,
          descricao: "Prática de futebol em quadra aberta.",
          imagens: [
            {
              content: "../../assets/pcfut1.jpg",
              cols: 2,
              rows: 2
            }
          ]
        }
      ],
      imagens: [
        {
          content: "../../assets/pc1.jpg",
          cols: 2,
          rows: 2
        },
        {
          content: "../../assets/pc2.jpg",
          cols: 2,
          rows: 1
        },
        {
          content: "../../assets/pc3.jpg",
          cols: 2,
          rows: 1
        }
      ],
      telefones: [
        {
          ddi: "+55",
          ddd: "11",
          numero: 44331956,
          descricao: "Telefone fixo"
        }
      ],
      horarioDeFuncionamento: [
        {
          dia: "Segunda-feira",
          inicio: "06:00",
          fim: "22:00"
        },
        {
          dia: "Terça-feira",
          inicio: "06:00",
          fim: "22:00"
        },
        {
          dia: "Quarta-feira",
          inicio: "06:00",
          fim: "22:00"
        },
        {
          dia: "Quinta-feira",
          inicio: "06:00",
          fim: "22:00"
        },
        {
          dia: "Sexta-feira",
          inicio: "06:00",
          fim: "22:00"
        },
        {
          dia: "Sábado",
          inicio: "06:00",
          fim: "22:00"
        },
        {
          dia: "Domingo",
          inicio: "06:00",
          fim: "22:00"
        }
      ]
    } 
  ];

  lastOfList(list: any[], o: any){
    if(list[list.length - 1] == o){
      return true
    }
    return false
  }

  localChoosen(local: any){
    this.imagensAtuais = local[0].imagens
  }

  clearSelection(matList: any){
    matList.deselectAll()
    this.imagensAtuais = this.localSelecionado[0].imagens
  }

  atividadeChoosen(atividade: any){
    this.imagensAtuais = atividade[0].imagens
  }


  localSelecionado: any[] = []
  atividadeSelecionada: any[] = []
  imagensAtuais: any[] = []
}
