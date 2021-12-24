import type { NextPage } from 'next'
import { AiOutlineWeibo, AiFillWechat, AiOutlineMail } from 'react-icons/ai'

const Footer: NextPage = () => {
  return (<footer className="flex flex-row items-center w-full min-h-30 p-4 bg-gray-100 md:fixed md:bottom-0">
      <span className="mr-auto font-thin text-sm">© KW Photography</span>
      <span className="flex flex-row text-2xl">
        <AiOutlineWeibo className="mr-2" />
        <AiFillWechat className="mr-2" />
        <AiOutlineMail />
      </span>
    </footer>
  )
}

export default Footer
