import { useContext } from 'react';
import styled from 'styled-components';
import { ThreeDots } from 'react-loader-spinner';
import { Link, useNavigate } from 'react-router-dom';

import UserContext from '../../contexts/UserContext';

import Logo from './Logo';

import Wrapper from '../../style/Form';
import Button from '../../style/Button';

export default function Forms(
    {
        initialData,
        data,
        setData,
        disable,
        setDisable,
        handleAPI,
        formType,
        pathTo,
        pathReturn,
        action,
        message,
        inputsHeight,
        loadingPosition,
        children
    }) {
    const navigate = useNavigate();

    const { user, setUser } = useContext(UserContext);

    function sendForm(event) {
        event.preventDefault();
        const request = handleAPI(data);
        setDisable(true);
        request
            .catch(() => {
                alert(`A tentativa de ${formType} foi mal sucedida`);
                setDisable(false);
                setData({ ...initialData });
            })
            .then(response => {
                if (formType === "login") {
                    setUser({
                        ...user,
                        image: response.data.image,
                        token: response.data.token
                    });
                }
                navigate(pathTo);
            });
    }

    return (
        <Container inputsHeight={inputsHeight}>
            <div><Logo /></div>
            <form onSubmit={sendForm}>
                {children}
                <Button type="submit" disabled={disable}>
                    {disable ?
                        <ThreeDots
                            height="50"
                            width="50"
                            radius="9"
                            color="#FFFFFF"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClassName=""
                            visible={true}
                        />
                        :
                        action
                    }
                </Button>
            </form>
            <div><Link to={pathReturn}>{message}</Link></div>
        </Container>
    );
}

const Container = styled(Wrapper)`
    form {
        height: ${props => props.inputsHeight}px;
    }
`;