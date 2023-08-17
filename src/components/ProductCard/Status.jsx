import { styled } from "styled-components"

export default function Status({ pHot, pNew, pDiscount }) {
    return (
        <Wrapper className="status">
            {
                pHot ? <div className="box hot">Hot</div> : ""
            }
            {
                pNew ? <div className="box new">New</div> : ""
            }
            {
                pDiscount ? <div className="box discount">-10%</div> : ""
            }
        </Wrapper>
    )
}
const Wrapper = styled.div`
    position: absolute;
    top: 15px;
    left: 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    .box {
        padding: 5px 10px;
        font-size: 12px;
        border-radius: 25px;
        color: var(--white);
    
        &.hot {
            background-color: red;
        }
        &.new {
            background-color: green;
        }
        &.discount {
            background-color: var(--main-blue);
        }
    }

`