

type LoadingErrorHandlerPropsTypes = {
    isLoading: boolean,
    error: boolean,
    children: React.ReactNode
}

export default function LoadingErrorHandler({ isLoading, error, children }: LoadingErrorHandlerPropsTypes) {
    if (isLoading) {
        return <h1>loading...</h1>
    }

    if (error) {
        return <h1>something went wrong</h1>
    }

    return children
}
