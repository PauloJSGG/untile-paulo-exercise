import React, { useRef } from 'react';

interface SelectInputProps {
  options: any[];
  classes?: string;
  name?: string;
  valueParameter: string;
}

const SelectInput: React.FC<SelectInputProps> = ({ options, classes, name, valueParameter }) => {
  const selectRef = useRef<HTMLSelectElement>(null);
  return (
    <select
      ref={selectRef}
      className={`select-input ${classes}`}
      name={name}
      id={name}
    >
      {options.map((option, index) => (
        <option key={option.id} value={option[valueParameter]}>
          {option.symbol}
        </option>
      ))}
    </select>
  );
};

export default SelectInput;