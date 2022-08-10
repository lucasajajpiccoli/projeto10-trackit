import styled from 'styled-components';

export default function Title ({children}) {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 90vw;
    margin: 70px auto 0px auto;
    padding-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items:center;

    font-weight: 400;
    font-size: 23px;
    color: #126BA5;
`;