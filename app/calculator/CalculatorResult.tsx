'use client'

import { useContext } from 'react';
import { ConvertionContext } from '../providers';

const CalculatorResult = () => {
  const { convertionValue } = useContext(ConvertionContext);

  if (convertionValue.length === 0) return null

  return (
    <div className="w-full h-1/2 flex items-center justify-center">
      <h1 className="text-untile-blue text-6xl font-bold">
        <h3 className='text-sm text-center'>RESULT</h3>
        {convertionValue.map((convertion: any, index: number) => (
          <div key={index} className='flex flex-col'>

            {index === convertionValue.length - 1 ?
              <h2 className="text-gray-500 text-sm" >
                <b>{convertion.amount} {convertion.currency}</b> is worth  <b>{convertion.targetAmount} {convertion.targetCurrency}</b>
              </h2> :
              <h3 className='text-gray-500 text-xs'>
                <b>{convertion.amount} {convertion.currency}</b> is worth  <b>{convertion.targetAmount} {convertion.targetCurrency}</b>
              </h3>
            }
          </div>
        )).reverse()}
      </h1>
    </div>
  );
}

export default CalculatorResult;