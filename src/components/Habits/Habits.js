import styled from 'styled-components';

import Header from '../common/Header';
import Title from '../common/Title';
import Menu from '../common/Menu';

import NewHabit from './NewHabit';
import Habit from './Habit';

export default function Habits() {
    const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];
    return (
        <Wrapper>
            <Header />
            <Title>
                <div>Meus hábitos</div>
                <PlusButton><div>+</div></PlusButton>
            </Title>
            <NewHabit weekdays={weekdays} />
            <Habit weekdays={weekdays} />
            <Menu />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    min-height: calc(100vh - 140px);
    background-color: #F2F2F2;

    & > div:nth-child(3),
    & > div:nth-child(4) {
        width: 90vw;
        margin: 20px auto;
    }
`;

const PlusButton = styled.div`
    width: 40px;
    height: 35px;
    background-color: #52B6FF;
    border-radius: 5px;
    position: relative;

    & > div:nth-child(1) {
        position: absolute;
        left: 12px;
        top: 2px;
        font-weight: 400;
        font-size: 27px;
        color: #FFFFFF;
    }
`;