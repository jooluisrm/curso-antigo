"use client"

import { Api } from "@/api";
import { PostForm } from "@/components/postForm";
import { PostItem } from "@/components/postItem";
import { PageReducer } from "@/Reducers Aula/pageReducer";
import { Posts } from "@/Types/Posts";
import { RealReducer } from "@/Uso real Reducer/realReducer";
import { useEffect, useState } from "react";

export const Page = () => {

    const [posts, setPosts] = useState<Posts[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        handleLoadButton();
    }, []);

    const handleLoadButton = async () => {
        try {
            setLoading(true);
            let json = await Api.getAllPosts();
            setLoading(false);
            setPosts(json);

        } catch (error) {
            setLoading(false);
            setPosts([])
            alert('Erro, tente mais tarde');
        }

    }

    const handleAddPost = async (title: string, body: string) => {
        let json = await Api.addNewPost(title, body, 1);
        if (json.id) {
            alert('Post add')
            setPosts([json, ...posts]);
        }

    }

    return (
        <div className="bg-white text-black min-h-screen w-full">
            <RealReducer />
            <PageReducer />

            <button className="block bg-blue-400 p-2 rounded-md" onClick={handleLoadButton}>Carregar Posts</button>

            {loading &&
                <div>Carregando!!!</div>
            }
            <PostForm onAdd={handleAddPost} />
            {!loading && posts.length > 0 &&
                <>
                    <div>Total de Posts: {posts.length}</div>
                    <div>
                        {posts.map((post, index) => (
                            <PostItem data={post} key={index} />
                        ))}
                    </div>
                </>
            }
            {!loading && posts.length === 0 &&
                <div>tente novamente mais tarde</div>
            }


        </div>

    );
}
export default Page;