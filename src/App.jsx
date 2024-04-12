
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home/home';
import { AboutPage } from './pages/About/about';
import { ErrorPage } from './pages/Error/Error';
import { MyProvider } from './utils/ContextProvider';
function App() {
    return (

    <MyProvider>

        <Routes >
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/*' element={<ErrorPage />} />
        </Routes >

    </MyProvider>
);
}
export default App;

