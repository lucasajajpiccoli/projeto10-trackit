import styled from 'styled-components';
import { ThreeDots } from 'react-loader-spinner';
import { Link, useNavigate } from 'react-router-dom';

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

    function sendForm(event) {
        event.preventDefault();
        const request = handleAPI(data);
        setDisable(true);
        request.catch(() => {
            alert(`A tentativa de ${formType} foi mal sucedida`);
            setDisable(false);
            setData({ ...initialData });
        });
        request.then(() => navigate(pathTo));
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