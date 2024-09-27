import { Posts } from "@/Types/Posts";

type Props = {
    data: Posts;
}

export const PostItem = ({ data }: Props) => {
    return (
        <div className="bg-slate-500 my-3">
            #{data.id} - usuario {data.userId}
            <h1 className="text-4xl">{data.title}</h1>
            <div>{data.body}</div>
        </div>
    );
}