import styled from 'styled-components';

import Header from './common/Header';
import Title from './common/Title';
import Menu from './common/Menu';

import Text from '../style/Text';

export default function History () {
    return (
        <Wrapper>
            <Header />
            <Title>Histórico</Title>
            <Text>Em breve você poderá ver o histórico dos seus hábitos aqui!</Text>
            <Menu />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    min-height: calc(100vh - 140px);
    background-color: #F2F2F2;
`;