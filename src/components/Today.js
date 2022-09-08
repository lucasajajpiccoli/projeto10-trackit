import dayjs from 'dayjs';
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import updateLocale from 'dayjs/plugin/updateLocale';

import { getTodayHabits } from '../services/API';

import UserContext from '../contexts/UserContext';

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

    const [todayHabits, setTodayHabits] = useState(null);

    const { user } = useContext(UserContext);

    const navigate = useNavigate();

    useEffect(() => {
        const request = getTodayHabits(user.token);
        request
            .catch(() => {
                navigate("/");
            })
            .then(response => {
                setTodayHabits([...response.data]);
            });
    }, []);

    let status;
    if (todayHabits === null) {
        status = "";
    } else if (todayHabits.filter(habit => habit.done).length === 0) {
        status = "Nenhum hábito concluído ainda";
    } else {
        status = `${Math.round(100*todayHabits.filter(habit => habit.done).length/todayHabits.length)}% dos hábitos concluídos`;
    }

    return (
        <Wrapper>
            <Header />
            <Title>{dayjs().format('dddd, DD/MM')}</Title>
            <div>{status}</div>
            <div>
                {todayHabits ? todayHabits.map(habit => 
                    <HabitCard
                        key = {habit.id}
                        name = {habit.name}
                        done = {habit.done}
                        currentSequence = {habit.currentSequence}
                        highestSequence = {habit.highestSequence}
                    />)
                    :
                    ""
                }
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