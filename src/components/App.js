import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from '../style/globalStyle';

import Login from './Login';
import Signup from './Signup';
import Habits from './Habits';
import Today from './Today';
import History from './History';

function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/cadastro" element={<Signup />} />
                    <Route path="/habitos" element={<Habits />} />
                    <Route path="/hoje" element={<Today />} />
                    <Route path="/historico" element={<History />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;