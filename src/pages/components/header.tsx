import { useRouter } from "next/router"
import Image from "next/image"
import Logo from '../../../public/images/logo.png'


export default function Header() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  }

  return (
    <div className="flex items-center w-screen h-[8vh] bg-white px-4 border-b-2 border-slate-100">
      <Image src={Logo} alt="..." className="h-[60%] w-auto cursor-pointer" onClick={handleClick} />
    </div>
  )
  }