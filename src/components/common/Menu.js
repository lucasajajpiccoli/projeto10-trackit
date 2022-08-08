import styled from 'styled-components';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Menu () {
    return (
        <Wrapper>
            <span>Hábitos</span>
            <div><CircularProgressbar value={50} text={"Hoje"} /></div>
            <span>Histórico</span>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100vw;
    height: 70px;
    position: fixed;
    bottom: 0px;
    left: 0px;
    padding: 0px 10vw;
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
        font-weight: 400;
        font-size: 18px;
        color: #52B6FF;
    }

    div {
        width: 90px;
        height: 90px;
        position: fixed;
        bottom: 10px;
        left: calc(50vw - 45px);
    }
`;