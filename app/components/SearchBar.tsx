'use client'
import Image from 'next/image'

interface SearchBarProps {
  search: string;
  setSearch: (search: string) => void;
}

const SearchBar = ({
  search,
  setSearch
}: SearchBarProps) => {
  return (
    <div className='flex flex-row items-center  z-10 justify-start border-2 bg-gray border-gray2 rounded-[45px] mx-auto mb-10 px-[30px] py-3 w-[305px] md:w-[430px] xl:w-[576px]'>
      <Image src="/assets/icons/search.svg" width={27} height={27} alt="Search" />
      <input
        autoFocus
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search..."
        className="open-sans bg-transparent text-[21px] text-white ml-3 w-full capitalize focus:outline-none placeholder:text-[#7D879C]" />
    </div >
  )
}

export default SearchBar