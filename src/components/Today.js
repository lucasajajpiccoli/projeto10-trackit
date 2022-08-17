import styled from 'styled-components';
import dayjs from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale';

import Header from './common/Header';
import Title from './common/Title';
import Menu from './common/Menu';

import HabitCard from './HabitCard';

export default function Today() {
    dayjs.extend(updateLocale);
    dayjs.updateLocale('en', {
        weekdays: [
            "Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"
        ]
    });

    return (
        <Wrapper>
            <Header />
            <Title>{dayjs().format('dddd, DD/MM')}</Title>
            <div>Nenhum hábito concluído ainda</div>
            <div>
                <HabitCard />
                <HabitCard />
            </div>
            <Menu />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    min-height: calc(100vh - 140px);
    background-color: #F2F2F2;

    & > div:nth-child(3) {
        width: 90vw;
        font-weight: 400;
        font-size: 18px;
        color: #BABABA;
        margin: 6px auto 0px auto;
    }

    & > div:nth-child(4) {
        width: 90vw;
        margin: 30px auto;
    }
`;