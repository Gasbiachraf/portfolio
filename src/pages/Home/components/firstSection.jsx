
import { useContext } from 'react';
import './firstSection.sass'
import { MyContext } from '../../../utils/ContextProvider';
export const FirstSectionHome = () => {
    const [test, setTest , test2 , setTest2] = useContext(MyContext)
    return (
        <>
        <h1>Hello World! from home {test}</h1>
        </>
    );
}
