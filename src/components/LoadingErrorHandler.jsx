
export default function LoadingErrorHandler({ isLoading, error, children }) {
    if (isLoading) {
        return <h1>loading...</h1>
    }

    if (error) {
        return <h1>error: {error}</h1>
    }

    return children
}
