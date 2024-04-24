import { gql } from "@apollo/client";
import { getClient } from "./lib/client";
import { CountriesContainer, CountryCard, SearchBar } from "./components";

async function fetchData() {
  const { data } = await getClient().query({
    query: gql`
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
    `,
  });

  return data.countries;
}

export default async function Home() {

  const countries = await fetchData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black py-[60px] px-[35px] xl:px-[70px] xl:py-[100px] overflow-x-hidden">
      <SearchBar />
      <CountriesContainer>
        {countries.map((country: Country, index: number) => (
          <CountryCard key={index} country={country} />
        ))}
      </CountriesContainer>
    </main>
  );
}
