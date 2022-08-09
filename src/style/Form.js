import styled from 'styled-components';

const Wrapper = styled.div`
    width: 80vw;
    margin: 0px auto;

    & > div:nth-child(1) {
        width: 180px;
        height: 162px;
        margin: 70px auto 0px auto;
    }

    form {
        height: 145px;
        margin: 42px 0px 25px 0px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    & > div:nth-child(3) {
        font-weight: 400;
        font-size: 14px;
        text-align: center;
        color: #52B6FF;
        text-decoration-line: underline;
    }

    a:visited {
        color: inherit;
    }
`;

export default Wrapper;