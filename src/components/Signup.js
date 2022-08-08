import { Fragment, useState } from 'react';
import styled from 'styled-components';
import { Audio } from 'react-loader-spinner';
import { Link, useNavigate } from 'react-router-dom';

import Logo from './common/Logo';

import Wrapper from '../style/Form';
import Input from '../style/Input';
import Button from '../style/Button';

import { postSignUp } from '../services/API';

export default function Signup() {
    const navigate = useNavigate();

    const initialData = {
        email: "",
        name: "",
        image: "",
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

    function trySignUp(event) {
        event.preventDefault();
        const request = postSignUp(data);
        setDisable(true);
        request.catch(() => {
            alert("A tentativa de cadastro foi mal sucedida");
            setDisable(false);
            setData({...initialData});
        });
        request.then(() => navigate("/"));
    }

    return (
        <>
            <Container>
                <div><Logo /></div>
                <form onSubmit={trySignUp}>
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
                    <Input
                        name="name"
                        placeholder="nome"
                        type="text"
                        value={data.name}
                        onChange={handleForm}
                        disabled={disable}
                        required
                    />
                    <Input
                        name="image"
                        placeholder="foto"
                        type="url"
                        value={data.image}
                        onChange={handleForm}
                        disabled={disable}
                        required
                    />
                    <Button type="submit" disabled={disable}>Cadastrar</Button>
                </form>
                <div><Link to="/">Já tem uma conta? Faça login!</Link></div>
            </Container>
            <Loading status={disable}>
                <Audio
                    height="40vw"
                    width="40vw"
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

const Container = styled(Wrapper)`
    form {
        height: 245px;
    }
`;

const Loading = styled.div`
    ${props => props.status ? `
        position: fixed;
        left: 30vw;
        top: 274px;
        ` : `
        display: none`
    }
`;
