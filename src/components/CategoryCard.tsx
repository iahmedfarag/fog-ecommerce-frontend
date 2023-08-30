import { styled } from "styled-components"
import { subCategoryType } from "../Types"
import { Link } from "react-router-dom"




export default function CategoryCard({ subCategory }: { subCategory: subCategoryType }) {
    return (
        <Wrapper>
            <div>
                <Link to={`/${subCategory.mainCategory.slug}/${subCategory.category.slug}/${subCategory.slug}`} draggable="false">
                    <div className="imgWrapper">
                        <img draggable="false" src={subCategory.image.secure_url} alt="category-image" />
                    </div>
                    <div className="content">
                        <h4>{subCategory.name}</h4>
                        <p>{subCategory.productsCount} products</p>
                    </div>
                </Link>
            </div>
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
            margin-bottom: 10px;
            img {
                width: 100%;
                transition: all .5s ease;
                object-fit: cover;
                pointer-events: none;
                user-select: none;
                
            }
        }
        .content {
            text-align: center;

            h4{
                font-weight: 400;
                margin-top: 5px;
                margin-bottom: 2px;
                text-transform: capitalize;
            }
            p {
                font-size: 14px;
                color: grey;
            }
        }
}
    
`