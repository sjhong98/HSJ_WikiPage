import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil"
import { PostType, postStore } from "../../../atom";
import Tool from "./tool";
import Paging from "./paging";

export default function Board() {
  const router = useRouter();
  const posts = useRecoilValue(postStore);
  const [msg, setMsg] = useState("");
  const [curPagePosts, setCurPagePosts] = useState<PostType[]>();
  const [curPage, setCurPage] = useState<number>(1);

  useEffect(() => {
    if(router.query.page !== undefined)
      setCurPage(parseInt(router.query.page as string, 10));
  }, [router.query])

  useEffect(() => {
    if(posts.length === 0)
      setMsg("게시물이 없습니다");
    else {
      // 현재 페이지에 보일 게시물 리스트 생성
      const startIdx = (curPage - 1) * 5;
      const endIdx = startIdx + 5;
      const slicedPosts = posts.slice(startIdx, endIdx);
      setCurPagePosts(slicedPosts);
    }
  }, [curPage, posts])

  // 특정 게시물 클릭 시, 개별 게시물 페이지로 이동
  const handleClick = (item:PostType) => {
      router.push(`/board/post/${item.id}`);
  }

  return (
    <div className="content">
        <Tool func="create" />
        <div className="h-[40vh]">
        <p className="center">{msg}</p>
        { curPagePosts!==undefined && curPagePosts.map((item:PostType, index:number) => {
            if(item !== undefined)
            return (
              <div 
                  key={index} 
                  className="flex items-center h-[5vh] px-8 mb-6 border rounded-xl hover" 
                  onClick={()=>handleClick(item)}
              >
                  <p className="text-xl nnn">{item?.title}</p>
              </div>
            )
        })}
        </div>
        <Paging 
          curPage={curPage}
          length={posts.length-1} 
        />
    </div>
  )
}