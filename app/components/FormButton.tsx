'use client'

import { useState } from "react";

const ConvertForm = ({ currencies }: any) => {
  const [isLoading, setIsLoading] = useState(false);
  
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("form submitted");
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col items-center justify-center w-full h-1/2 bg-gray-300 rounded-lg p-8 m-8"
      >
      {/* amount */}
      <input type="text" name="amount" id="amount" placeholder="Amount" className="p-2 m-2 w-2/4 text-black" />
      {/* currency select */}
      <select name="currency" id="currency" className="p-2 m-2 text-black w-2/4">
        {currencies?.map((currency: string) => (
          <option value={currency}>{currency}</option>
        ))}
      </select>
      {/* target currency select */}
      <select name="targetCurrency" id="targetCurrency" className="p-2 m-2 text-black w-2/4">
        {currencies?.map((currency: string) => (
          <option value={currency}>{currency}</option>
        ))}
      </select>
      {/* submit button */}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded align-end"
        type="submit"
      >
        {isLoading ? "Loading..." : "Convert"}
      </button>
    </form>
  )
}

export default ConvertForm;