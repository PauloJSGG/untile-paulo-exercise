import Calculator from "./Calculator";
import CalculatorResult from "./CalculatorResult";

async function getCurrencies() {
  try {
    const currenciesResponse = await fetch("https://api.coingecko.com/api/v3/simple/supported_vs_currencies");
    const symbolsResponse = await fetch("https://api.coingecko.com/api/v3/coins/list");
    const currencies = await currenciesResponse.json();
    const symbols = await symbolsResponse.json();

    const result = symbols.filter((symbol: any) => currencies.includes(symbol.symbol));
    
    return result;
  } catch (error) {
    console.error(error);
  }
}

async function getData(ids = "bitcoin", vs_currencies = "usd") {
  try {
    const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=${vs_currencies}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default async function Page() {
  const currencies = await getCurrencies();
  // const data = await getData();

  return (
    <>

      <Calculator 
        currencies={currencies}
      />
      <CalculatorResult />
    </>
  );
}
