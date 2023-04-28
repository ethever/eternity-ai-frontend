import Link from 'next/link'
import { ConnectButton } from '@rainbow-me/rainbowkit'

export default function TopNavBar() {
return (
<nav className="relative w-[1600px] h-[85.33px] left-[160px] top-0 flex flex-row justify-center items-center" >
  <div className="absolute w-[138px] h-[34px] left-[0px] top-[25.67px] flex justify-center items-center">
    <img src="/images/logo.png" ></img>
  </div>
  <div className=" absolute left-[265px] top-[33.17px] w-[437.33px] h-[19px] space-x-[55.33px] flex justify-start items-center" >
    <ul className="flex justify-start ">
      <li className="mx-10 flex-shrink-0">
        <Link href="/">
          <a className="text-white font-medium hover:text-gray-20">Home</a>
        </Link>
      </li>
      <li className="mx-10 flex-shrink-0">
        <Link href="/Advantage">
          <a className="text-white font-medium hover:text-gray-200">Advantage</a>
        </Link>
      </li>
      <li className="mx-10 flex-shrink-0">
        <Link href="/RoadMap">
          <a className="text-white font-medium hover:text-gray-200">RoadMap</a>
        </Link>
      </li>
      <li className="mx-10 flex-shrink-0">
        <Link href="/Parter">
          <a className="text-white font-medium hover:text-gray-200">Parter</a>
        </Link>
      </li>
      <li className="mx-10 flex-shrink-0 ">
        <Link href="/Community">
          <a className="text-white font-medium hover:text-gray-200">Community</a>
        </Link>
      </li>
    </ul>
  </div>
  <div className=" absolute left-[1349.33px] top-[22.5px] w-[250.67px] h-[40.33px] flex justify-start item-center">
    <li className="absolute left-[0px] top-[9.5px] w-[90.67px] h-[21.33px]  inline-block items-center">
      <Link href="/CN">
        <a className="text-white font-medium hover:text-gray-200">CN</a>
      </Link>
    </li>
    <li className="absolute left-[122.67px] top-[0px] w-[180px] h-[40.33px] inline-block items-center">
      <div >
        <ConnectButton />
      </div>
    </li>
  </div>
</nav>

)
}