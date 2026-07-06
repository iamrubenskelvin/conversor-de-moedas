const buttonplay = document.querySelector("#button-play");
const moedaParaSelect = document.querySelector("#moeda-para");
const moedaDeSelect = document.querySelector("#moeda-de");

const convertValues = async () => {
  const valor = Number(document.querySelector("#valor").value);

  const moedaDe = document.querySelector("#valor-moeda-de");
  const moedaPara = document.querySelector("#valor-moeda-para");

  const data = await fetch(
    "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL,ARS-BRL"
  ).then((response) => response.json());

  const dollarToDay = Number(data.USDBRL.bid);
  const euroToDay = Number(data.EURBRL.bid);
  const poundToDay = Number(data.GBPBRL.bid);
  const pesoToDay = Number(data.ARSBRL.bid);

  let valorEmReal = 0;
  let resultado = 0;

  // CONVERTE A MOEDA DE ORIGEM PARA REAL
  if (moedaDeSelect.value == "BRL") {
    valorEmReal = valor;
  }

  if (moedaDeSelect.value == "USD") {
    valorEmReal = valor * dollarToDay;
  }

  if (moedaDeSelect.value == "EUR") {
    valorEmReal = valor * euroToDay;
  }

  if (moedaDeSelect.value == "GBP") {
    valorEmReal = valor * poundToDay;
  }

  if (moedaDeSelect.value == "ARS") {
    valorEmReal = valor * pesoToDay;
  }

  // CONVERTE DO REAL PARA A MOEDA ESCOLHIDA
  if (moedaParaSelect.value == "BRL") {
    resultado = valorEmReal;

    moedaPara.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(resultado);
  }

  if (moedaParaSelect.value == "USD") {
    resultado = valorEmReal / dollarToDay;

    moedaPara.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(resultado);
  }

  if (moedaParaSelect.value == "EUR") {
    resultado = valorEmReal / euroToDay;

    moedaPara.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(resultado);
  }

  if (moedaParaSelect.value == "GBP") {
    resultado = valorEmReal / poundToDay;

    moedaPara.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(resultado);
  }

  if (moedaParaSelect.value == "ARS") {
    resultado = valorEmReal / pesoToDay;

    moedaPara.innerHTML = new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
    }).format(resultado);
  }

  // MOSTRA A MOEDA DE ORIGEM
  moedaDe.innerHTML = new Intl.NumberFormat(
    moedaDeSelect.value == "USD"
      ? "en-US"
      : moedaDeSelect.value == "EUR"
      ? "de-DE"
      : moedaDeSelect.value == "GBP"
      ? "en-GB"
      : moedaDeSelect.value == "ARS"
      ? "es-AR"
      : "pt-BR",
    {
      style: "currency",
      currency: moedaDeSelect.value,
    }
  ).format(valor);
};

function changeCurrency() {
  const currencyName = document.querySelector("#nome-moeda-para");
  const currencyImg = document.querySelector("#img-moeda-para");

  if (moedaParaSelect.value == "BRL") {
    currencyName.innerHTML = "Real Brasileiro";
    currencyImg.src = "./assets/brazilian-real.png";
  }

  if (moedaParaSelect.value == "USD") {
    currencyName.innerHTML = "Dólar Americano";
    currencyImg.src = "./assets/dollar.png";
  }

  if (moedaParaSelect.value == "EUR") {
    currencyName.innerHTML = "Euro";
    currencyImg.src = "./assets/euro.png";
  }

  if (moedaParaSelect.value == "GBP") {
    currencyName.innerHTML = "Libra Esterlina";
    currencyImg.src = "./assets/libra4.png";
  }

  if (moedaParaSelect.value == "ARS") {
    currencyName.innerHTML = "Peso Argentino";
    currencyImg.src = "./assets/peso argentino.png";
  }

  convertValues();
}

function changeCurrencyFrom() {
  const currencyName = document.querySelector("#nome-moeda-de");
  const currencyImg = document.querySelector("#img-moeda-de");

  if (moedaDeSelect.value == "BRL") {
    currencyName.innerHTML = "Real Brasileiro";
    currencyImg.src = "./assets/brazilian-real.png";
  }

  if (moedaDeSelect.value == "USD") {
    currencyName.innerHTML = "Dólar Americano";
    currencyImg.src = "./assets/dollar.png";
  }

  if (moedaDeSelect.value == "EUR") {
    currencyName.innerHTML = "Euro";
    currencyImg.src = "./assets/euro.png";
  }

  if (moedaDeSelect.value == "GBP") {
    currencyName.innerHTML = "Libra Esterlina";
    currencyImg.src = "./assets/libra4.png";
  }

  if (moedaDeSelect.value == "ARS") {
    currencyName.innerHTML = "Peso Argentino";
    currencyImg.src = "./assets/peso argentino.png";
  }

  convertValues();
}

moedaParaSelect.addEventListener("change", changeCurrency);
moedaDeSelect.addEventListener("change", changeCurrencyFrom);
buttonplay.addEventListener("click", convertValues);