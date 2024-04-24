'use client'
import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { CountriesContainer, CountriesPagination, CountryCard, SearchBar } from "./components";
import { useState } from "react";

const query = gql`
      query {
        countries {
          capital
          currency
          emoji
          emojiU
          name
          native
          phone
          states{
            name
          }
          languages {
            code
            name
          }
        }
      }
    `;


export default function Home() {
  const { data } = useSuspenseQuery(query) as { data?: { countries: Country[] } };
  const [search, setSearch] = useState<string>("")
  const [currentPage, setCurrentPage] = useState<number>(1);
  const countriesPerPage = 12;

  const filteredData = data?.countries.filter((country: Country) => {
    return country.name.toLowerCase().includes(search.toLowerCase())
  });

  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = filteredData?.slice(indexOfFirstCountry, indexOfLastCountry);
  const totalPages = Math.ceil((filteredData?.length || 0) / countriesPerPage);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-black py-[60px] px-[35px] xl:pl-[70px] xl:py-[100px] overflow-x-hidden">
      <SearchBar search={search} setSearch={setSearch} />
      <CountriesContainer>
        {filteredData ? filteredData.length > 0 && currentCountries?.map((country: Country, index: number) => (
          <CountryCard key={index} country={country} />
        )) :
          <p className="text-white text-[21px] font-bold">No countries found</p>
        }
        {filteredData && filteredData.length === 0 && <p className="text-white text-[21px] font-bold">No countries found</p>}
      </CountriesContainer>
      {filteredData && filteredData.length > 0 &&
        <CountriesPagination totalPages={totalPages} paginate={paginate} currentPage={currentPage} />
      }
    </main>
  );
}
