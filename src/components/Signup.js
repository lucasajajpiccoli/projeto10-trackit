import { useState } from 'react';

import Forms from './common/Forms';

import Input from '../style/Input';

import { postSignUp } from '../services/API';

export default function Signup() {
    const initialData = {
        email: "",
        name: "",
        image: "",
        password: ""
    };

    const [data, setData] = useState({...initialData});
    const [disable, setDisable] = useState(false);

    const props = {
        initialData,
        data,
        setData,
        disable,
        setDisable,
        handleAPI: postSignUp,
        formType: "cadastro",
        pathTo: "/",
        pathReturn: "/",
        action: "Cadastrar",
        message: "Já tem uma conta? Faça login!",
        inputsHeight: 245,
        loadingPosition: `position: fixed; left: 30vw; top: 274px;`
    };

    function handleForm(event) {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
    }

    return (
        <Forms {...props}>
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
        </Forms>
    );
}