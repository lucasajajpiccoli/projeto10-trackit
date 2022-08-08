import { Fragment, useState } from 'react';
import styled from 'styled-components';
import { Audio } from 'react-loader-spinner';
import { Link, useNavigate } from 'react-router-dom';

import Logo from './common/Logo';

import Wrapper from '../style/Form';
import Input from '../style/Input';
import Button from '../style/Button';

import { postLogIn } from '../services/API';

export default function Login() {
    const navigate = useNavigate();

    const initialData = {
        email: "",
        password: ""
    };

    const [data, setData] = useState({...initialData});
    const [disable, setDisable] = useState(false);

    function handleForm(event) {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
    }

    function tryLogIn(event) {
        event.preventDefault();
        const request = postLogIn(data);
        setDisable(true);
        request.catch(() => {
            alert("A tentativa de login foi mal sucedida");
            setDisable(false);
            setData({...initialData});
        });
        request.then(() => navigate("/hoje"));
    }

    return (
        <>
            <Wrapper>
                <div><Logo /></div>
                <form onSubmit={tryLogIn}>
                    <Input
                        name="email"
                        placeholder="email"
                        type="email"
                        value={data.email}
                        onChange={handleForm}
                        disabled={disable}
                        required
                    />
                    <Input
                        name="password"
                        placeholder="senha"
                        type="password"
                        value={data.password}
                        onChange={handleForm}
                        disabled={disable}
                        required
                    />
                    <Button type="submit" disabled={disable}>Entrar</Button>
                </form>
                <div><Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link></div>
            </Wrapper>
            <Loading status={disable}>
                <Audio
                    height="34vw"
                    width="34vw"
                    radius="9"
                    color='#52B6FF'
                    ariaLabel='three-dots-loading'
                    wrapperStyle
                    wrapperClass
                />
            </Loading>
        </>
    );
}

const Loading = styled.div`
    ${props => props.status ? `
        position: fixed;
        left: 33vw;
        top: 230px;
        ` : `
        display: none`
    }
`;
