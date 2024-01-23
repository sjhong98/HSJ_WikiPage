type Props = {
    msg: string
    onClick: () => void
}

export default function Btn(props: Props) {

    return (
        <div 
            className="center items-center w-[5vw] h-[5vh] border rounded-lg hover nnn ml-3"
            onClick={() => props.onClick()}
        >
            <p className="text-gray-500" >
                {props.msg}
            </p>
        </div>
    )
}

