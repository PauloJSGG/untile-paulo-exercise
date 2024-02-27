'use client'

import { Dispatch, SetStateAction, createContext, useContext, useState } from 'react';

type ConvertionType = {
  currency: string;
  targetCurrency: string;
  amount: number;
  targetAmount: number;
}

type ConvertionContextType = {
  convertionValue: Array<ConvertionType> | [];
  setConvertionValue: Dispatch<SetStateAction<Array<ConvertionType> | []>>;
}

const ConvertionContext = createContext<ConvertionContextType>({
  convertionValue: [],
  setConvertionValue: () => [],
});

type Props = {
  children?: React.ReactNode
}

const Providers = ({ children }: Props) => {
  const [convertionValue, setConvertionValue] = useState<Array<ConvertionType> | []>([]);
  return (
    <ConvertionContext.Provider
      value={{ convertionValue, setConvertionValue }}
    >
      {children}
    </ConvertionContext.Provider>
  )
}

export { ConvertionContext, Providers }
