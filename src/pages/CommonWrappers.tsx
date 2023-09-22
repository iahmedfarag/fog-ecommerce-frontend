import styled from "styled-components";

export const UserWrapper = styled.section`
    padding: 50px 0;
    .container {
        display: flex;
        justify-content: space-between;
        max-width: 1140px;
        position: relative;
        padding: 0 20px;
        flex-wrap: wrap;
        gap: 40px;
        .sep {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            height: 100%;
            width: 1px;
            background-color: var(--light-gray);  
        }

        form {
            width: calc(50% - 20px);
            display: flex;
            flex-direction: column;
            gap: 20px;
            h2 {
                font-weight: 500;
            }
            .row {
                display: flex;
                flex-direction: column;
                gap: 5px;
                label {
                    color: rgba(16, 16, 16, 0.9);
                    svg {
                        color: #ca1515;
                        font-size: 12px;
                    }
                }
                input {
                    padding: 10px;
                    border: 1px solid #cac9c9;
                    outline: none;
                    font-size: 14px;
                }
            }
            button {
                background-color: var(--main-blue);
                color: var(--white);
                padding: 10px;
                &:hover {
                    opacity: 0.7;
                }
            }
        }

        .info {
            width: calc(50% - 20px);
            display: flex;
            flex-direction: column;
            gap: 20px;
            text-align: center;
            
            h2 {
                text-transform: uppercase;
            }
            p {
                color: var(--light-gray);
                font-size: 15px;
                font-weight: 400;
                line-height: 1.7;

            }
            a {
                width: fit-content;
                margin: 0 auto;
                padding: 10px 20px;
                color: var(--main-blue);
                background-color: var(--light-blue);
                font-size: 15px;
                &:hover {
                    opacity: 0.8;
                }
            }
        }   
    }

    @media(max-width: 768px) {
        .container {
            form {
                width: 100%;
            }
            .info {
                width: 100%;
            }
            .sep {
                display: none;
            }
        }
    }

`