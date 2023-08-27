import { useState } from 'react'
import { styled } from 'styled-components'
import { categoryType, subCategoryType } from '../../Types'

type CategoriesPropsTypes = {
    subCategories: subCategoryType[],
    mainCategoryHovered: boolean,
    filteredCategories: categoryType[],
    mainCategorySlug: string
}

export default function Categories({ subCategories, mainCategoryHovered, filteredCategories, mainCategorySlug }: CategoriesPropsTypes) {
    const [categoryHovered, setCategoryHovered] = useState(false)


    return (
        <Wrapper className={`categories ${mainCategoryHovered || categoryHovered ? 'open' : ""}`}
            onMouseOver={() => setCategoryHovered(true)} onMouseLeave={() => setCategoryHovered(false)}>

            {
                filteredCategories.map(cat => {
                    return <div key={cat._id} className="category">
                        <a key={cat._id} href={`${mainCategorySlug}/${cat.slug}`} className="title">{cat.name}</a>
                        <div className="subCategories">
                            {
                                subCategories.map(subCat => {
                                    if (subCat.category._id === cat._id) return <a key={subCat._id} href={`/${cat.slug}/${subCat.slug}`} className="subCategory">{subCat.name}</a>
                                })
                            }
                        </div>
                    </div>
                })
            }

        </Wrapper >
    )
}


const Wrapper = styled.div`
                position: fixed;
                top: 0;
                width: 270px;
                height: 100%;
                background-color: var(--white);
                z-index: 55;
                padding: 20px;
                // transition
                left: 290px;
                opacity: 0;
                transition: 0.3s;
                visibility: hidden;
                display: flex;
                flex-direction: column;
                gap: 15px;
                &.open {
                    left: 300px;
                    opacity: 1;
                    visibility:visible;
                    @media(max-width: 992px) {
                    opacity: 0;
                    visibility: hidden;
                        
                    }
                }


                .category {
                    display: flex;
                    flex-direction: column;
                    /* gap: 15px; */
                    &:not(:last-child) {
                        padding-bottom: 15px;
                        border-bottom: 1px solid #999;
                    }
                    .title {
                        font-weight: 500;
                        text-transform: uppercase;
                        font-size: 15px;
                        padding: 5px 0;
                        margin-bottom: 2.5px;
                        &:hover {
                                color: var(--main-blue);
                            }
                    }

                    .subCategories {
                        display: flex;
                        flex-direction: column;
                        
                        .subCategory {
                            color: gray;
                        text-transform: capitalize;
                            font-size: 15px;
                            padding: 7.5px 0;
                            &:hover {
                                color: var(--main-blue);
                            }
                        }
                    }
                }

`