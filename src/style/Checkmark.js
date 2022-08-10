import styled from 'styled-components';

import check from '../assets/images/check.svg';

const Checkmark = styled.div`
    width: 69px;
    height: 69px;
    border-radius: 5px;
    background-color: ${props => props.checked ? `#8FC549` : `#EBEBEB`};
    background-image: url(${check});
    background-size: 36px 28px;
    background-origin: border-box;
    background-position: center;
    background-repeat: no-repeat;

    ${props => {if (props.checked) {return `border: 1px solid #E7E7E7;`}}}
`;

export default Checkmark;