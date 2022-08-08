import styled from 'styled-components';

import bar1 from '../../assets/images/logo/bar1.svg';
import bar2 from '../../assets/images/logo/bar2.svg';
import bar3 from '../../assets/images/logo/bar3.svg';
import arrow from '../../assets/images/logo/arrow.svg';
import shadow from '../../assets/images/logo/shadow.svg';

export default function Logo () {
    return (
        <Wrapper>
            <div>
                <img src={bar1} alt="" />
                <img src={bar2} alt="" />
                <img src={bar3} alt="" />
            </div>
            <img src={arrow} alt="" />
            <img src={shadow} alt="" />
            <div>TrackIt</div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 180px;
    position: relative;

    div img:nth-child(1) {
        position: absolute;
        left: 51px;
        top: 19px;
    }
    div img:nth-child(2) {
        position: absolute;
        left: 76px;
        top: 11px;
    }
    div img:nth-child(3) {
        position: absolute;
        left: 101px;
        top: 0px;
    }
    img:nth-child(2) {
        position: absolute;
        left: 13px;
        top: 38px;
        z-index: 1;
    }
    img:nth-child(3) {
        position: absolute;
        left: 26px;
        top: 76px;
    }
    div:nth-child(4) {
        position: absolute;
        left: 0px;
        top: 93px;
        font-family: 'Playball', cursive;
        font-weight: 400;
        font-size: 69px;
        color: #126BA5;
    }
`;