import styled from 'styled-components';

import DayOfWeek from '../common/DayOfWeek';

import trash from '../../assets/images/trash.svg';

export default function Habit ({weekdays}) {
    return(
        <Wrapper>
            <div>Ler 1 capítulo de livro</div>
            <div>
                {weekdays.map((item, index) => <DayOfWeek key={index}>{item}</DayOfWeek>)}
            </div>
            <img src={trash} alt="" />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 90vw;
    padding: 15px 4vw;
    border-radius: 5px;
    background-color: #FFFFFF;
    position: relative;

    & > div:nth-child(1) {
        margin-bottom: 10px;
        font-weight: 400;
        font-size: 20px;
        color: #666666;
    }

    & > div:nth-child(2) {
        width: 62vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    & > img {
        width: 13px;
        height: 15px;
        position: absolute;
        top: 10px;
        right: 10px;
    }
`;