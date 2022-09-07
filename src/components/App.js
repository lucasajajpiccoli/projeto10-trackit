import { Fragment, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyle from '../style/globalStyle';

import UserContext from '../contexts/UserContext';

import Login from './Login';
import Signup from './Signup';
import Habits from './Habits/Habits';
import Today from './Today';
import History from './History';

function App() {
    const [user, setUser] = useState({
        image: "",
        token: ""
    });

    return (
        <>
            <GlobalStyle />
            <UserContext.Provider value={{ user, setUser }}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/cadastro" element={<Signup />} />
                        <Route path="/habitos" element={<Habits />} />
                        <Route path="/hoje" element={<Today />} />
                        <Route path="/historico" element={<History />} />
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </>
    );
}

export default App;