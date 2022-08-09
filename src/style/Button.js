import styled from 'styled-components';

const Button = styled.button`
    width: 80vw;
    height: 45px;
    border: none;
    border-radius: 5px;
    background-color: #52B6FF;

    font-weight: 400;
    font-size: 21px;
    text-align: center;
    color: #FFFFFF;

    &:disabled {
        opacity: 0.5;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export default Button;