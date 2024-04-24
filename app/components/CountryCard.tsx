import Image from "next/image";

const CountryCard = ({ country }: { country: Country }) => {
  return (
    <div className='w-[305px] min-h-[268px] bg-gray border border-[#505568] rounded-[20px] p-5 md:w-[430px] md:min-h-[256px] md:h-[256px] md:py-[30px] md:px-[31px]'>
      <div className="flex flex-row items-center justify-start gap-[11px]">
        <span role="img" aria-label={country.name} className="rounded-full grid place-items-center bg-white w-[52px] h-[52px] min-w-[52px] min-h-[52px] object-contain">
          {country.emoji}
        </span>
        <div className="flex flex-col justify-start items-start">
          <p className="text-[25px] text-white font-[700]">
            {country.name}
          </p>
          <div className="hidden flex-row items-center justify-center w-full mt-1 md:flex md:justify-start">
            <span className="flex flex-row items-center justify-start gap-[5px] border-r border-gray2 px-[5px]">
              <Image src="/assets/icons/location.svg" width={9.13} height={13} alt="Capital" />
              <p className="open-sans text-xs text-white">
                {country.capital}
              </p>
            </span>
            <span className="flex flex-row items-center justify-start gap-[5px] border-gray2 px-[5px]">
              <Image src="/assets/icons/world.svg" width={12.5} height={12.5} alt="Capital" />
              <p className="open-sans text-xs text-white">
                {country.states.length > 0 ? country.states.length : "--"} {country.states.length > 1 ? "states" : "state"}
              </p>
            </span>
            <span className="flex flex-row items-center justify-start gap-[5px] border-l border-gray2 px-[5px]">
              <Image src="/assets/icons/phone.svg" width={12.5} height={12.5} alt="Capital" />
              <p className="open-sans text-xs text-white">
                +{country.phone ? country.phone : "--"}
              </p>
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center mx-auto mt-[12px] md:hidden">
        <span className="flex flex-row items-center justify-start gap-[5px] border-r border-gray2 px-[5px]">
          <Image src="/assets/icons/location.svg" width={9.13} height={13} alt="Capital" />
          <p className="open-sans text-xs text-white">
            {country.capital}
          </p>
        </span>
        <span className="flex flex-row items-center justify-start gap-[5px] border-gray2 px-[5px]">
          <Image src="/assets/icons/world.svg" width={12.5} height={12.5} alt="Capital" />
          <p className="open-sans text-xs text-white">
            {country.states.length > 0 ? country.states.length : "--"} {country.states.length > 1 ? "states" : "state"}
          </p>
        </span>
        <span className="flex flex-row items-center justify-start gap-[5px] border-l border-gray2 px-[5px]">
          <Image src="/assets/icons/phone.svg" width={12.5} height={12.5} alt="Capital" />
          <p className="open-sans text-xs text-white">
            +{country.phone ? country.phone : "--"}
          </p>
        </span>
      </div>
      {country.currency && (
        <div className="flex flex-col w-full justify-start items-start mt-5 gap-[5px] font-semibold text-white border-gray2 border-b pb-2">
          <p className="text-base">Currency</p>
          <div className="flex flex-row items-center justify-start gap-[5px]">
            <span className="open-sans text-xs bg-green p-[6px] rounded-[100px]">
              {country.currency}
            </span>
            {country.currency.split(",").length > 1 && (
              <span>+{country.currency.split(",").length}</span>
            )}
          </div>
        </div>
      )}
      {country.languages.length > 0 && (
        <div className="flex flex-col w-full justify-start items-start gap-[5px] font-semibold text-white">
          <p className="text-base">Languages</p>
          <div className="flex flex-row items-center justify-start gap-[5px]">
            {country.languages.length > 0 && country.languages.map((language: Language, index: number) => (
              <span key={index} className="open-sans text-xs bg-blue p-[6px] rounded-[100px]">
                {language.name}
              </span>
            ))
            }
            {country.currency && (
              <span>+{country.currency.split(",").length}</span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryCard;
