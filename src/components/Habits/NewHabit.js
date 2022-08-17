import styled from 'styled-components';

import DayOfWeek from '../common/DayOfWeek';

import Input from '../../style/Input';
import Button from '../../style/Button';

export default function NewHabit({weekdays}) {
    return (
        <Wrapper>
            <Input
                name="nome"
                placeholder="nome do hábito"
                type="text"
                required
            />
            <div>
                {weekdays.map((item, index) => <DayOfWeek key={index}>{item}</DayOfWeek>)}
            </div>
            <Buttons>
                <Button>Cancelar</Button>
                <Button>Salvar</Button>
            </Buttons>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 90vw;
    padding: 20px 5vw;
    border-radius: 5px;
    background-color: #FFFFFF;

    & > div:nth-child(2) {
        width: 62vw;
        margin: 10px 0px 30px 0px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

const Buttons = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    & button:nth-child(1) {
        width: 23vw;
        height: 35px;
        margin-right: 15px;
        background-color: #FFFFFF;
        color: #52B6FF;
    }
    & button:nth-child(2) {
        width: 23vw;
        height: 35px;
    }
`