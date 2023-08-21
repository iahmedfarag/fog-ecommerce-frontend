import { styled } from "styled-components"
import { RxHamburgerMenu } from "react-icons/rx"
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { closeSidebar, openSidebar } from "../../redux/productsSlice"
import MainCategory from "./MainCategory"

export default function Sidebar() {
    const { isLoading, error, mainCategories, categories, subCategories, sidebar } = useSelector((state) => state.products)
    const dispatch = useDispatch()
    const [sideBarHoverd, setSideBarHoverd] = useState(false)


    const handleMouseOver = () => {
        setSideBarHoverd(true)
    }
    const handleMouseLeave = () => {
        setSideBarHoverd(false)
    }

    document.addEventListener("click", (e) => {
        const str = e.target.parentNode.className
        if (str.includes("menuBtn")) {
            dispatch(openSidebar())
        } else {
            dispatch(closeSidebar())
        }
    })



    if (isLoading) {
        return <h1>loading....</h1>
    }
    if (error) {
        return <h1>error...</h1>
    }
    return (
        <Wrapper className={`aside ${sideBarHoverd ? 'open' : ""} ${sidebar ? 'openResponive' : ''}`} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
            <header>
                <div className="icon flex"><RxHamburgerMenu /></div>
                <p className="text">All Categories</p>
            </header>
            <div className="mainCategories">
                {
                    mainCategories.map(mainCat => {
                        return <MainCategory key={mainCat._id} mainCategory={mainCat} categories={categories} subCategories={subCategories} />
                    })
                }
            </div>
        </Wrapper>
    )
}
const Wrapper = styled.aside`
    position: fixed;
    left: 0px;
    top: 0;
    z-index: 3;
    height: 100%;
    background-color: var(--white);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    width: 60px;
    transition: 0.3s all ease-in-out;
    overflow: hidden;


    transition: 0.3s;


    &.open {
        width: 300px;
        header {
            .icon {
            }
            .text {
                opacity: 1;
            }
        }
        .mainCategories {
            .mainCategory {
                .content {
                    .text {
                        opacity: 1;
                    }
                    .more {
                        opacity: 1;
                    }
                }
            }
        }
    }


    header {
        display: flex;
        align-items: center;
        /* gap: 10px; // gap between content - icon */

        background-color: var(--main-blue);
        color: var(--white);

        padding: 10px 0;
        border-radius: 25px;
        margin: 10px;
        .icon {
            display: flex;
            align-items: center;
            width: 40px;
            font-size: 22px;
            /* background-color: red; */
            margin-left: 9px; // center the svg
        }
        .text {
            white-space: nowrap; // 
            opacity: 0;
            transition: 0.3s; // transition
        }
        /* margin-bottom: 25px; // margin between header and main-cateogries */
    }

    .mainCategories {
        display: flex;
        flex-direction: column;
        /* gap: 25px; // gap between main-categories */
        & .content:hover {
            color: var(--main-blue);
        }
       
    }

    @media(max-width: 992px) {
        left: -60px;
        &.openResponive {
            left: 0;
            width: 300px;
            header {
            .icon {
            }
            .text {
                opacity: 1;
            }
        }
            .mainCategories {
            .mainCategory {
                .content {
                    .text {
                        opacity: 1;
                    }
                    .more {
                        
                    }
                }
            }
        }
        }
    }


`