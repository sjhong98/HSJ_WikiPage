import { useRouter } from "next/router";
import { useEffect, useState } from "react"

interface Props {
    curPage: number
    length: number
}

export default function Paging(props:Props) {
    const router = useRouter();
    const curPage = props.curPage;
    const pageLength = Math.floor(props.length / 5);
    const [noNext, setNoNext] = useState<boolean>(false);
    const [noPrev, setNoPrev] = useState<boolean>(false);
    const [curPageIndex, setCurPageIndex] = useState<number>(0);
    const [curPageSet, setCurPageSet] = useState<Array<number>>([]);

    const chipStyle = "center w-[3vw] h-[3vw] rounded-full border mr-3 hover";
    const curChipStyle = "center w-[3vw] h-[3vw] rounded-full border-2 bg-gray-200 mr-3";

    useEffect(() => {
        setCurPageIndex(Math.floor((curPage-1) / 5));
    }, [curPage]) 

    useEffect(() => {
        // 현재 페이지가 포함된 페이지 버튼셋 생성
        let tempPageSet = [];
        setNoNext(false);
        setNoPrev(false);
        for(let i=1; i<6; i++) {
            if(curPageIndex*5+i-2 < pageLength)
                tempPageSet.push(curPageIndex*5+i);
        }
        // 버튼셋 전후 이동 불가 시 prev, next 버튼 제거
        if(tempPageSet[tempPageSet.length-1] === pageLength+1 || props.length === -1)
            setNoNext(true);
        if(tempPageSet[0] === 1 || props.length === -1)
            setNoPrev(true);
        setCurPageSet(tempPageSet);
    }, [pageLength, curPageIndex])

    const handleClick = (index:number) => {
        router.push(`/board/${index}`);
    }

    const handlePrev = () => {
        setCurPageIndex(prev => prev-1);
    }

    const handleNext = () => {
        setCurPageIndex(prev => prev+1);
    }

    return (
        <div className="flex justify-center w-full h-[5vh] px-44 mt-12">
            { noPrev ? <></> :
                <div className={chipStyle} onClick={handlePrev}>
                    <p>&lt;</p>
                </div>
            }
            { curPageSet.map((pageNum:number, index:number) => {
                return (
                    <div 
                        key={index}
                        className={curPage === pageNum ? curChipStyle : chipStyle}
                        onClick={()=>handleClick(pageNum)}
                    >
                        <p>{pageNum}</p>
                    </div>
                )
            })}
            { noNext ? <></> :
                <div className={chipStyle} onClick={handleNext}>
                    <p>&gt;</p>
                </div>
            }
        </div>
    )
}