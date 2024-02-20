import styled from "styled-components";
import Links from "./Links.tsx";
import { AiFillHeart, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import Logo from "../components/Navbar/Logo.tsx";

const Footer = () => {
    return (
        <Wrapper>
            <div className="container">
                <div className="wrapper">
                    <article>
                        <Logo />
                        <br />
                        <p>Asorem ipsum adipolor sdit amet, consectetur adipisicing elitcf sed do eiusmod tem.</p>
                    </article>

                    <article>
                        <h3>Quick Links</h3>
                        <br />
                        <Links />
                    </article>

                    <article>
                        <h3>New Products</h3>
                        <br />
                        <ul>
                            <li>
                                <a href="#">Woman Cloth</a>
                            </li>
                            <li>
                                <a href="#">Fashion Accessories</a>
                            </li>
                            <li>
                                <a href="#">Man Accessories</a>
                            </li>
                            <li>
                                <a href="#">Rubber made Toys</a>
                            </li>
                        </ul>
                    </article>

                    <article>
                        <h3>Support</h3>
                        <br />
                        <ul>
                            <li>
                                <a href="#">Frequently Asked Questions</a>
                            </li>
                            <li>
                                <a href="#">Terms & Conditions</a>
                            </li>
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#">Report a Payment Issue</a>
                            </li>
                        </ul>
                    </article>
                </div>
                <div className="line">
                    <p>
                        Copyright ©2024 All rights reserved | This template is made with <AiFillHeart /> by <span>@iahmedfarag</span>
                    </p>
                    <ul>
                        <li>
                            <a
                                href="https://www.facebook.com/iahmedfarag/"
                                target="_blank">
                                <BsFacebook />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/ahmed-farag-16433b260/"
                                target="_blank">
                                <AiFillLinkedin />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/iahmedfarag"
                                target="_blank">
                                <AiFillGithub />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </Wrapper>
    );
};
const Wrapper = styled.footer`
    padding: 100px 0;
    .container {
        .wrapper {
            display: flex;
            flex-wrap: wrap;
            gap: 30px;
            article {
                display: flex;
                flex-direction: column;
                width: calc(100% / 4 - 90px / 4);
                text-align: left;
                p {
                    line-height: 1.5;
                }
                ul {
                    margin: 0;
                    padding: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    li {
                        a {
                            text-transform: capitalize;
                            transition: var(--main-trans);
                            &:hover {
                                color: var(--main-color);
                            }
                        }
                    }
                }
            }
        }
        .line {
            margin-top: 100px;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 20px;
            p {
                line-height: 1.5;
                svg {
                    color: red;
                }
            }
            span {
                color: var(--main-color);
            }
            ul {
                display: flex;
                gap: 15px;
                margin: 0;
                padding: 0;
                li {
                    a {
                        font-size: 18px;
                        &:hover {
                            color: var(--main-color);
                        }
                    }
                }
            }
        }
    }
    @media (max-width: 992px) {
        .container {
            .wrapper {
                article {
                    width: calc(100% / 3 - 60px / 3);
                }
            }
        }
    }
    @media (max-width: 768px) {
        padding: 50px 0;

        .container {
            .wrapper {
                article {
                    width: calc(100% / 2 - 30px / 2);
                }
            }
            .line {
                margin-top: 50px;
            }
        }
    }
    @media (max-width: 576px) {
        margin: 0 20px;
        .container {
            .wrapper {
                article {
                    width: calc(100%);
                }
            }
        }
    }
`;
export default Footer;
