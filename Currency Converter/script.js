let apikey =
  "https://v6.exchangerate-api.com/v6/8773044917fefac86755c4e7/latest/AZN";
let fromDropDown = document.getElementById("from-currency-select");
let toDropDown = document.getElementById("to-currency-select");

currencies.forEach((currency) => {
  const option = document.createElement("option");
  option.value = currency;
  option.text = currency;
  fromDropDown.add(option);
});
currencies.forEach((currency) => {
  const option = document.createElement("option");
  option.value = currency;
  option.text = currency;
  toDropDown.add(option);
});

fromDropDown.value = "USD";
toDropDown.value = "AZN";

let convertCurrency = () => {
  let amount = document.querySelector("#amount").value;
  const result = document.getElementById("result");
  const fromCurrency = fromDropDown.value;
  const toCurrency = toDropDown.value;
  if (amount.length != 0) {
    fetch(apikey)
      .then((response) => response.json())
      .then((data) => {
        let fromExchangeRate = data.conversion_rates[fromCurrency];
        let toExchangeRate = data.conversion_rates[toCurrency];
        let amounted = ((toExchangeRate / fromExchangeRate) * amount).toFixed(
          2
        );
        result.innerHTML = `${amount} ${fromCurrency} = ${amounted} ${toCurrency}`;
      });
  } else {
    alert("Please fill in the box");
  }
};

document
  .getElementById("convert-button")
  .addEventListener("click", convertCurrency);

window.addEventListener("load", convertCurrency);
