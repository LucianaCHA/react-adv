import { useEffect,useState } from 'react'
import { onChangeArgs, IProduct, IInitialValues } from '../interfaces/interfaces';


interface useProductArgs {
    product: IProduct;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
    initialValues: IInitialValues
}


export const useProduct = ({ onChange, product, value = 0 , initialValues}: useProductArgs) => {

    const [ counter, setCounter ] = useState<number>( initialValues ? initialValues.count : value );

    const increaseBy = ( value: number ) => {
        
        const newValue = Math.max( counter + value, 0 )
        setCounter( newValue );

        onChange && onChange({ count: newValue, product });
    }

    useEffect(() => {
        setCounter( value );
    }, [ value ])

    return {
        counter,
        increaseBy
    }

}