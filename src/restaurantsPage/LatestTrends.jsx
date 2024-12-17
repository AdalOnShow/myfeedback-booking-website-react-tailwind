import Card from "../components/Card.jsx";
import { latestCardData } from "../constant/RestaurantsData.js";
import Button from "../components/Button.jsx";

const LatestTrends = () => {
    return (
        <section className="px-6 xl:px-0">
            <div className="container max-w-[1440px] my-24">
                <h2 className="text-3xl font-extrabold text-[#1e1e1e] mb-6">The latest trends</h2>
                <div className="w-full grid grid-cols-2 md:grid-cols-4 place-content-between gap-6">
                    {latestCardData.map((card, i) => (
                        <Card key={i} {...card} />
                    ))}
                </div>
                <div className="my-20 flex flex-col justify-center items-center">
                    <h2 className="text-[22px] text-[#1e1e1e] text-center mb-5">Discover more cool restaurants</h2>
                    <Button variant="primary">Show more</Button>
                </div>
            </div>
        </section>
    )
}
export default LatestTrends
