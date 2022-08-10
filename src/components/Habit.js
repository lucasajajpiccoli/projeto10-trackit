import styled from 'styled-components';

import Input from '../style/Input';


export default function Habit() {
    return (
        <Wrapper>
            <Input
                name="nome"
                placeholder="nome do hábito"
                type="text"
                required
            />

        </Wrapper>
    );
}

const Wrapper = styled.div`

`;