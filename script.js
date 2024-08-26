const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
{
    enunciado: "Em sua opinião quem foi o melhor durante a década passada?",
    alternativas: [
        {
            texto: "Messi",
            afirmacao: "Sabe muito!"
        },
        {
        texto:"Cristiano Ronaldo",
        afirmacao: "Tente novamente!"
        }
    ]
},

{
    enunciado: "Você gosta de mamão?",
    alternativas: [
        {

        texto: "Sim",
        afirmacao: "Neutro"
        },
        {
        texto:"Não",
        afirmacao: "Neutro"
        }
    ]
},

{
    enunciado: "Qual desses você prefere?",
    alternativas: [
        {
        texto:"Carro",
        afirmacao: "Família!"
        },
        {
        texto:"Moto",
        afirmacao: "Solitude."
        }
    ]
}

]
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if (atual >= perguntas.length){
        mostraResultado();
        return; 
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", ()=> respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao
    historiaFinal += afirmacao + " ";
    atual++;
    mostraPergunta();
}
function mostraResultado(){
caixaPerguntas.textContent = "Suas ações mudam o mundo!";
textoResultado.textContent = historiaFinal;
caixaAlternativas.textContent = "";
}

mostraPergunta();
