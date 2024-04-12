
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home/home';
import { ErrorPage } from './pages/Error/Error';
import { MyProvider } from './utils/ContextProvider';
import { Componentheader } from './layouts/header';
import { CompenentFooter } from './layouts/footer';
function App() {
    return (

    <MyProvider>
        <Componentheader/>
        <Routes >
            <Route path='/*' element={<ErrorPage />} /> 
            <Route path='/' element={<HomePage />} />
        </Routes >
        <CompenentFooter/>

    </MyProvider>
);
}
export default App;

