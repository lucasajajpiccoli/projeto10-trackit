import { useState } from 'react';

import Forms from './common/Forms';

import Input from '../style/Input';

import { postLogIn } from '../services/API';

export default function Login() {
    const initialData = {
        email: "",
        password: ""
    };

    const [data, setData] = useState({ ...initialData });
    const [disable, setDisable] = useState(false);

    const props = {
        initialData,
        data,
        setData,
        disable,
        setDisable,
        handleAPI: postLogIn,
        formType: "login",
        pathTo: "/hoje",
        pathReturn: "/cadastro",
        action: "Entrar",
        message: "Não tem uma conta? Cadastre-se!",
        inputsHeight: 145,
        loadingPosition: `position: fixed; left: 33vw; top: 374px;`
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
        </Forms>
    );
}