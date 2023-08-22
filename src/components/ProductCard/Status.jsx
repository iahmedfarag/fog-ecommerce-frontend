import { styled } from "styled-components"

export default function Status({ product }) {
    return (
        <Wrapper className="status">
            {
                product.trendy ? <div className="box hot">Hot</div> : ""
            }
            {
                product.new ? <div className="box new">New</div> : ""
            }
            {
                product.discountPercentegeAmount ? <div className="box discount">-{product.discountPercentegeAmount}%</div> : ""
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