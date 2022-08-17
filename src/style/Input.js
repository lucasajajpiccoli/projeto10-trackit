import styled from 'styled-components';

const Input = styled.input`
    width: 80vw;
    height: 45px;
    padding: 0px 10px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;

    font-weight: 400;
    font-size: 20px;
    color: #666666;

    &::placeholder {
        color: #DBDBDB;
    }

    &:focus {
        outline: none;
    }
`;

export default Input;