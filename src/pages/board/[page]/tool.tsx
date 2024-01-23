import { useRouter } from "next/router";
import { Btn } from "@/btn";

export default function Tool(props: {func:string}) {
    const router = useRouter();
    const func = props.func;

    const handleCreate = () => {
        router.push('/board/create');
    }

    const handleModify = () => {
        let curPage = router.query.id;
        router.push(`/board/post/${curPage}/modify`);
    }

    const handlePrev = () => {
        router.push(`/`);
    }

    return (
        <div className="flex justify-between items-center w-full h-[10vh]">
            <div />
            {
            <div className="flex">
                <Btn 
                    msg={func==='create' ? '작성' : '수정'} 
                    onClick={func==='create' ? handleCreate : handleModify } 
                />
                { func === 'create' ? <></> :
                    <Btn
                        msg={'목록으로'}
                        onClick={handlePrev}
                    />
                }
            </div>
            }
        </div>
    )
}