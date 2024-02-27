'use client'

import { useContext, useState } from "react";
import { ConvertionContext } from "../providers";
import SelectInput from "../components/SelectInput";
import CalculatorResult from "./CalculatorResult";

const Calculator = ({ currencies }: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const { convertionValue, setConvertionValue } = useContext(ConvertionContext);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true)
    e.preventDefault();

    const amount = (e.target as any).amount.value;
    const currency = (e.target as any).currency.value;
    const targetCurrency = (e.target as any).targetCurrency.value;

    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${currency}&vs_currencies=${targetCurrency}`);
      const data = await response.json();

      setConvertionValue([...convertionValue, {
        currency,
        targetCurrency,
        amount,
        targetAmount: data[currency][targetCurrency]
      }]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <h1 className="text-4xl font-bold text-untile-blue">CRYPTO CALCULATOR</h1>
      <form
        onSubmit={onSubmit}
        className="flex items-end space-x-2 justify-center w-full h-1/2"
      >
        {/* amount and currency */}
        <div className="w-1/2 flex flex-col justify-between">
          <label htmlFor="amount" className="text-xs mb-2 font-medium text-untile-blue">FROM:</label>
          <div className="flex space-x-2 h-12">
            <input type="text" name="amount" id="amount" placeholder="Amount" className="p-2 text-black w-1/2" />
            <SelectInput name="currency" options={currencies} classes="w-1/2 p-2 text-black" valueParameter="id" />
          </div>
        </div>
        {/* arrow right */}
        <img
          src="/arrow-to.svg"
          alt="arrow right"
          className="object-contain"
          style={{
            width: '50px',
            height: '50px'
          }}
        />

        {/* target currency select */}
        <div className="w-1/2 flex flex-col justify-between">
          <label htmlFor="targetCurrency" className="text-xs mb-2 font-medium text-untile-blue">TO:</label>
          <div className="flex h-12 space-x-2">
            <SelectInput name="targetCurrency" options={currencies} classes="w-1/2 p-2 text-black" valueParameter="symbol" />
            {/* submit button */}
            <button
              className="bg-untile-blue text-white font-bold py-2 px-4 rounded align-end w-1/2"
              type="submit"
            >
              {isLoading ? "Loading..." : "Convert"}
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default Calculator;