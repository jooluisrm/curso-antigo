"use client"

import { Posts } from "@/Types/Posts";
import { useEffect, useState } from "react";

export const Page = () => {

    const [posts, setPosts] = useState<Posts[]>([]);
    const [loading, setLoading] = useState(false);
    /*
    const handleLoadButton = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                setPosts(json);
            })
    }
    */

    useEffect(() => {
        handleLoadButton();
    }, []);

    const handleLoadButton = async () => {
        setLoading(true);
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        let json = await response.json();
        setLoading(false);
        setPosts(json);
    }
    return (
        <div className="bg-white text-black min-h-screen w-full">
            <button className="block bg-blue-400 p-2 rounded-md" onClick={handleLoadButton}>Carregar Posts</button>

            {loading &&
                <div>Carregando!!!</div>
            }

            {!loading &&
                <>
                    <div>Total de Posts: {posts.length}</div>
                    <div>
                        {posts.map((post, index) => (
                            <div className="bg-slate-500 my-3" key={index}>
                                <h1 className="text-4xl">{post.title}</h1>
                                <div>{post.body}</div>
                            </div>
                        ))}
                    </div>
                </>
            }
        </div>

    );
}
export default Page;