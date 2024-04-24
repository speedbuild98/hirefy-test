import Image from 'next/image'
import React from 'react'

const SearchBar = () => {
  return (
    <div className='flex flex-row items-center justify-start bg-gray border-gray2 rounded-[45px] mb-10 px-[30px] py-3 w-[305px] md:w-[430px] xl:w-[576px]'>
      <Image src="/assets/icons/search.svg" width={27} height={27} alt="Search" />
      <input type="text" placeholder="Search..." className="open-sans bg-transparent text-[21px] text-white ml-3 w-full focus:outline-none placeholder:text-[#7D879C]" />
    </div >
  )
}

export default SearchBar