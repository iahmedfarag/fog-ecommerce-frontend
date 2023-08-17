import { styled } from "styled-components"

export default function SmallPoster({ poster }) {
    const { id, title, description, image } = poster
    return (
        <Wrapper >
            <div className="imgWrapper">
                <img src={image} alt="" />
            </div>
            <div className="content">
                <h3>{title}</h3>
                <p>{description}</p>
                <button className="main-btn">View Details</button>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.article`
    width: calc(50% - 10px);

    height: fit-content;
    position: relative;
    cursor: pointer;
    &:hover img {
            transform: scale(1.09);
    }
    .imgWrapper {
        position: relative;
        overflow: hidden;
        height: 180px;
        border-radius: 10px;
        width: 100%;
        img {
            border-radius: 10px;
            width: 100%;
            height: 180px;
            object-fit: cover;

            transition: all .5s ease;
        }
    }

    .content {
        position: absolute;
        left: 20px;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        flex-direction: column;
        gap: 10px;
        h3 {
            color: var(--white);
        }
        p {
            color: #e4e4e4;
            font-size: 14px;
        }
        button {
            background-color: var(--white);
            color: var(--black);
        }
    }

    @media(max-width: 1200px) {
        .content {

            h3 {
                /* font-size: 18px; */
            
            }
            p {

            }
            button {

            }
        }
    }

`