import styled from 'styled-components';

const Wrapper = styled.div`
    width: 80vw;
    margin: 0px auto;

    div:nth-child(1) {
        position: fixed;
        top: 70px;
        left: calc(50vw - 90px);
    }

    form {
        height: 145px;
        margin: 274px 0px 25px 0px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    div:nth-child(3) {
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