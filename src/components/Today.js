import styled from 'styled-components';

import Header from './common/Header';
import Menu from './common/Menu';

export default function Today() {
    return (
        <Wrapper>
            <Header />
            <Menu />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    height: 100vh;
    background-color: #F2F2F2;
`;