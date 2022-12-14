import { useContext } from 'react';
import styled from 'styled-components';

import UserContext from '../../contexts/UserContext';

export default function Header () {
    const { user } = useContext(UserContext);

    return (
        <Wrapper>
            <span>TrakcIt</span>
            <img src={user.image} alt="" />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100vw;
    height: 70px;
    position: fixed;
    top: 0px;
    left: 0px;
    padding: 0px 18px;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
        font-family: 'Playball', cursive;
        font-weight: 400;
        font-size: 39px;
        color: #FFFFFF;
    }

    img {
        width: 51px;
        height: 51px;
        border-radius: 50%;
    }
`;