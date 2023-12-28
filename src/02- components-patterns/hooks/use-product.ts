import { useEffect,useRef,useState } from 'react'
import { onChangeArgs, IProduct, IInitialValues } from '../interfaces/interfaces';


interface useProductArgs {
    product: IProduct;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
    initialValues?: IInitialValues
}


export const useProduct = ({ onChange, product, value = 0 , initialValues}: useProductArgs) => {

    

    const [ counter, setCounter ] = useState<number>( initialValues?.count || value );
    const isMounted = useRef(false)

    const increaseBy = ( value: number ) => {
        if (initialValues?.maxCount && (counter + value) >= initialValues?.maxCount + 1) {
            return;
        };
        const newValue = Math.max( counter + value, 0 )
        setCounter( newValue );
        onChange && onChange({ count: newValue, product });
    }

    const reset = () => {
        setCounter(initialValues?.count || value);
    }

    
    useEffect(() => {
        if (!isMounted.current) return;
        setCounter( value );
    }, [ value ])
    
    useEffect(()=> {
        isMounted.current = true;
    },[])
    return {
        counter,
        maxCount: initialValues?.maxCount,
        isMaxCountReached: counter === initialValues?.maxCount,
        
        increaseBy,
        reset
    }

}