import { styled } from "styled-components"
import { GrCompare } from "react-icons/gr"
import { BiSearch } from "react-icons/bi"
import { AiOutlineHeart, AiOutlineCheck } from "react-icons/ai"

export default function Bar() {
    return (
        <Wrapper className="bar">
            <div className="box">
                <div className="icon">
                    <GrCompare />
                </div>
                <p>Compare</p>
            </div>
            <div className="box">
                <div className="icon">
                    <BiSearch />
                </div>
                <p>Quick View</p>
            </div>
            <div className="box">
                <div className="icon">
                    <AiOutlineHeart />
                </div>
                <p>Add to whishlist</p>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: absolute;
    top: 15px;
    right: -60px;
    transition: all .2s ease;

    z-index: 2;
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;   
        
    display: flex;
    flex-direction: column;
    gap: 15px;
    border-radius: 5px;

    background-color: var(--white);
        .box {
            position: relative;
            .icon {
                font-size: 22px;
                cursor: pointer;
                display: flex;
                align-items: center;

                &:hover ~ p {
                    display: block;
                }
            }
            p {
                position: absolute;
                font-size: 12px;
                top: 50%;
                transform: translateY(-50%);
                right: calc(100% + 20px);
                display: block;
                background-color: var(--black);
                color: var(--white);
                padding: 5px 8px;
                border-radius: 5px;
                display: none;
            }
        }

`