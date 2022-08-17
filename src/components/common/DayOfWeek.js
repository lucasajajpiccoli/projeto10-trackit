import styled from 'styled-components';

export default function DayOfWeek ({children}) {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 8vw;
    height: 8vw;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    font-weight:400;
    font-size: 20px;
    color: #DBDBDB;
`;