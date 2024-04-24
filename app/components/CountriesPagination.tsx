import Image from 'next/image';
import { useState } from 'react';

interface CountriesPaginationProps {
  totalPages: number;
  currentPage: number;
  paginate: (pageNumber: number) => void;
}

const CountriesPagination = ({ totalPages, currentPage, paginate }: CountriesPaginationProps) => {
  const [startPage, setStartPage] = useState(1);
  const maxPagesToShow = 5;

  const handleClick = (page: number) => {
    paginate(page);
    if (page >= startPage + maxPagesToShow - 1) {
      setStartPage(page - maxPagesToShow + 2);
    } else if (page <= startPage) {
      setStartPage(page);
    }
  };

  const pages = Array.from({ length: Math.min(maxPagesToShow, totalPages) }, (_, index) => startPage + index);

  return (
    <div className='flex flex-row items-center justify-center text-white font-bold mt-10 gap-2 text-sm'>
      <button
        className="bg-gray rounded-lg border border-[#505568] min-w-8 min-h-8 flex justify-center items-center"
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <Image src={currentPage === 1 ? '/assets/icons/arrow-disabled.svg' : '/assets/icons/arrow.svg'}
          height={12} width={7.41} alt="Arrow Left" className={`${currentPage !== 1 && 'transform rotate-180'}`} />
      </button>
      {pages.map((page: number) => (
        <button
          key={page}
          className={`bg-gray rounded-lg border border-[#505568] min-w-8 min-h-8 flex justify-center items-center ${currentPage === page && 'border-white'}`}
          onClick={() => handleClick(page)}
        >
          {page}
        </button>
      ))}
      <button
        className="bg-gray rounded-lg border border-[#505568] min-w-8 min-h-8 flex justify-center items-center"
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <Image src={currentPage === totalPages ? '/assets/icons/arrow-disabled.svg' : '/assets/icons/arrow.svg'}
          height={12} width={7.41} alt="Arrow Right" className={`${currentPage === totalPages && 'transform rotate-180'}`} />
      </button>
    </div>
  );
};

export default CountriesPagination;
