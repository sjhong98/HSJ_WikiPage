import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { PostType, postStore } from "@/pages/atom";
import { useEffect, useState } from "react";
import Tool from "@/pages/board/[page]/tool";

export default function Home() {
    const router = useRouter();
    const [content, setContent] = useState<string>("");
    const [curPost, setCurPost] = useState<PostType>({id:0, title:"", content:""});
    const posts = useRecoilValue(postStore);

    useEffect(() => {
        if(router.query.id !== undefined)
            setCurPost(posts[parseInt(router.query.id as string, 10)]);
    }, [router.query])

    // title 키워드 -> 링크 치환
    useEffect(() => {
        let newContent = posts.reduce((acc, post, index) => {
            let link = `/board/post/${post.id}`
            if(post.title === curPost.title)
                return acc
            return acc.replaceAll(
                post.title,
                `<a key=${index} class="my-element nnb" href=${link}>${post.title}</a>`
            );
        }, curPost.content);
        newContent = newContent.replaceAll(/\n/g, `<br/>`)
        setContent(newContent);
    }, [curPost]);


    return (
        <div className="content">
            <Tool func="modify" />
            <p className="text-3xl nnb">{curPost.title}</p>
            <div className="text-black nnn text-xl mt-20" dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    )
}