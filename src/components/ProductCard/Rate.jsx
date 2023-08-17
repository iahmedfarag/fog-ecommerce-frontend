
import { AiFillStar } from "react-icons/ai"
import { styled } from "styled-components"
export default function Rate() {
    return (
        <Wrapper>
            <div><AiFillStar /></div>
            <div><AiFillStar /></div>
            <div><AiFillStar /></div>
            <div><AiFillStar /></div>
            <div><AiFillStar /></div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    gap: 1px;
    color: #d2b300;
`