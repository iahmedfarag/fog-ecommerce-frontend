import styled from "styled-components"
import MyAccountsSideBar from "../components/MyAccount/MyAccountsSideBar"
import Dashboard from "../components/MyAccount/Dashboard"


export default function MyAccountPage() {
    return (
        <Wrapper>
            <div className="container">
                <MyAccountsSideBar />
                <Dashboard />
            </div>
        </Wrapper>
    )
}


const Wrapper = styled.section`
    padding: 50px 0;
    .container {
        display: flex;
        gap: 40px;
    }
`