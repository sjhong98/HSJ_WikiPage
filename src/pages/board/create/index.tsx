import { useRouter } from "next/router"; 
import { useRecoilState } from "recoil";
import { ChangeEvent, useState } from "react";
import { PostType, postStore } from "../../atom";
import { Btn } from "../../components/btn";

export default function Create() {
    const router = useRouter();
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [posts, setPosts] = useRecoilState<PostType[]>(postStore);

    const handleTitleChange = (e:ChangeEvent<HTMLTextAreaElement>) => {setTitle(e.target.value)};
    const handleContentChange = (e:ChangeEvent<HTMLTextAreaElement>) => {setContent(e.target.value)};

    const handleClick = () => {
        // 빈 값 입력시 alert
        if(title === "") {
            alert("제목을 입력하세요.");
            return;
        } else if(content === "") {
            alert("내용을 입력하세요.");
            return;
        }

        let tempPost:PostType[] = [...posts];
        const id = posts.length === 0 ? 0 : posts[posts.length-1].id+1;

        tempPost.push({
            id: id,
            title: title,
            content: content
        });
        setPosts(tempPost);
        router.push(`/board/post/${id}`);
    }

    return (
        <div className="content">
            <div className="flex items-center h-[20vh]">
                <textarea 
                    value={title} 
                    placeholder="제목" 
                    onChange={handleTitleChange} 
                    className="text-3xl w-full"
                />
            </div>
            <div className="flex items-center h-[40vh]">
                <textarea 
                    value={content} 
                    placeholder="내용을 입력하세요" 
                    onChange={handleContentChange} 
                    className="text-lg w-full h-full"
                />
            </div>
            <Btn msg="업로드" onClick={handleClick} />
        </div>
    )
}