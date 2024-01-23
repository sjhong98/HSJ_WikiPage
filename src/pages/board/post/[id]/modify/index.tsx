import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { PostType, postStore } from "@/pages/atom";
import { ChangeEvent, useEffect, useState } from "react";
import { Btn } from "@/pages/components/btn"; 

export default function Modify() {
    const router = useRouter();
    const [id, setId] = useState<number>(0);
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [curIndex, setCurIndex] = useState<number>(0);
    const [posts, setPosts] = useRecoilState<PostType[]>(postStore);

    const handleTitleChange = (e:ChangeEvent<HTMLTextAreaElement>) => {setTitle(e.target.value)};
    const handleContentChange = (e:ChangeEvent<HTMLTextAreaElement>) => {setContent(e.target.value)};

    // 기존 게시물 정보 받아오기
    useEffect(() => {
        let curId = parseInt(router.query.id as string, 10);
        if(curId !== undefined) {
            let index = posts.findIndex((item) => item.id === curId);
            setCurIndex(index);
            setId(posts[index].id);
            setTitle(posts[index].title);
            setContent(posts[index].content);
        }
    }, [router.query, posts])

    // 해당 인덱스에 splice를 통해 값 업데이트
    const handleClick = () => {
        if(title === "") {
            alert("제목을 입력하세요.");
            return;
        } else if(content === "") {
            alert("내용을 입력하세요.");
            return;
        }

        let tempPost:PostType[] = [...posts];
        let curPost = {
            id: id,
            title: title,
            content: content
        }
        tempPost.splice(curIndex, 1, curPost);
        setPosts(tempPost);
        router.replace(`/board/post/${id}`);
    }

    return (
        <div className="content">
            <div className="flex items-center h-[20vh]">
                <textarea 
                    value={title} 
                    onChange={handleTitleChange} 
                    className="text-3xl w-full"
                />
            </div>
            <div className="flex items-center h-[40vh]">
                <textarea 
                    value={content} 
                    onChange={handleContentChange} 
                    className="text-lg w-full h-full"
                />
            </div>
            <Btn msg="업로드" onClick={handleClick} />
        </div>
    )
}