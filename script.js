const valorInput = document.querySelector("#valor");
const moedaDe = document.querySelector("#moeda-de");
const MoedaPara = document.querySelector("#moeda-para");
const botao = document.querySelector("#button-play");
const resultadoTexto = document.querySelector("#resultado");

const imgMoedaDe = document.querySelector("#img-moeda-de");
const nomeMoedaDe = document.querySelector("#nome-moeda-de");
const valorMoedaDe = document.querySelector("#valor-moeda-de");

const imgMoedaPara = document.querySelector("#img-moeda-para");
const nomeMoedaPara = document.querySelector("#nome-moeda-para");
const valorMoedaPara = document.querySelector("#valor-moeda-para");

const moedas = {
  BRL: {
    nome: "Real brasileiro",
    imagem: "./assets/brazilian-real.png"
  },

  USD: {
    nome: "Dólar americano",
    imagem: "./assets/dollar.png"
  },

  EUR: {
    nome: "Euro",
    imagem: "./assets/euro.png"
  },

  GBP: {
    nome: "Libra esterlina",
    imagem: "./assets/libra4.png"
  },

  ARS: {
    nome: "Peso argentino",
    imagem: "./assets/peso argentino.png"
  }
}

const simbolos = {
  BRL: "R$",
  USD: "US$",
  EUR: "€",
  GBP: "£",
  ARS: "$",
};

async function converter() {
  const de = moedaDe.value;
  const para = MoedaPara.value;

  const valor = Number(valorInput.value);

  imgMoedaDe.src = moedas[de].imagem;
  nomeMoedaDe.innerHTML = moedas[de].nome;

  imgMoedaPara.src = moedas[para].imagem;
  nomeMoedaPara.innerHTML = moedas[para].nome;

  valorMoedaDe.innerHTML =
    simbolos[de] +
    " " +
    valor.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  const resposta = await fetch(`https://open.er-api.com/v6/latest/${de}`);

  const dados = await resposta.json();

  const taxa = dados.rates[para];

  const resultado = valor * taxa;

  valorMoedaPara.innerHTML =
    simbolos[para] +
    " " +
    resultado.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
}

botao.addEventListener("click", converter);

valorInput.addEventListener("keypress", function(event){

  if(event.key === "Enter"){
      converter()
  }
  })