import { Carousel, Card } from "../components/TestimonialCardCarousel.jsx";
import { testimonialData } from "../constant/RestaurantsData.js";

const Testimonial = () => {
    const cards = testimonialData.map((card, index) => (
        <Card key={index} {...card} />
    ));

    return (
        (<div className="w-full h-full py-20">
            <div className="container max-w-[1440px]">
                <h2 className="text-3xl text-darkGray font-extrabold">Recents avtivities</h2>
            </div>
            <Carousel items={cards} />
        </div>)
    );
}

export default Testimonial;