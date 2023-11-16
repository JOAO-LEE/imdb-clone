import IResults from "@/interfaces/IResult";

export default function Results({ results }: { results: IResults[] | undefined })  {
    return (
        <div>
            {results?.map((res) => (
             <div key={res.id}>
                {res.original_name}
             </div>   
            ))}
        </div>
    )
}