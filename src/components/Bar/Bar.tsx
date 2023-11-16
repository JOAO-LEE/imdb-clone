import BarItem from "./BarItem/BarItem";

export default function Bar() {
    return (
        <div className="flex justify-center dark:bg-gray-800 bg-amber-300 lg:text-lg p-4">
            <BarItem title="Trending" param="fetchTrending" />
            <BarItem title="TopRated" param="fetchTopRated" />
        </div>
    )
}