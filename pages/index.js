import { useRouter } from "next/router"


export default function Home() {
  const router = useRouter()
  const clickHandler = () => {
    router.push('/questions')
  }
  return (
    <div className="flex font-laleh w-[100%] h-[800px]">
      <div onClick={clickHandler} className='inline p-5 px-[50px] bg-violet-500 text-center mx-auto my-auto rounded-full text-white cursor-pointer hover:border hover:border-violet-500 hover:text-violet-500 hover:bg-white transition ease-in-out duration-300'>
        شروع پرسش
      </div>
    </div>
  )
}
