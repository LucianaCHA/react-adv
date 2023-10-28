import { useState } from 'react';
import { IProduct, onChangeArgs } from '../interfaces/interfaces';

interface IUseProductArgs {
  product: IProduct
  onChange?: (args : onChangeArgs) => void

}
export const useProduct =({onChange, product}: IUseProductArgs) => {
  const [counter, setCounter] = useState(0);

  const increaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0)
    setCounter(newValue);

    onChange && onChange({quantity: newValue, product});
  }

  return {
    counter,
    increaseBy
  }
}