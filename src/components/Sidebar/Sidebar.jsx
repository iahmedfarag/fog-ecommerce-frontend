import { styled } from "styled-components"
import { RxHamburgerMenu } from "react-icons/rx"

export default function Sidebar() {
    return (
        <Wrapper>
            <header>
                <div className="icon flex"><RxHamburgerMenu /></div>
                <p>All Categories</p>
            </header>
            <div className="categories">
                <div className="category">
                    <div className="icon"><RxHamburgerMenu /></div>
                    <div className="title">Laptop, Tablets & Pcs</div>
                    <div className="subCategories">
                        <div className="name">LAPTOPS</div>
                        <div className="brands">
                            <a href="/">Apple</a>
                            <a href="/">Samsung</a>
                        </div>
                    </div>
                </div>
                <div className="category">
                    <div className="icon"><RxHamburgerMenu /></div>
                    <div className="title">Computers & Offices</div>
                    <div className="subCategories">
                        <div className="name">LAPTOPS</div>
                        <div className="brands">
                            <a href="/">HP Asus</a>
                            <a href="/">Dell Huwawy</a>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}


const Wrapper = styled.aside`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 3;
    height: 100%;
    padding: 15px;
    background-color: var(--white);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    
    width: 70px;
    transition: 0.2s all ease-in-out;

    p {
        opacity: 0;
        transition: 0.3s all ease-in-out;
    }

    &:hover {
        width: 250px;
        p {
            opacity: 1;
        }
        .categories .category .title {
            opacity: 1;
        }
    }

    header {
        display: flex;
        align-items: center;
        gap: 10px;
        background-color: var(--main-blue);
        color: var(--white);
        padding: 10px;
        border-radius: 25px;

        margin-bottom: 20px;

        height: 40px;

        .icon {
            font-size: 20px;
        }
        p {
            font-weight: 300;
        }
    }

    .categories {
        display: flex;
        flex-direction: column;
        gap: 15px;
        .category {
            display: flex;
            align-items: center;
            gap: 10px;
            height: 30px;
            padding: 5px 0;
            overflow: hidden;
            /* background-color: red; */
            cursor: pointer;
            &:hover  .subCategories {
                    left: 250px;
                    z-index: 2;
                    display: block;
                }
            .icon {
                display: flex;
                align-items: center;
                font-size: 20px;
                margin-left: 10px;
            }
            .title {
                opacity: 0;
                transition: 0.5s all ease-in-out;
                font-size: 14px;
                font-weight: 400;

            }

            .subCategories {
                position: fixed;
                top: 0px;
                left: 70px;
                width: 200px;
                height: 100%;
                background-color: var(--white);
                padding: 15px;
                z-index: -1;
                transition: 0.3s;
                display: none;
                .name {
                    font-weight: 400;
                    /* font-size: 14px; */
                    margin-bottom: 15px;
                }
                .brands {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    a {
                        color: grey;
                        font-size: 16px;
                    }
                }
            }
        }
    }

`