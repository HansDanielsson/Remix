import "dotenv/config";

export function processApiUrlKey(): string {
    return process.env.REACT_APP_URL_API_KEY!;
}

export function processApiXKey(): string {
    return (
        process.env.REACT_APP_X_API_KEY!
    )
}