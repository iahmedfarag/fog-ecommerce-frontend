import { useState } from 'react'
import Categories from './Categories'
import { SlArrowRight } from "react-icons/sl"
import { styled } from 'styled-components'
import { useAppSelector } from "../../redux/hooks"
import { mainCategoryType } from '../../Types'
import { Link } from 'react-router-dom'


type MainCategoryPropsTypes = {
    mainCategory: mainCategoryType,
}

export default function MainCategory({ mainCategory }: MainCategoryPropsTypes) {
    const { categories, subCategories } = useAppSelector((state) => state.products)
    const [mainCategoryHovered, setMainCategoryHovered] = useState(false)

    const filteredCategories = categories.filter((cat) => cat.mainCategory._id == mainCategory._id)


    return (
        <Wrapper className="mainCategory">
            <Link to={`/${mainCategory.slug}`} className="content" onMouseOver={() => setMainCategoryHovered(true)} onMouseLeave={() => setMainCategoryHovered(false)}>
                <div className="icon"><img src={mainCategory.icon.secure_url} alt="" /></div>
                <p className="text">{mainCategory.name}</p>
                <div className="more flex"><SlArrowRight /></div>
            </Link>
            <Categories mainCategorySlug={mainCategory.slug} filteredCategories={filteredCategories} subCategories={subCategories} mainCategoryHovered={mainCategoryHovered} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
            display: flex;
            align-items: center;
            .content {
                position: relative;
                width: 100%;
                display: flex;
                align-items: center;
                /* gap: 10px; // gap between content - icon */
                padding: 12px 0;
                
                .icon {
                    display: flex;
                    width: 40px;
                    margin-left: 20px;
                    img {
                        width: 20px;
                    }
                }
                .text {
                    text-transform: capitalize;
                    white-space: nowrap; //
                    opacity: 0;
                    transition: 0.3s; // transition
                    font-size: 15px;
                }
                .more {
                    position: absolute;
                    right: 10px;
                    top: 50%;
                    transform: translateY(-50%);
                    font-size: 10px;
                    opacity: 0;
                    transition: 0.2s;
                }

            
            }
`