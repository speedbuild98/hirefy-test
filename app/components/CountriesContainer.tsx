const CountriesContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col w-full flex-wrap justify-center items-center gap-5 xl:flex-row xl:justify-center xl:items-start">
      {children}
    </div>
  )
}

export default CountriesContainer