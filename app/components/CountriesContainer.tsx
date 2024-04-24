interface CountriesContainerProps {
  children: React.ReactNode;
}

const CountriesContainer = ({ children }: CountriesContainerProps) => {
  return (
    <div className="flex flex-col w-full flex-wrap justify-center items-center gap-5 xl:flex-row xl:justify-start xl:items-start">
      {children}
    </div>
  )
}

export default CountriesContainer