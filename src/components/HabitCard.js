import styled from 'styled-components';

import Checkmark from '../style/Checkmark';

export default function HabitCard () {
    return (
        <Wrapper>
            <div>
                <span>Ler 1 capítulo de livro</span>
                <span>Sequência atual: 3 dias</span>
                <span>Seu recorde: 5 dias</span>
            </div>
            <Checkmark />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 90vw;
    height: 95px;
    background-color: #FFFFFF;
    border-radius: 5px;
    margin: 10px 0px;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
        display: block;
        font-weight: 400;
        color: #666666;
    }

    & div > span:nth-child(1) {
        font-size: 20px;
        line-height: 25px;
        margin-bottom: 3px;
    }

    & div > span:nth-child(2),
    & div > span:nth-child(3) {
        font-size: 13px;
        line-height: 16px;
    }
`;