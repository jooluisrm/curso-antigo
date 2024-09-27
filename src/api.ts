const BASE = 'https://jsonplaceholder.typicode.com';

export const Api = {
    getAllPosts: async () => {
        let response = await fetch(`${BASE}/posts`);
        let json = await response.json();
        return json;
    },
    addNewPost: async (title: string, body: string, userId: number) => {
        let response = await fetch(`${BASE}/posts`, {
            method: "POST",
            body: JSON.stringify({
                userId,
                title,
                body
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        let json = await response.json();
        return json;
    }
}