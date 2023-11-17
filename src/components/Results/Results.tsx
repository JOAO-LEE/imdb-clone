import {IResults} from "@/interfaces/IResult";
import Card from "../Card/Card";

export default function Results({ results }: { results: IResults[] | undefined })  {
    return (
        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
            {results?.map((res) => (
             <Card key={res.id} result={res} /> 
            ))}
        </div>
    )
}