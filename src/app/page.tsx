import Results from "@/components/Results/Results";

const API_KEY = process.env.API_KEY;


export default async function Home({ searchParams } : { searchParams: { [key: string]: | string | string[] | undefined } }) {
  const genre = searchParams?.genre || "fetchTrending";
  const queryParam = genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week";
  const res = await fetch(`https://api.themoviedb.org/3/${queryParam}?api_key=${API_KEY}&language=en-US&page=1`, { next: { revalidate: 10000 } });
  if (!res.ok) {
    throw new Error("Failed to fetch data.");
  }
  const data = await res.json();
  const results = data.results;
  // console.log(results);
  return (
     <section>
      <Results results={results} />
     </section>
  )
}
