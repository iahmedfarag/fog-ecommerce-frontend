
import { styled } from 'styled-components'
import { RxHamburgerMenu } from "react-icons/rx"
import { PiUser } from "react-icons/pi"
import Logo from './Logo'
import SearchForm from './SearchForm'
import Features from './Features'
import { openSidebar, closeSidebar } from '../../redux/productsSlice'
import { useSelector, useDispatch } from 'react-redux'


export default function FirstNavbar() {
    const dispatch = useDispatch()

    return (
        <Wrapper>
            <div className="container">
                <button className='menuBtn flex' onClick={() => dispatch(openSidebar())}><RxHamburgerMenu /></button>
                <Logo />
                <SearchForm />
                <Features />
                <button className='profileBtn flex'><PiUser /></button>
            </div>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    background-color: var(--white);
    /* padding: 10px 0; */
    .container {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    //
    .logo {
        a {
            img {

            }
        }
    }
    //
    form {
        width: 50%;
        position: relative;
        @media (max-width: 1200px) {
            width: 45%;
        }
        @media (max-width: 1100px) {
            width: 40%;
        }
        @media (max-width: 1000px) {
            width: 35%;
        }
        input {
            width: 100%;
            padding: 15px;
            border-radius: 25px;
            border: 1px solid #ccc;
            outline: none;
        }
        button {
            background-color: var(--main-blue);
            color: var(--white);
            padding: 7px;
            font-size: 24px;
            display: flex;
            align-items: center;
            border-radius: 50%;

            //
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 5px;

        }
    }
    //
    .features {
        display: flex;
        align-items: center;
        gap: 40px;
        .feature {
            display: flex;
            align-items: center;
            gap: 15px;
            .icon {
                font-size: 30px;
            }
            .info {
                h5 {
                    font-size: 14px;
                    font-weight: 500;
                    margin-bottom: 5px;
                }
                p {
                    font-size: 14px;
                    color:var(--dark-blue)
                }
            }
        }
    }
    .menuBtn {
        display: none;
    }
    .profileBtn {
        display: none;
    }
}

@media (max-width: 992px) {
  .container {
    /* justify-content: center; */
    /* background-color: red; */
    height: 60px;
    .menuBtn {
        display: flex;
        font-size: 26px;
    }
    .profileBtn {
        display: flex;
        font-size: 26px;
    }
    .logo {

    }
    form {
        display: none;
    }
    .features {
        display: none;
    }
  }
}
`