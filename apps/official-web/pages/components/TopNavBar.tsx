import Link from 'next/link'
import { ConnectButton } from '@rainbow-me/rainbowkit'

export default function TopNavBar() {
  return (
    <nav className="relative left-[10rem] top-0 flex h-[5.333rem] w-full flex-row items-center justify-center lg:left-[160px] lg:h-[85.33px] lg:w-[1600px]">
      <div className="absolute left-[0px] top-[1.604rem] flex h-[2.125rem] w-[8.625rem] items-center justify-center lg:top-[25.67px] lg:h-[34px] lg:w-[138px]">
        <img src="/images/logo.png"></img>
      </div>
      <div className="absolute left-[16.563rem] top-[2.079rem] flex h-[0.75rem] w-[27.583rem] items-center justify-start space-x-[3.458rem] lg:left-[265px] lg:top-[33.17px] lg:h-[19px] lg:w-[437.33px] lg:space-x-[55.33px]">
        <ul className="flex justify-start ">
          <li className="mx-10 flex-shrink-0">
            <Link href="/">
              <p className="hover:text-gray-20 font-medium text-white">Home</p>
            </Link>
          </li>
          <li className="mx-10 flex-shrink-0">
            <Link href="/components/Advantage">
              <p className="font-medium text-white hover:text-gray-200">
                Advantage
              </p>
            </Link>
          </li>
          <li className="mx-10 flex-shrink-0">
            <Link href="/components/RoadMap">
              <p className="font-medium text-white hover:text-gray-200">
                RoadMap
              </p>
            </Link>
          </li>
          <li className="mx-10 flex-shrink-0">
            <Link href="/components/Partner">
              <p className="font-medium text-white hover:text-gray-200">
                Partner
              </p>
            </Link>
          </li>
          <li className="mx-10 flex-shrink-0 ">
            <Link href="/components/Community">
              <p className="font-medium text-white hover:text-gray-200">
                Community
              </p>
            </Link>
          </li>
        </ul>
      </div>
      <div className="item-center absolute left-[84.333rem] top-[1.406rem] flex h-[2.521rem] w-[15.667rem] justify-start lg:left-[1349.33px] lg:top-[22.5px] lg:h-[40.33px] lg:w-[250.67px]">
        {/* <li className="absolute left-[0px] top-[0.594rem] inline-block h-[1.333rem] w-[5.667rem] items-center lg:h-[21.33px] lg:w-[90.67px]">
          <Link href="/components/CN">
            <a className="font-medium text-white hover:text-gray-200">CN</a>
          </Link>
        </li> */}

        <li className="absolute left-[7.719rem] top-0 inline-block h-[2.521rem] w-[11.25rem] items-center lg:h-[40.33px] lg:w-[180px]">
          <div>
            <ConnectButton />
          </div>
        </li>
      </div>
    </nav>
  )
}
