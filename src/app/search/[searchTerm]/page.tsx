import Results from "@/components/Results/Results";
import { IMovie } from "@/interfaces/IMovie";

const getMovieBySearch = async (searchValue: string) => {
    const response = await fetch(`http://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchValue}&language=en-US&include_adult=false`, { next: { revalidate: 10000 } });
    if (!response.ok) {
        throw new Error("Something went wrong...")
    }
    const result = await response.json();
    return result;
}

export default async function SearchPage({ params: { searchTerm } }: { params: { searchTerm: string }}) {
    const search = await getMovieBySearch(searchTerm);
    // console.log(search.results)
    return (
        <main>
       {
            search.results && search.results.length === 0 
            ? 
            <h1 className="text-center pt-5">Sorry... there are no results for this search.</h1>
            :
            <section>
                <Results results={search.results} />
            </section> 

       }
        </main>
    )
}