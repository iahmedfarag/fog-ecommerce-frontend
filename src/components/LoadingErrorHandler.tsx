import { styled } from "styled-components"


type LoadingErrorHandlerPropsTypes = {
    isLoading: boolean,
    error: boolean,
    children: React.ReactNode,
    loadingHeight?: string
}

export default function LoadingErrorHandler({ isLoading, error, children, loadingHeight }: LoadingErrorHandlerPropsTypes) {
    if (isLoading) {
        return <Wrapper className="container" style={{ minHeight: `${loadingHeight ? loadingHeight : 'auto'}` }}>
            <div className="loading"></div>
        </Wrapper>
    }

    if (error) {
        return <h1>something went wrong</h1>
    }

    return children
}

const Wrapper = styled.div`
    position: relative;
    .loading{
        width: 48px;
        height: 48px;
        border: 5px solid #FFF;
        border-bottom-color: #FF3D00;
        border-radius: 50%;
        display: inline-block;
        box-sizing: border-box;
        animation: rotation 1s linear infinite;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    } 
    }
`