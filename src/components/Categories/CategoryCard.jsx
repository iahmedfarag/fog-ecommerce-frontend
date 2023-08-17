import { styled } from "styled-components"

export default function CategoryCard({ category }) {
    return (
        <Wrapper>
            <a href="/">

                <div className="imgWrapper">
                    <img src={category.image} alt="category-image" />
                </div>
                <div className="content">
                    <h4>{category.title}</h4>
                    <p>{category.count} products</p>
                </div>

            </a>
        </Wrapper>
    )
}
const Wrapper = styled.article`
    a {
        &:hover img {
        transform: scale(1.09);
        }
        .imgWrapper {
            width: 100%;
            position: relative;
            overflow: hidden;
            border-radius: 10px;

            img {
                width: 100%;
                transition: all .5s ease;
                object-fit: cover;
                pointer-events: none;
            }
        }
        .content {
            text-align: center;

            h4{
                font-weight: 400;
                margin-top: 5px;
                margin-bottom: 2px;
            }
            p {
                font-size: 14px;
                color: grey;
            }
        }
}
    
`