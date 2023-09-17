
import { styled } from 'styled-components'
import { RxHamburgerMenu } from "react-icons/rx"
import { PiUser } from "react-icons/pi"
import Logo from './Logo'
import SearchForm from './SearchForm'
import Features from './Features'
import { useAppDispatch } from '../../redux/hooks'
import { openSidebar } from '../../redux/generalSlice'

export default function FirstNavbar() {
    const dispatch = useAppDispatch()

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

    //
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