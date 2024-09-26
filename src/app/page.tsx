"use client"

import { Posts } from "@/Types/Posts";
import { useEffect, useState } from "react";

export const Page = () => {

    const [posts, setPosts] = useState<Posts[]>([]);
    const [loading, setLoading] = useState(false);

    const [addTitleText, setAddTitleText] = useState('')
    const [addBodyText, setAddBodyText] = useState('');

    useEffect(() => {
        handleLoadButton();
    }, []);

    const handleLoadButton = async () => {
        try {
            setLoading(true);
            let response = await fetch('https://jsonplaceholder.typicode.com/posts');
            let json = await response.json();
            setLoading(false);
            setPosts(json);
        } catch (error) {
            setLoading(false);
            setPosts([])
            alert('Erro, tente mais tarde');
        }

    }

    const handleAddPost = async () => {
        if (addTitleText && addBodyText) {
            let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: "POST",
                body: JSON.stringify({
                    userId: 1,
                    title: addTitleText,
                    body: addBodyText,
                }),
                headers: {
                    'Content-Type' : 'application/json'
                }
            });
            let json = await response.json();
            setPosts([json, ...posts]);
        } else {
            alert('Preencha os dados!')
        }
        
    }

    return (
        <div className="bg-white text-black min-h-screen w-full">
            <button className="block bg-blue-400 p-2 rounded-md" onClick={handleLoadButton}>Carregar Posts</button>

            {loading &&
                <div>Carregando!!!</div>
            }
            <fieldset className="border-2 mb-3 p-3">
                <legend>Adicionar Novo Post</legend>

                <input
                    className="border block"
                    type="text"
                    placeholder="Digite um Titulo"
                    value={addTitleText} onChange={(e) => setAddTitleText(e.target.value)}
                />
                <textarea
                    className="border block"
                    id=""
                    value={addBodyText}
                    onChange={(e) => setAddBodyText(e.target.value)}
                ></textarea>
                <button className="border block" onClick={handleAddPost}>Adicionar</button>

            </fieldset>
            {!loading && posts.length > 0 &&
                <>
                    <div>Total de Posts: {posts.length}</div>
                    <div>
                        {posts.map((post, index) => (
                            <div className="bg-slate-500 my-3" key={index}>
                                #{post.id} - usuario {post.userId}
                                <h1 className="text-4xl">{post.title}</h1>
                                <div>{post.body}</div>
                            </div>
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