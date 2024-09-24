"use client"

import { Posts } from "@/Types/Posts";
import { useState } from "react";

export const Page = () => {

    const [posts, setPosts] = useState<Posts[]>([]);

    const handleLoadButton = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                setPosts(json);
            })
    }
    return (
        <div className="bg-white text-black h-full w-full">
            <button className="block bg-blue-400 p-2 rounded-md" onClick={handleLoadButton}>Carregar Posts</button>
            Total de Posts: {posts.length}
            <div>
                {posts.map((post, index) => (
                    <div className="bg-slate-500 my-3" key={index}>
                        <h1 className="text-4xl">{post.title}</h1>
                        <div>{post.body}</div>
                    </div>
                ))}
            </div>
        </div>

    );
}
export default Page;